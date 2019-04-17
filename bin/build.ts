/* tslint:disable: no-console object-literal-sort-keys */

// IDEAS :
// TODO : see if renaming VastElement to VE is worth in term of saved size

import * as fs from "fs-extra";
import * as yaml from "js-yaml";
import * as prettier from "prettier";

import {
  templateAddMethod,
  templateAPIFile,
  templateAttachMethod,
  templateClass,
  templateGetArgs,
  templateGetArgsWithTypes,
  templateValidatorFile
} from "./templates/api";

import {
  asyncGetVastElementDoc,
  getApiDocumentationTemplate,
  getApiMethodDoc,
  getArgsDocTemplate
} from "./templates/doc";

import {
  extractFirst,
  getType,
  isRequiredType,
  isValidKeyWord
} from "./utils/build";
import { VersionNumber } from "./utils/version";

const vastVersion = new VersionNumber(process.argv[2]);

console.log("=========================");
console.log("===> build version", vastVersion.int());
console.log("=========================");

let datas: any;
try {
  datas = yaml.safeLoad(
    fs.readFileSync(`./specs/vast${vastVersion.floatSnake()}.yml`, "utf8")
  );
} catch (error) {
  console.log("=> unable to load specs", error);
  process.exit(1);
}

fs.mkdirsSync("./build/api");
fs.mkdirsSync("./build/doc");

// remove configs from data
const filteredDatas = {
  VAST: datas.VAST
};

const allClassList: string[] = [];
const apiDocumentation: any = {
  VastElement: {
    name: "VastElement",
    realName: "VastElement",
    methods: [] // are completed dynamicly in end of this build
  }
};

// adjust to vast api number, just to intellisense beeing clean
let classNumber = vastVersion.intFloor();

const generateApiAndDoc = (
  isFirst: boolean,
  currentName: string,
  dataObject: any,
  overrideName: string = "",
  parentName: string = ""
) => {
  // prevent to hit reserved word like "Error"
  const currentUsedName = overrideName ? overrideName : currentName;

  const currentDocName = currentUsedName.split("_")[0];
  const parentDocName = parentName.split("_")[0];

  apiDocumentation[currentUsedName] = {
    name: currentDocName,
    realName: currentUsedName,
    parentName: parentDocName,
    realParentName: parentName,
    extends: "VastElement",
    methods: []
  };

  ["only", "required", "uniq", "alo"].forEach(elem => {
    if (dataObject && dataObject[elem] && dataObject[elem] === true) {
      apiDocumentation[currentUsedName][elem] = true;
    }
  });

  const methodsList = [];
  for (const childName in dataObject) {
    if (!isValidKeyWord(childName)) {
      continue;
    }
    // allow unicity of class names
    const usedChildName = childName + "_" + classNumber++;
    const child = dataObject[childName];

    // manage print content
    const infos: any = {};
    const hasContent =
      child === null || Object.keys(child).filter(isValidKeyWord).length === 0;
    const hasAttrs = (child && child.attrs && child.attrs.length > 0) || false;
    // const isRequired = (child && child.required) || false;
    const hasChild =
      (child && Object.keys(child).filter(isValidKeyWord).length !== 0) ||
      false;
    const currentAttrs = (child && child.attrs) || {};

    if (hasAttrs) {
      infos.attrs = child.attrs.reduce((prev: any, next: any) => {
        if (typeof next === "object") {
          prev.push(extractFirst(next).name);
        } else {
          prev.push(next);
        }
        return prev;
      }, []);
    }
    // for API
    const apiArguments = templateGetArgs(hasContent, hasAttrs);
    const apiArgumentsWithTypes = templateGetArgsWithTypes(
      hasContent,
      hasAttrs,
      getType(currentAttrs, true),
      isRequiredType(currentAttrs)
    );
    // for documentation
    const docArguments = getArgsDocTemplate(hasContent, hasAttrs, currentAttrs);

    methodsList.push(
      templateAttachMethod(
        childName,
        apiArguments,
        apiArgumentsWithTypes,
        usedChildName,
        JSON.stringify(infos)
      )
    );

    if (!hasChild) {
      methodsList.push(
        templateAddMethod(
          childName,
          apiArguments,
          apiArgumentsWithTypes,
          currentUsedName
        )
      );
      apiDocumentation[currentUsedName].methods.push(
        getApiMethodDoc(
          `Add a "${childName}" child to current "${currentDocName}". Return "${currentDocName}" to stay on same current level.`,
          "add" + childName,
          docArguments,
          currentDocName,
          currentUsedName,
          false
        )
      );
    }
    apiDocumentation[currentUsedName].methods.push(
      getApiMethodDoc(
        `Attach a "${childName}" child to current "${currentDocName}". Return "${childName}" to move on child level.`,
        "attach" + childName,
        docArguments,
        childName,
        usedChildName,
        !hasChild
      )
    );
    generateApiAndDoc(
      false,
      childName,
      dataObject[childName],
      usedChildName,
      currentUsedName
    );
  }
  allClassList.push(
    templateClass(
      currentUsedName,
      parentName || currentName,
      methodsList.join(""),
      isFirst
    )
  );
};

generateApiAndDoc(true, `apiv${vastVersion.intSnake()}`, filteredDatas);

// validator
const generateValidator = (dataObject: any) => {
  const validator: any = {};

  const validatorType: any = {
    only: {},
    required: {},
    uniq: {},
    alo: {},
    follow: {},
    attrsRequired: {}
  };
  for (const childName in dataObject) {
    if (!dataObject.hasOwnProperty(childName)) {
      continue;
    }
    if (!isValidKeyWord(childName)) {
      // managed required attributes
      if (childName === "attrs") {
        for (let i = 0; i < dataObject[childName].length; i++) {
          const attr = dataObject[childName][i];
          if (typeof attr === "object") {
            const object: any = extractFirst(attr);
            // remove non required with accepted list of value [[]]
            if (
              Array.isArray(object.content) &&
              Array.isArray(object.content[0])
            ) {
              continue;
            }
            validatorType.attrsRequired[object.name] = object.content;
          }
        }
      }
      continue;
    }
    const childDataObject = dataObject[childName];
    if (childDataObject) {
      ["only", "required", "uniq", "alo"].forEach(elem => {
        if (childDataObject[elem]) {
          validatorType[elem][childName] = generateValidator(childDataObject);
        }
      });
    }
    if (
      !childDataObject ||
      (!childDataObject.only &&
        !childDataObject.required &&
        !childDataObject.uniq &&
        !childDataObject.alo)
    ) {
      validatorType.follow[childName] = generateValidator(childDataObject);
    }
  }
  // add gathered element to validator
  for (const key in validatorType) {
    if (!validatorType.hasOwnProperty(key)) {
      continue;
    }
    const element = validatorType[key];
    if (Object.keys(element).length > 0) {
      validator[key] = { ...element };
    }
  }
  return validator;
};

// writing API
fs.writeFileSync(
  `./build/api/vast${vastVersion.floatSnake()}.ts`,
  prettier.format(
    templateAPIFile(
      vastVersion.intSnake(),
      vastVersion.intFloor(),
      allClassList.join("")
    ),
    { parser: "typescript" }
  )
);

// writing validator
const validatorObject = generateValidator(filteredDatas);
fs.writeFileSync(
  `./build/api/vast${vastVersion.floatSnake()}-validator.ts`,
  prettier.format(
    templateValidatorFile(vastVersion.floatSnake(), validatorObject),
    { parser: "typescript" }
  )
);

// writing documentation
asyncGetVastElementDoc((methods: any) => {
  apiDocumentation.VastElement.methods = methods;

  fs.writeFileSync(
    `./build/doc/vast${vastVersion.floatSnake()}.md`,
    getApiDocumentationTemplate(vastVersion.intSnake(), apiDocumentation)
  );
  console.log(" => build ok");
});
