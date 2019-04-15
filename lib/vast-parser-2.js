const convert = require("xml-js");
// const mergeJson = require("mergejson");
const VastElement = require("./vast-element");
const flatten = require("array-flatten");
const { isBrowser } = require("browser-or-node");

// TODO move this to utils
function isNull(something) {
  return typeof something === "undefined" || something === null;
}

if (typeof XMLHttpRequest === "undefined" && global) {
  global.XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;
}

// TODO make utils of that
const yellow = "\x1b[33m";
const red = "\x1b[31m";
const reset = "\x1b[0m";
const intro = `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}`;

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

// TODO move to utils
function fetchUrl({ url, loadCallback = () => {}, syncInBrowser = false }) {
  if (!url) {
    throw new Error("'url' is undefined");
  }
  const fail = () => {
    throw new Error(`${url} fetch failed`);
  };
  if (isBrowser) {
    const fetchReq = new XMLHttpRequest();
    if (syncInBrowser) {
      fetchReq.open("GET", url, false);
      fetchReq.send();
      if (fetchReq.status === 200) {
        loadCallback(fetchReq.responseText);
        return fetchReq.responseText;
      } else {
        fail();
      }
    } else {
      fetchReq.open("GET", url, true);
      fetchReq.onerror = fail;
      fetchReq.onload = res => {
        loadCallback(res.responseText);
      };
      fetchReq.send();
    }
    throw new Error(`${url} was not found`);
  } else if (isNode) {
    const fetch = require("node-fetch");
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res;
        }
        fail();
      })
      .then(res => loadCallback(res.text()))
      .catch(fail);
  } else {
    throw new Error("Not supported environment");
  }
}

function createVastWithBuilder(vastRawCode, options = {}) {
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
  } catch (o_O) {
    if (options.logWarn) {
      console.error(
        `${intro} Error during the vast parsing, it seems not valid XML`
      );
    }
    // TODO throw here ??
  }

  return createVastFromJson(parsedXml);
}

function createVastFromJson(vastJsonCode, options = {}) {
  options = Object.assign(
    {},
    {
      logWarn: false
    },
    options
  );

  let root = new VastElement();
  root.parseOptions(options);

  buildVast(vastJsonCode, root);

  return root;
}

function getVastAndWrappers(vastUrl, options = {}) {
  options = Object.assign(
    {},
    {
      logWarn: false
    },
    options
  );

  const vastAndWrappers = [];
  let currentVast;

  do {
    // TODO syncInBrowser should be a parameter
    const vastRawContent = fetchUrl({ url: vastUrl, syncInBrowser: true });
    currentVast = createVastWithBuilder(vastRawContent);
    vastAndWrappers.push(currentVast);
    if (currentVast.isWrapper()) {
      const VASTAdTagURI = currentVast.get([
        "VAST",
        "Ad",
        "Wrapper",
        "VASTAdTagURI"
      ])[0];
      if (VASTAdTagURI) {
        vastUrl = VASTAdTagURI.getContent(true);
      }
    }
  } while (currentVast.isWrapper());

  return vastAndWrappers;

  // if (vastAndWrappers.length > 1) {
  //   // TODO their is a bit more of logic here to convert Wrapper to Inline
  //   console.log(vastAndWrappers.map(v => v.getJson()));
  //   const superVastJson = mergeJson(vastAndWrappers.map(v => v.getJson()));
  //   console.log("superVastJson :");
  //   console.dir(superVastJson, {
  //     depth: null,
  //     colors: true,
  //     showHidden: false
  //   });
  //   const superVast = createVastFromJson(superVastJson);
  //   return superVast;
  // }

  // return [currentVast];
}

// TODO expose separate API for VastParser and VastBuilder
module.exports = class VastParser {
  constructor(vastUrl, optionsOrCallback, optionsIfCallback = {}) {
    this.vasts = getVastAndWrappers(vastUrl, optionsOrCallback);
  }

  getVasts() {
    return this.vasts;
  }

  //> return an array all childs find at "arrayOfName" path in the hierarchy
  //* getChilds(arrayOfName: Array<string>, details: 'content' | string): Array<VastElement>
  get(arrayOfName, details) {
    const vastElements = flatten(this.vasts.map(v => v.get(arrayOfName, true)));
    if (details) {
      return vastElements.map(vastElement => {
        if (details === "content") {
          if (isNull(vastElement.content)) {
            // warn
            console.log("warn");
          }
          return vastElement.content;
        } else {
          if (isNull(vastElement.attrs[details])) {
            // warn
            console.log("warn 2");
          }
          return vastElement.attrs[details];
        }
      });
    }
    return vastElements;
  }
};
