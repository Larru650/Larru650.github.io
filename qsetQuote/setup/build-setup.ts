import fs from 'fs';
import ncp from 'ncp';
import path from 'path';

declare const process: any;
declare const __dirname: string;

const UTF8 = 'UTF8';
const serverBuildDir = 'server';
const logFile = path.join(__dirname, '../build-setup.log');
const processArgs: string[] = process.argv;
const processEnv: { [key: string]: string | null } = process.env;
type MessageType = 'INFO' | 'ERROR' | 'WARN';

const appendToDisk = (msg: string, type: MessageType): void => {
  fs.appendFileSync(logFile, `${type} ${msg}\n`);
};

const consoleLog = (msg: string): void => {
  appendToDisk(msg, 'INFO');
  console.log(msg);
};

const consoleError = (msg: string): void => {
  appendToDisk(msg, 'ERROR');
  console.error(msg);
};

const consoleWarn = (msg: string): void => {
  appendToDisk(msg, 'WARN');
  console.log(msg);
};

const startTime = new Date().getTime();

const finished = (msg: string): void => {
  const log = `Finished ${msg} commands (time taken: ${new Date().getTime() - startTime}ms)`;
  consoleLog(log);
  consoleLog('='.repeat(log.length));
};

consoleLog(`The arguments are:\n    "${processArgs.join('"\n    "')}"`);
let cfgver: string = processArgs[2]; // one of 'Developer', 'Octopus', '*'
const command = processArgs[3]; // 'prebuild' or 'postbuild'
const basePath = processArgs[4] || '.'; // only provided when in test mode (see "test-postbuild" in package.json)
const inTestMode = processArgs[5] === 'true';

if (cfgver === '*') {
  cfgver = processEnv.NODEJS_CONFIG_ENVIRONMENT || processEnv.NODEJS_DEPLOY_ENVIRONMENT || ''; // DEPLOY is the old name.
  if (cfgver) {
    consoleLog(
      `Configuration version has been set using environment variable 'NODEJS_CONFIG_ENVIRONMENT': "${cfgver}"`
    );
  }
} else {
  consoleLog(`Configuration version has been provided: ${cfgver}`);
}

cfgver = cfgver || 'Octopus';

const packageFile = `${basePath}/package.json`;
const packageFileBackup = `${basePath}/package-backup.json`;
const envPackageFile = `${basePath}/package.${cfgver}.json`;

const configurationFile = `${basePath}/[PATH]/config/configuration.ts`;
const envConfigurationFile = `${basePath}/[PATH]/config/configuration.${cfgver}.ts`;
const serverFile = `${basePath}/server/server.ts`;

const isDocker = processEnv.PWD === '/app'; // isDocker will also be isOctopus
const isDeveloper = cfgver !== 'Octopus';

consoleLog(`Is developer configuration version? ${isDeveloper}`);
consoleLog(`Is docker? ${isDocker}`);
consoleLog(`In test mode? ${inTestMode}`);
consoleLog(`Configuration version: '${cfgver}'`);

if (command === 'prebuild') {
  consoleLog(`Running pre-build commands for configuration version ${cfgver}...`);
  if (!fs.existsSync(envPackageFile)) {
    consoleLog(
      `Didn't find any ${envPackageFile} file. No custom configuration for the ${cfgver} configuration version.`
    );
  } else {
    const origPackage = JSON.parse(fs.readFileSync(packageFile, UTF8));
    const envPackage = JSON.parse(fs.readFileSync(envPackageFile, UTF8));
    const compPackage = Object.assign({}, origPackage, envPackage);
    fs.copyFileSync(packageFile, packageFileBackup);
    fs.writeFileSync(packageFile, JSON.stringify(compPackage, null, 4));
    consoleLog(`Merged ${envPackageFile} into ${packageFile}.`);
  }

  for (const path of ['src', 'server']) {
    const envCfgFile = envConfigurationFile.replace(/\[PATH\]/, path);
    const cfgFile = configurationFile.replace(/\[PATH\]/, path);
    if (!fs.existsSync(envCfgFile)) {
      consoleLog(
        `Didn't find any ${envCfgFile} file. No custom configuration for the ${cfgver} configuration version.`
      );
    } else {
      const cfgContent = fs.readFileSync(cfgFile, UTF8);
      const cfgContentMod = cfgContent.replace(
        / from '\.\/configuration\.Developer';/,
        ` from './configuration.${cfgver}';`
      );
      if (cfgContentMod !== cfgContent) {
        fs.writeFileSync(cfgFile, cfgContentMod);
        consoleLog(`Referenced ${envCfgFile} in ${cfgFile}.`);
      } else {
        consoleError(`Did not replace anything in ${cfgFile}.`);
      }
    }
  }

  // DataDog tracing
  // The ./tracer file must come first in the file; see https://docs.datadoghq.com/tracing/setup/nodejs/#typescript
  consoleLog('Moving ./tracer import to the top of the server.ts file');
  let serverContent = fs.readFileSync(serverFile, UTF8);
  serverContent = "import './tracer';\n" + serverContent;
  fs.writeFileSync(serverFile, serverContent);

  finished('pre-build');
} else if (command === 'postbuild') {
  consoleLog(`Running post-build commands on configuration version ${cfgver}...`);
  for (const fileOrDir of ['certs/']) {
    const fullPath = `${basePath}/${fileOrDir}`;
    if (fs.existsSync(fullPath)) {
      const isDir: boolean = fs.lstatSync(fullPath).isDirectory();
      const extraPath = isDir ? `/${fileOrDir}` : '';
      const targetPath = `${basePath}/${serverBuildDir}${extraPath}`;
      ncp(fullPath, targetPath, errs => {
        if (errs) {
          consoleLog(`Error copying ${isDir ? 'directory' : 'file'} "${fileOrDir}" with error(s): ${errs}`);
        } else {
          consoleLog(`Copied ${fileOrDir} to ${targetPath}`);
        }
      });
    } else {
      consoleWarn(`Unable to copy ${fullPath}: location does not exist.`);
    }
  }
} else {
  consoleError(`Invalid command arg: "${command}". Expected one of 'prebuild', 'postbuild'.`);
  processArgs.map((arg, i) => consoleLog(`arg[${i}]->"${arg}"`));
}
