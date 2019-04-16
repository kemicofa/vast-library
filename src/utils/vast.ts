import fetch from "node-fetch";
import convert, { Element } from "xml-js";
import VastElement from "../vast-element";

import { isBrowser, isNode } from "browser-or-node";

import { logError } from "./logs";

export function buildVast(current: Element, currentTag: VastElement<any>) {
  /* istanbul ignore next */
  if (current && current.elements) {
    if (
      current.elements.length === 1 &&
      (current.elements[0].text || current.elements[0].cdata)
    ) {
      const currentTmp = current.elements[0];
      const currentText = String(currentTmp.text || currentTmp.cdata);
      currentTag.content = currentText;
    } else {
      let currentChild: VastElement<any>;
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

interface FetchOptions {
  url: string;
  loadCallback?: (response: string) => void;
  syncInBrowser?: boolean;
}

function fetchUrl({
  url,
  loadCallback = () => {},
  syncInBrowser = false
}: FetchOptions) {
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

function createVastWithBuilder(vastRawCode, options: ParserOptions = {}) {
  options = {
    logWarn: false,
    ...options
  };
  let parsedXml;
  try {
    parsedXml = convert.xml2js(vastRawCode);
  } catch (e) {
    if (options.logWarn) {
      logError(`Error during the vast parsing, it seems not valid XML`);
    }
    // TODO throw here ??
  }

  return createVastFromJson(parsedXml);
}

function createVastFromJson(vastJsonCode, options: ParserOptions = {}) {
  options = {
    logWarn: false,
    ...options
  };

  const root = new VastElement();
  root.parseOptions(options);

  buildVast(vastJsonCode, root);

  return root;
}

// TODO spread options in signature
export function getVastAndWrappers(
  vastUrl: string,
  options: ParserOptions = {}
) {
  options = {
    logWarn: false,
    ...options
  };

  const vastAndWrappers = [];
  let currentVast: VastElement<any>;

  do {
    const vastRawContent = fetchUrl({ url: vastUrl, syncInBrowser: true });
    currentVast = createVastWithBuilder(vastRawContent);
    vastAndWrappers.push(currentVast);
    if (currentVast.isWrapper()) {
      const VASTAdTagURI = currentVast.get(["VASTAdTagURI"])[0];
      if (VASTAdTagURI) {
        vastUrl = VASTAdTagURI.getContent(true);
      }
    }
  } while (currentVast.isWrapper());

  return vastAndWrappers;
}
