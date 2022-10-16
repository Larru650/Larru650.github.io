import {
  AdfsFacadePackages,
  packageDependencies as adfsFacadeDependencies,
  packageVersion as adfsFacade
} from '@avantia/adfs-facade';
import { packageVersion as clientAndServerUtilities } from '@avantia/client-and-server-utilities';
import { packageVersion as formValidation } from '@avantia/form-validation';
import {
  packageDependencies as questionSetModelDependencies,
  packageVersion as questionSetModel,
  QuestionSetModelPackages
} from '@avantia/questionset-model';
import {
  packageDependencies as questionSetScriptParserDependencies,
  packageVersion as questionSetScriptParser,
  QuestionSetScriptParserPackages
} from '@avantia/questionset-script-parser';
import { logDebug, packageVersion as serverBase } from '@avantia/server-base';

export interface WebsitePackages {
  formValidation: string;
  clientAndServerUtilities: string;
  questionSetModel: string;
  questionSetScriptParser: string;
  adfsFacade: string;
  serverBase: string;
}

export function verifyPackageVersions(): void {
  const errors: string[] = [];
  const directDependencies: WebsitePackages = {
    formValidation,
    clientAndServerUtilities,
    questionSetModel,
    questionSetScriptParser,
    serverBase,
    adfsFacade
  };
  errors.push(...checkVersions(directDependencies, 'questionSetModel', questionSetModelDependencies));
  errors.push(...checkVersions(directDependencies, 'questionSetScriptParser', questionSetScriptParserDependencies));
  errors.push(...checkVersions(directDependencies, 'adfsFacade', adfsFacadeDependencies));
  if (errors.length > 0) {
    throw new Error(`There are package version problems:\n  ${errors.join('\n  ')}`);
  }

  logDebug({
    message: `All packages are inline`,
    dependencies: directDependencies,
    questionSetModel: questionSetModelDependencies,
    questionSetScriptParser: questionSetScriptParserDependencies,
    adfsFacade: adfsFacadeDependencies
  });
}

export function checkVersions(
  directDependencies: WebsitePackages,
  packageName: string,
  packageDependencies: QuestionSetModelPackages | QuestionSetScriptParserPackages | AdfsFacadePackages
): string[] {
  const keysToCheck: (keyof WebsitePackages)[] = [
    'clientAndServerUtilities',
    'formValidation',
    'questionSetModel',
    'serverBase'
  ];
  const errors: string[] = [];
  for (const keyToCheck of keysToCheck) {
    const websiteVersion = directDependencies[keyToCheck];
    const otherVersion = packageDependencies[keyToCheck];
    if (otherVersion !== undefined && websiteVersion !== otherVersion) {
      errors.push(
        `The '${keyToCheck}' dependency references different versions. This project uses ${websiteVersion}, '${packageName}' uses ${otherVersion}.`
      );
    }
  }

  return errors;
}
