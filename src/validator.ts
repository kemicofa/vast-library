import convert from "xml-js";
import VastElement from "./vast-element";
import { validateNext } from "./utils/validate-node";
import { logError } from "./utils/logs";
import { buildVast } from "./utils/vast";

import { validator as vastValidator2_0 } from "../build/api/vast2_0";
import { validator as vastValidator3_0 } from "../build/api/vast3_0";
import { validator as vastValidator4_0 } from "../build/api/vast4_0";
import { validator as vastValidator4_1 } from "../build/api/vast4_1";

const validators = {
  "2_0": vastValidator2_0,
  "3_0": vastValidator3_0,
  "4_0": vastValidator4_0,
  "4_1": vastValidator4_1
};

function parseVast(vastRawCode: string, options: VastParserOptions = {}) {
  options = {
    logWarn: false,
    ...options
  };
  let parsedXml: Element;
  try {
    parsedXml = convert.xml2js(vastRawCode) as Element;
  } catch (error) {
    if (options.logWarn) {
      logError(`Error during the vast parsing, it seems not valid XML`);
    }
    return null;
  }
  const root = new VastElement();
  root.parseOptions(options);

  // this modify root
  buildVast(parsedXml, root);

  return root;
}

export default class VastValidator {
  vastRoot: VastElement<null>;
  constructor(vastRaw: string, options: VastParserOptions);
  constructor(
    vast: VastElement<any> | string,
    options: VastParserOptions = {}
  ) {
    if (typeof vast === "string") {
      vast = parseVast(vast, options);
    }
    this.vastRoot = vast.getRoot();
  }

  //> validate your current vast build. print error if options.logWarn = true
  //* validate(): boolean
  validate() {
    const validator = validators[this.vastRoot.getVastSnakeVersion()].validator;
    return validateNext(this.vastRoot, validator);
  }
}
