import { hasOwnProperty, SMap } from '@avantia/client-and-server-utilities';

export const tokenPrefix = '{{',
  tokenSuffix = '}}';

export function templateResolver(template: string, model: SMap<string | number | (() => string | number)>): string {
  if (!template || template.indexOf(tokenPrefix) < 0) {
    return template;
  }

  getTokensInTemplate(template).forEach(name => {
    const value = hasOwnProperty(model, name) ? model[name] : `[${name}]`;
    template = template.replace(
      `${tokenPrefix}${name}${tokenSuffix}`,
      '' + (typeof value === 'function' ? value() : value)
    );
  });

  return template;
}

export function getTokensInTemplate(template: string): string[] {
  let startAt = 0;
  const tokens: string[] = [];
  while (startAt >= 0) {
    const ix = template.indexOf(tokenPrefix, startAt);
    if (ix >= 0) {
      const ie = template.indexOf(tokenSuffix, ix);
      if (ie > ix) {
        const token = template.substring(ix + tokenPrefix.length, ie);
        tokens.push(token);
        startAt = ix + tokenSuffix.length;
      } else {
        startAt++;
      }
    } else {
      startAt = -1;
    }
  }

  return tokens;
}
