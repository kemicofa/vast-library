import * as fs from "fs-extra";
import { getType } from "../utils/build";

export function getSimpleApiMethodDoc(allContent, openCode) {
  return `
${openCode ? "```js\n" : ""}${allContent}
\`\`\`\n`;
}

export function getApiMethodDoc(
  comments,
  methodName,
  parameters,
  returnValue,
  returnValueRealName,
  lastLvlElement
) {
  let output = `
\`\`\`js
// ${comments}
${methodName}(${parameters.join(", ")}): ${returnValue}
\`\`\``;
  output += `\n\n↘ _go to [${returnValue}](#${returnValueRealName})_`;
  output += methodName.startsWith("add") ? " _(current class)_" : "";
  output += lastLvlElement ? " _(last level element)_" : "";
  return output + "\n";
}

export function getArgsDocTemplate(hasContent, hasAttrs, attrs) {
  const apiParameters = [];
  if (hasContent) {
    apiParameters.push("content: string");
  }
  if (hasAttrs) {
    apiParameters.push("attributes: " + getType(attrs, true));
  }
  return apiParameters;
}

// parse VastElement file to complete method in documentation
export function asyncGetVastElementDoc(callback) {
  const methods = [];
  const lineReader = require("readline").createInterface({
    input: fs.createReadStream("./common/vast-element.ts")
  });
  let commentsOpen = false;
  lineReader.on("line", line => {
    if (/\/\/\*/.test(line)) {
      const methodDoc = line.replace("//*", "").trim();
      methods.push(getSimpleApiMethodDoc(methodDoc, !commentsOpen));
      commentsOpen = false;
    }
    if (/\/\/>/.test(line)) {
      methods.push("\n```js\n" + line.replace(">", "").trim());
      commentsOpen = true;
    }
  });
  lineReader.on("close", () => {
    callback(methods);
  });
}

export function getApiDocumentationTemplate(vastVersion, doc) {
  let outputDoc = `# VAST${vastVersion} API Documentation`;
  // tslint:disable-next-line:variable-name
  for (const _class in doc) {
    if (!doc.hasOwnProperty(_class)) {
      continue;
    }
    const e = doc[_class];
    // anchors
    outputDoc += `\n<a id="${e.realName}" name="${e.realName}"></a>`;
    outputDoc += `\n## Class ${e.name}`;
    if (e.extends) {
      outputDoc += ` _extends_ ${e.extends}`;
    }
    ["only", "required", "uniq", "alo"].forEach(elem => {
      if (e[elem]) {
        outputDoc += `\n\n`;
        switch (elem) {
          case "only":
            outputDoc += `This child once is the only one allowed at this level below ${
              e.parentName
            }`;
            break;
          case "required":
            outputDoc += `This child is required below ${e.parentName}`;
            break;
          case "uniq":
            outputDoc += `An uniq one of this child or others at same level are required below ${
              e.parentName
            }`;
            break;
          case "alo":
            outputDoc += `At last one of this child and/or others are required below ${
              e.parentName
            }`;
            break;
        }
        outputDoc += ` in VAST${vastVersion} spec`;
      }
    });
    outputDoc += "\n\n";
    if (e.parentName) {
      outputDoc += `child of [${e.parentName}](#${e.realParentName}) ↗\n\n`;
    }
    if (e.methods.length) {
      outputDoc += "### methods\n\n";
      if (e.name !== "VastElement") {
        outputDoc += "_all herited from [VastElement](#VastElement)_ and : \n";
      }
      for (let i = 0; i < e.methods.length; i++) {
        const methodCode = e.methods[i];
        outputDoc += methodCode;
      }
    } else {
      outputDoc += "_no specific methods see [VastElement](#VastElement)_";
    }
  }
  return outputDoc;
}
