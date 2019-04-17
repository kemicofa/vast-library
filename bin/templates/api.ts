/* tslint:disable: no-console */

export function templateAPIFile(
  version: string,
  vastVersion: number,
  content: string
) {
  return `
/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import V from '../../src/vast-element';

${templateHelpers()}

${content}

export { apiv${version}, VAST_${vastVersion} };
`;
}

export function templateValidatorFile(version: string, validator: any) {
  return `
/* tslint:disable: variable-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

export const vastValidator${version} = ${JSON.stringify(validator)};
`;
}

function templateHelpers() {
  return `
function p<T extends V<any>>(newElem: T): T {
  newElem.parent.childs.push(newElem);
  return newElem;
}`;
}

export function templateClass(
  className: string,
  parentName: string,
  methods: string,
  isFirst: boolean
): string {
  const isFirstContent = isFirst
    ? `public and() {
    return this;
  }
  `
    : "";
  return `
class ${className} extends V<${parentName}> {
  ${methods}
  ${isFirstContent}
}`;
}

export function templateAttachMethod(
  methodName: string,
  args: string,
  argsWithTypes: string,
  childClass: string,
  infos: any
): string {
  const comma = args ? "," : "";
  return `
public attach${methodName}(${argsWithTypes}): ${childClass} {
  return p<${childClass}>(new ${childClass}('${methodName}', this, ${infos}${comma} ${args}));
}`;
}

export function templateAddMethod(
  methodName: string,
  args: string,
  argsWithTypes: string,
  className: string
): string {
  return `
public add${methodName}(${argsWithTypes}): ${className} {
  return this.attach${methodName}(${args}).and();
}`;
}

export function templateGetArgs(
  hasContent: boolean,
  hasAttrs: boolean
): string {
  let args = "";
  // const attributesType = JSON.stringify(currentAttrs);
  if (hasContent) {
    args = "content";
    if (hasAttrs) {
      args += ", attributes";
    }
  } else if (hasAttrs) {
    args = "attributes";
  }
  return args;
}

export function templateGetArgsWithTypes(
  hasContent: boolean,
  hasAttrs: boolean,
  attrsTypes: string,
  requiredAttribute: boolean
): string {
  let args = "";
  const opt = requiredAttribute ? "" : ""; // "?"; deprecated
  const defaultValue = requiredAttribute ? "" : " = {}";
  if (hasContent) {
    args = "content: string";
    if (hasAttrs) {
      args += `, attributes${opt}: ${attrsTypes}${defaultValue}`;
    }
  } else if (hasAttrs) {
    args = `attributes${opt}: ${attrsTypes}${defaultValue}`;
  }
  return args;
}
