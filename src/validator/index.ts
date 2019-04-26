import { Element, xml2js } from "xml-js";
import { logError } from "../utils/logs";
import { validateNext } from "../utils/validate-node";
import { buildVast } from "../utils/vast";
import VastElement from "../vast-element";

import { vastValidator2_0 } from "../../generated/api/vast2_0-validator";
import { vastValidator3_0 } from "../../generated/api/vast3_0-validator";
import { vastValidator4_0 } from "../../generated/api/vast4_0-validator";
import { vastValidator4_1 } from "../../generated/api/vast4_1-validator";

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
    parsedXml = xml2js(vastRawCode) as Element;
  } catch (error) {
    if (options.logWarn) {
      logError(`Error during the vast parsing, it seems not valid XML`);
    }
    return null;
  }
  const root = new VastElement();
  root.parseOptions(options);

  // this modify root
  buildVast(parsedXml as any, root);

  return root;
}

export default class VastValidator {
  public vastRoot: VastElement<null>;
  constructor(vastRaw: string, options?: VastParserOptions);
  constructor(
    vast: VastElement<any> | string,
    options: VastParserOptions = {}
  ) {
    if (typeof vast === "string") {
      vast = parseVast(vast, options);
    }
    this.vastRoot = vast.getRoot();
  }

  // > validate your current vast build. print error if options.logWarn = true
  // * validate(): boolean
  public validate() {
    const validator = validators[this.vastRoot.getVastSnakeVersion()].validator;
    return validateNext(this.vastRoot, validator);
  }
}
