import convert, { ElementCompact } from "xml-js";
import flatten from "array-flatten";
import { logError, logWarn } from "./utils/logs";
import { stripCDATA } from "./utils/index";

const xmlDeclaration = {
  _declaration: {
    _attributes: {
      version: "1.0",
      encoding: "utf-8"
    }
  }
};

interface AttributeObject {
  [key: string]: string;
}
interface VastElementInfos {
  attrs: string[] | "all";
}

export default class VastElement {
  parent: VastElement;
  name: string;
  content: string;
  attrs: AttributeObject;
  childs: Array<VastElement>;
  infos: VastElementInfos;
  options: BuilderOptions;
  cdataThisOne: boolean;

  constructor(
    name: string,
    parent: VastElement,
    baseInfos: VastElementInfos, // TODO convert baseInfos to baseAttributes
    content: string,
    attrs: AttributeObject
  );
  constructor(
    name: string,
    parent: VastElement,
    baseInfos: VastElementInfos, // TODO convert baseInfos to baseAttributes
    attrs: AttributeObject
  );
  constructor();
  constructor(
    name: string = "root",
    parent: VastElement = null,
    baseInfos: VastElementInfos = { attrs: [] },
    contentOrAttributes?: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ) {
    this.parent = parent;
    this.name = name;
    if (typeof contentOrAttributes === "string") {
      this.content = contentOrAttributes;
      this.attrs = attributesIfContent || {};
    } else {
      this.content = null;
      this.attrs = contentOrAttributes || {};
    }
    this.childs = [];
    this.infos = {
      attrs: baseInfos.attrs || []
    };
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
    return this.and();
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
  parseOptions(options: BuilderOptions) {
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
  err(msg: string) {
    this.warn(msg, true);
  }

  // undocumented
  warn(msg: string, error: boolean = false) {
    if (this.options.logWarn) {
      if (error) {
        logError(msg);
      } else {
        logWarn(msg);
      }
    }
    if (error && this.options.throwOnError) {
      throw new Error(msg);
    }
  }
  //> return the parent element
  //* and(): VastElement
  and(): VastElement {
    /* child will overload this */
    return this.parent || this;
  }
  //> alias for .and().and()
  //* back(): VastElement
  back(): VastElement {
    /* child will overload this */
    return this.and().and();
  }

  //> turn element content into cdata. return the current element
  //* cdata(): VastElement
  cdata(): VastElement {
    this.cdataThisOne = true;
    this.childs.forEach(c => {
      c.cdata();
    });
    return this;
  }

  //> Allow adding custom XML Tag, usefull for <Extensions>
  //* dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
  dangerouslyAttachCustomTag(
    tagName: string,
    content: string,
    attributes?: AttributeObject
  ): VastElement;
  dangerouslyAttachCustomTag(
    tagName: string,
    attributes: AttributeObject
  ): VastElement;
  dangerouslyAttachCustomTag(
    tagName: string,
    contentOrAttributes: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): VastElement {
    let newElem: VastElement;
    if (typeof contentOrAttributes === "string") {
      newElem = new VastElement(
        tagName,
        this,
        { attrs: "all" },
        contentOrAttributes,
        attributesIfContent
      );
    } else {
      newElem = new VastElement(
        tagName,
        this,
        { attrs: "all" },
        attributesIfContent
      );
    }
    this.childs.push(newElem);
    return newElem;
  }

  //> Allow adding custom XML Tag and return his parent, usefull for <Extensions>
  //* dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
  dangerouslyAddCustomTag(
    tagName: string,
    content: string,
    attributes?: AttributeObject
  ): VastElement;
  dangerouslyAddCustomTag(
    tagName: string,
    attributes: AttributeObject
  ): VastElement;
  dangerouslyAddCustomTag(
    tagName: string,
    contentOrAttributes: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): VastElement {
    return this.dangerouslyAttachCustomTag(
      tagName,
      contentOrAttributes as string,
      attributesIfContent
    ).and();
  }

  // undocumented
  hasAttrs(): boolean {
    return Object.keys(this.attrs).length > 0;
  }

  // undocumented
  // return a JS object
  getJson(): ElementCompact {
    const childCode = {};
    this.childs.forEach(child => {
      childCode[child.name] = childCode[child.name] || [];
      childCode[child.name].push(child.getJson());
    });

    const result: ElementCompact = {};

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
  getRoot(): VastElement {
    let parent: VastElement = this.parent || this;
    while (parent.parent) {
      parent = parent.parent;
    }
    return parent;
  }

  //> Return the generated Vast string
  //* toXml(): string
  toXml(): string {
    // todo, manage this
    // if (this.options.validateOnBuild) {
    //   this.validate();
    // }
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
  getVersionRaw(): string {
    return this.getRoot().getChilds("VAST")[0].attrs["version"];
  }

  //> return the current VAST api version
  //* getVastVersion(): number
  getVastVersion(): number {
    return parseInt(this.getVersionRaw());
  }

  //> return the current VAST api version in snake case
  //* getVastSnakeVersion(): string
  getVastSnakeVersion(): string {
    return this.getVersionRaw().replace(".", "_");
  }

  //> return an array all direct childs with "name"
  //* getChilds(name: string): Array<VastElement>
  getChilds(name): Array<VastElement> {
    const childs: Array<VastElement> = [];
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
  get(arrayOfNames = [], fromRoot = true): Array<VastElement> {
    if (arrayOfNames.length === 0) {
      return [this];
    }
    const findedNodes: any[] = [];
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

  isWrapper(): boolean {
    return this.get(["Wrapper"]).length > 0;
  }
}
