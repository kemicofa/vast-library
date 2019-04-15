import convert, { Element } from "xml-js";
import VastElement from "./vast-element";
import { logError } from "./utils/logs";

function buildVast(current: Element, currentTag: VastElement) {
  /* istanbul ignore next */
  if (current && current.elements) {
    if (
      current.elements.length == 1 &&
      (current.elements[0].text || current.elements[0].cdata)
    ) {
      const currentTmp = current.elements[0];
      const currentText = String(currentTmp.text || currentTmp.cdata);
      currentTag.content = currentText;
    } else {
      let currentChild: VastElement;
      for (let i = 0; i < current.elements.length; i++) {
        const currentTmp: Element = current.elements[i];
        currentChild = currentTag.dangerouslyAttachCustomTag(
          currentTmp.name,
          String(currentTmp.attributes)
        );
        buildVast(currentTmp, currentChild);
      }
    }
  }
}

// TODO destructure options in constructor
export function parseVast(vastRawCode: string, options: ParserOptions = {}) {
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
    return false;
  }
  let root = new VastElement();
  root.parseOptions(options);

  buildVast(parsedXml, root);

  // TODO restore that
  return root.validate();
}
