const convert = require("xml-js");
const flatten = require("array-flatten");

const xmlDeclaration = {
  _declaration: {
    _attributes: {
      version: "1.0",
      encoding: "utf-8"
    }
  }
};

module.exports = class VastElement {
  /**
   * @param {string} name
   * @param {VastElement} parent
   */
  constructor(
    name = "root",
    parent = null,
    baseInfos = {},
    attrsOrContent,
    attrsIfContent
  ) {
    this.parent = parent;
    this.name = name;
    if (typeof attrsOrContent === "string") {
      this.content = attrsOrContent;
      this.attrs = attrsIfContent || {};
    } else {
      this.content = null;
      this.attrs = attrsOrContent || {};
    }
    this.childs = [];
    this.infos = {};
    this.infos.attrs = baseInfos.attrs || [];
    this.parseOptions((parent && parent.options) || {});
    // TODO, this will crash on parse
    if (this.content && this.content.indexOf("<![CDATA[") !== -1) {
      this.warn(`dont put CDATA item in content, use .cdata() instead`);
    }
  }

  //> Get the node name
  //* getName(): string
  getName() {
    return this.name;
  }

  //> alias for and()
  //* getParent(): Object
  getParent() {
    return and();
  }

  //> Get filtered attributes (only specs valids one will be returned)
  //* getContent(): string
  getContent(withoutCDATA = true) {
    if (withoutCDATA) {
      return stripCDATA(this.content);
    } else {
      return this.content;
    }
  }

  //> Get filtered attributes (only specs valids one will be returned)
  //* getAttrs(): Object
  getInfos() {
    return this.infos;
  }
  //> Get filtered attributes (only specs valids one will be returned)
  //* getAttrs(): Object
  getAttrs() {
    if (this.infos.attrs === "all") {
      return this.attrs;
    } else {
      return Object.keys(this.attrs).reduce((prev, next) => {
        if (this.infos.attrs.indexOf(next) !== -1) {
          return { ...prev, [next]: this.attrs[next] };
        } else {
          this.warn(`WARNING: the attribute "${next}" does not exists in "${
            this.name
          }" Tag. It was ignored.
  Here is the allowed list: ${this.infos.attrs}`);
          return prev;
        }
      }, {});
    }
  }

  // undocumented
  parseOptions(options) {
    this.options = Object.assign(
      {
        cdata: true,
        logWarn: true,
        validateOnBuild: false,
        throwOnError: false,
        spaces: 2
      },
      options
    );
  }

  // undocumented
  err(msg) {
    this.warn(msg, true);
  }

  // undocumented
  warn(msg, error = false) {
    const yellow = "\x1b[33m";
    const red = "\x1b[31m";
    const reset = "\x1b[0m";
    const intro = error
      ? `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}`
      : `${yellow}VAST-BUILDER WARNING:${reset}`;
    if (this.options.logWarn) {
      if (error) {
        console.error(`${intro} ${msg}`);
      } else {
        console.warn(`${intro} ${msg}`);
      }
    }
    if (error && this.options.throwOnError) {
      throw new Error(msg);
    }
  }
  //> return the parent element
  //* and(): VastElement
  /**
   * @returns {VastElement}
   */
  and() {
    /* child will overload this */
    return this.parent || this;
  }
  //> alias for .and().and()
  //* back(): VastElement
  /**
   * @returns {VastElement}
   */
  back() {
    /* child will overload this */
    return this.and().and();
  }

  //> turn element content into cdata. return the current element
  //* cdata(): VastElement
  cdata() {
    this.cdataThisOne = true;
    this.childs.forEach(c => {
      c.cdata();
    });
    return this;
  }

  //> Allow adding custom XML Tag, usefull for <Extensions>
  //* dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
  /**
   * @returns {VastElement}
   */
  dangerouslyAttachCustomTag(tagName, content, attributes) {
    const newElem = new VastElement(
      tagName,
      this,
      { attrs: "all" },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }

  //> Allow adding custom XML Tag and return his parent, usefull for <Extensions>
  //* dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
  /**
   * @returns {VastElement}
   */
  dangerouslyAddCustomTag(tagName, content, attributes) {
    return this.dangerouslyAttachCustomTag(tagName, content, attributes).and();
  }

  // undocumented
  hasAttrs() {
    return Object.keys(this.attrs).length > 0;
  }

  // undocumented
  // return a JS object
  getJson() {
    const childCode = {};
    this.childs.forEach(child => {
      childCode[child.name] = childCode[child.name] || [];
      childCode[child.name].push(child.getJson());
    });

    const result = {};

    if (this.hasAttrs()) {
      result._attributes = this.getAttrs();
    }

    if (this.content && (this.cdataThisOne || this.options.cdata)) {
      result._cdata = this.content;
    } else if (this.content) {
      result._text = this.content;
    }

    return {
      ...result,
      ...childCode
    };
  }

  // undocumented
  getRoot() {
    let parent = this.parent || this;
    while (parent.parent) {
      parent = parent.parent;
    }
    return parent;
  }

  //> Return the generated Vast string
  //* toXml(): string
  toXml() {
    if (this.options.validateOnBuild) {
      this.validate();
    }
    return convert.js2xml(
      {
        ...xmlDeclaration,
        ...this.getRoot().getJson()
      },
      {
        compact: true,
        ...this.options
      }
    );
  }

  // undocumented
  getVersionRaw() {
    return this.getRoot().getChilds("VAST")[0].attrs["version"];
  }

  //> return the current VAST api version
  //* getVastVersion(): number
  getVastVersion() {
    return parseInt(this.getVersionRaw());
  }

  //> return the current VAST api version in snake case
  //* getVastSnakeVersion(): string
  getVastSnakeVersion() {
    return this.getVersionRaw().replace(".", "_");
  }

  //> return an array all direct childs with "name"
  //* getChilds(name: string): Array<VastElement>
  getChilds(name) {
    const childs = [];
    Object.keys(this.childs).forEach(key => {
      const child = this.childs[key];
      if (child.name === name) {
        childs.push(child);
      }
    });
    return childs;
  }

  //> return an array all childs find at "arrayOfNames" path in the hierarchy
  //* getChilds(arrayOfNames: Array<string>, fromRoot: boolean): Array<VastElement>
  get(arrayOfNames = [], fromRoot = true) {
    if (arrayOfNames.length === 0) {
      return this;
    }
    const findedNodes = [];
    const node = fromRoot ? this.getRoot() : this;
    Object.keys(node.childs).forEach(key => {
      const child = node.childs[key];
      if (child.name === arrayOfNames[0]) {
        if (arrayOfNames.length === 1) {
          findedNodes.push(child);
        } else {
          findedNodes.push(child.get(arrayOfNames.slice(1), false));
        }
      } else {
        findedNodes.push(child.get(arrayOfNames, false));
      }
    });
    return flatten(findedNodes);
  }

  //> return an array all childs find at "arrayOfName" path in the hierarchy
  //* getChilds(arrayOfName: Array<string>): Array<VastElement>
  // getFullPath(arrayOfName) {
  //   if (arrayOfName.length === 0) {
  //     return this;
  //   }
  //   const findedNodes = [];
  //   const currentName = arrayOfName.shift();
  //   this.getChilds(currentName).forEach(child => {
  //     findedNodes.push(child.get(arrayOfName));
  //   });
  //   return flatten(findedNodes);
  // }

  isWrapper() {
    return this.get(["Wrapper"]).length > 0;
  }

  // isWrapperOld() {
  //   return this.getRoot().get(["VAST", "Ad", "Wrapper"]).length > 0;
  // }
};
