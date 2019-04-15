const convert = require("xml-js");
const VastElement = require("./vast-element");
const { introError } = require("./utils/colors");

function buildVast(current, currentTag) {
  /* istanbul ignore next */
  if (current && current.elements) {
    if (
      current.elements.length == 1 &&
      (current.elements[0].text || current.elements[0].cdata)
    ) {
      const currentTmp = current.elements[0];
      const currentText = currentTmp.text || currentTmp.cdata;
      currentTag.content = currentText;
    } else {
      for (let i = 0; i < current.elements.length; i++) {
        const currentTmp = current.elements[i];
        currentChild = currentTag.dangerouslyAttachCustomTag(
          currentTmp.name,
          currentTmp.attributes
        );
        buildVast(currentTmp, currentChild);
      }
    }
  }
}

module.exports = function parseVast(vastRawCode, options = {}) {
  options = Object.assign(
    {},
    {
      logWarn: false
    },
    options
  );
  let parsedXml;
  try {
    parsedXml = convert.xml2js(vastRawCode);
  } catch (error) {
    if (options.logWarn) {
      console.error(
        `${introError} Error during the vast parsing, it seems not valid XML`
      );
    }
    return false;
  }
  let root = new VastElement();
  root.parseOptions(options);

  buildVast(parsedXml, root);

  return root.validate();
};
