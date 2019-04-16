import flatten from "array-flatten";
import convert, { ElementCompact } from "xml-js";
import { logError, logWarn } from "./utils/logs";
import { stripCDATA } from "./utils/string";

const xmlDeclaration = {
  _declaration: {
    _attributes: {
      encoding: "utf-8",
      version: "1.0"
    }
  }
};

interface AttributeObject {
  [key: string]: string;
}
interface VastElementInfos {
  attrs?: Array<string | any> | "all";
  // TODO is it good ?
  required?: boolean;
  uniq?: boolean;
  alo?: boolean;
}

export default class VastElement<VastElementParent extends VastElement<any>> {
  public parent: VastElementParent;
  public name: string;
  public content: string;
  public attrs: AttributeObject;
  public childs: Array<VastElement<any>>;
  public infos: VastElementInfos;
  public options: VastBuilderOptions;
  public cdataThisOne: boolean;

  constructor(
    name: string,
    parent: VastElementParent,
    baseInfos: VastElementInfos,
    content: string,
    attrs: AttributeObject
  );
  constructor(
    name: string,
    parent: VastElementParent,
    baseInfos: VastElementInfos,
    attrs?: AttributeObject
  );
  constructor();
  constructor(
    name: string = "root",
    parent: VastElementParent = null,
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

  // > Get the node name
  // * getName(): string
  public getName() {
    return this.name;
  }

  // > alias for and()
  // * getParent(): Object
  public getParent() {
    return this.and();
  }

  // > Get filtered attributes (only specs valids one will be returned)
  // * getContent(): string
  public getContent(withoutCDATA = true) {
    if (withoutCDATA) {
      return stripCDATA(this.content);
    } else {
      return this.content;
    }
  }

  // > Get filtered attributes (only specs valids one will be returned)
  // * getAttrs(): Object
  public getInfos() {
    return this.infos;
  }
  // > Get filtered attributes (only specs valids one will be returned)
  // * getAttrs(): Object
  public getAttrs() {
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
  // > return the parent element
  // * and(): VastElement
  public and(): VastElementParent {
    return this.parent;
  }
  // > alias for .and().and()
  // * back(): VastElement
  public back(): VastElementParent {
    return this.and().and();
  }

  // > turn element content into cdata. return the current element
  // * cdata(): VastElement
  public cdata(): this {
    this.cdataThisOne = true;
    this.childs.forEach(c => {
      c.cdata();
    });
    return this;
  }

  // > Allow adding custom XML Tag, usefull for <Extensions>
  // * dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
  public dangerouslyAttachCustomTag(
    tagName: string,
    content: string,
    attributes?: AttributeObject
  ): VastElement<this>;
  public dangerouslyAttachCustomTag(
    tagName: string,
    attributes: AttributeObject
  ): VastElement<this>;
  public dangerouslyAttachCustomTag(
    tagName: string,
    contentOrAttributes: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): VastElement<this> {
    let newElem: VastElement<this>;
    if (typeof contentOrAttributes === "string") {
      newElem = new VastElement(
        tagName,
        this,
        { attrs: "all" },
        contentOrAttributes,
        attributesIfContent
      );
    } else {
      newElem = new VastElement<this>(
        tagName,
        this,
        { attrs: "all" },
        attributesIfContent
      );
    }
    this.childs.push(newElem);
    return newElem;
  }

  // > Allow adding custom XML Tag and return his parent, usefull for <Extensions>
  // * dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
  public dangerouslyAddCustomTag(
    tagName: string,
    content: string,
    attributes?: AttributeObject
  ): this;
  public dangerouslyAddCustomTag(
    tagName: string,
    attributes: AttributeObject
  ): this;
  public dangerouslyAddCustomTag(
    tagName: string,
    contentOrAttributes: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): this {
    return this.dangerouslyAttachCustomTag(
      tagName,
      contentOrAttributes as string,
      attributesIfContent
    ).and() as this;
  }

  // undocumented
  public hasAttrs(): boolean {
    return Object.keys(this.attrs).length > 0;
  }

  // undocumented
  // return a JS object
  public getJson(): ElementCompact {
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
  public getRoot(): VastElement<null> {
    let parent: any = this.parent || this;
    while (parent.parent) {
      parent = parent.parent;
    }
    return parent;
  }

  // > Return the generated Vast string
  // * toXml(): string
  public toXml(): string {
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

  // > return the current VAST api version
  // * getVastVersion(): number
  public getVastVersion(): number {
    return parseInt(this.getVersionRaw());
  }

  // > return the current VAST api version in snake case
  // * getVastSnakeVersion(): string
  public getVastSnakeVersion(): string {
    return this.getVersionRaw().replace(".", "_");
  }

  // > return an array all direct childs with "name"
  // * getChilds(name: string): Array<VastElement>
  public getChilds(name): Array<VastElement<this>> {
    const childs: Array<VastElement<this>> = [];
    Object.keys(this.childs).forEach(key => {
      const child = this.childs[key];
      if (child.name === name) {
        childs.push(child);
      }
    });
    return childs;
  }

  // > return an array all childs find at "arrayOfNames" path in the hierarchy
  // * getChilds(arrayOfNames: Array<string>, fromRoot: boolean): Array<VastElement>
  public get(arrayOfNames = [], fromRoot = true): Array<VastElement<any>> {
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

  public isWrapper(): boolean {
    return this.get(["Wrapper"]).length > 0;
  }

  // undocumented
  public parseOptions(options: VastBuilderOptions) {
    this.options = Object.assign(
      {
        cdata: true,
        logWarn: true,
        spaces: 2,
        throwOnError: false,
        validateOnBuild: false
      },
      options
    );
  }

  // undocumented
  private getVersionRaw(): string {
    return this.getRoot().getChilds("VAST")[0].attrs.version;
  }

  // undocumented
  private err(msg: string) {
    this.warn(msg, true);
  }

  // undocumented
  private warn(msg: string, error: boolean = false) {
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
}
