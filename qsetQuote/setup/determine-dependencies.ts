import { SMap } from '@avantia/client-and-server-utilities';
import depcruise from 'dependency-cruiser';
import { writeFileSync } from 'fs';

declare const __dirname: string;

const moduleMap: SMap<string[] | null> = {};

const scriptName = 'transformSections';
const scriptPath = './server/nhiIntegration/transformSections.ts';

const res = depcruise.cruise([scriptPath], {
  exclude: '^node_modules',
  outputType: 'json'
});
const dependencies = JSON.parse(res.output as string);
writeFileSync(`${__dirname}/${scriptName}-dependencies.json`, JSON.stringify(dependencies, null, 2));

dependencies.modules.forEach((m) => {
  const { source, dependencies } = m;
  const deps = dependencies.map((d) => d.resolved);
  moduleMap[source] = deps.length > 0 ? deps : null;
});

const data = createGraph('./server/nhiIntegration/transformSections.ts');
const dataJson = JSON.stringify(data, null, 2);

writeFileSync(`${__dirname}/${scriptName}-dependency-tree.json`, dataJson);
console.log(dataJson);

function createGraph(script: string, seen: SMap<boolean> = {}): ScriptNode {
  let deps = moduleMap[script];
  if (deps !== null) {
    deps = deps.sort().filter((s) => !seen[s]);
    deps.forEach((dep) => (seen[dep] = true));
  }

  const res: ScriptNode = { script };
  if (deps && deps.length > 0) {
    res.dependencies = deps.map((dep) => createGraph(dep, seen));
  }
  return res;
}

interface ScriptNode {
  script: string;
  dependencies?: ScriptNode[];
}
