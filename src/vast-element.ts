import * as flatten from "array-flatten";
import { ElementCompact, js2xml } from "xml-js";
import { warnOrThrow } from "./utils/logs";
import { hasCDATA, stripCDATA } from "./utils/string";

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
    attrs?: AttributeObject
  );
  constructor(
    name?: string,
    parent?: VastElementParent,
    baseInfos?: VastElementInfos,
    attrs?: AttributeObject
  );
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
      if (hasCDATA(contentOrAttributes)) {
        this.cdataThisOne = true;
      }
      this.content = stripCDATA(contentOrAttributes);
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
  public getContent(): string {
    return this.content;
  }

  public getInfos() {
    return this.infos;
  }

  // > Get a specific attr, it's case insensitive (only specs valids one will be returned)
  // * getAttr(attributeName: string): string
  public getAttr(attributeName: string): string {
    const baseAttrs = this.getAttrs();
    const lowerCasedAttrs = Object.keys(this.getAttrs()).reduce(
      (prev: object, next: string) => {
        prev[next.toLowerCase()] = baseAttrs[next];
        return prev;
      },
      {}
    );
    return lowerCasedAttrs[attributeName.toLowerCase()];
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
          warnOrThrow(
            `WARNING: the attribute "${next}" does not exists in "${
              this.name
            }" Tag. It was ignored.
  Here is the allowed list: ${this.infos.attrs}`,
            this.options
          );
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

  // > Allow adding custom XML Tag and return it, usefull for <Extensions>
  // * dangerouslyAttachCustomTag(tagName: string, content: string): VastElement
  // * dangerouslyAttachCustomTag(tagName: string, attributes: Object): VastElement
  // * dangerouslyAttachCustomTag(tagName: string, content: string, attributes: Object): VastElement
  public dangerouslyAttachCustomTag(
    tagName: string,
    content?: string,
    attributes?: AttributeObject
  ): VastElement<this>;
  public dangerouslyAttachCustomTag(
    tagName: string,
    attributes?: AttributeObject
  ): VastElement<this>;
  public dangerouslyAttachCustomTag(
    tagName: string,
    contentOrAttributes: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): VastElement<this> {
    const newElem = new VastElement(
      tagName,
      this,
      { attrs: "all" },
      contentOrAttributes as any,
      attributesIfContent
    );

    this.childs.push(newElem);
    return newElem;
  }

  // > Allow adding custom XML Tag and return self, usefull for <Extensions>
  // * dangerouslyAddCustomTag(tagName: string, content: string): VastElement
  // * dangerouslyAddCustomTag(tagName: string, attributes: Object): VastElement
  // * dangerouslyAddCustomTag(tagName: string, content: string, attributes: Object): VastElement
  public dangerouslyAddCustomTag(
    tagName: string,
    content: string,
    attributes?: AttributeObject
  ): this;
  public dangerouslyAddCustomTag(
    tagName: string,
    attributes?: AttributeObject
  ): this;
  public dangerouslyAddCustomTag(
    tagName: string,
    contentOrAttributes?: AttributeObject | string,
    attributesIfContent?: AttributeObject
  ): this {
    return this.dangerouslyAttachCustomTag(
      tagName,
      // allow fallback on dangerouslyAttachCustomTag overload
      contentOrAttributes as any,
      attributesIfContent
    ).and();
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
      const childJson = child.getJson();
      if (Object.keys(childJson).length > 0) {
        childCode[child.name].push(childJson);
      }
    });

    const jsonVast: ElementCompact = {};

    if (this.hasAttrs()) {
      jsonVast._attributes = this.getAttrs();
    }

    if (this.content) {
      if (
        this.cdataThisOne === true ||
        (this.cdataThisOne !== false && this.options.cdata)
      ) {
        jsonVast._cdata = this.content;
      } else {
        jsonVast._text = this.content;
      }
    }

    return {
      ...jsonVast,
      ...childCode
    };
  }

  // > Return the root VastElement
  // * getRoot(): VastElement
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
    return js2xml(
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
  public getChilds(name: string): Array<VastElement<this>> {
    return this.childs.filter(c => c.name === name);
  }

  // > return an array of all childs find recursively at "arrayOfNames" path in the hierarchy
  // * getChilds(arrayOfNames: Array<string>, fromRoot: boolean = true): Array<VastElement>
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

  // > Return if current VastElement hierarchie is a Wrapper
  // * isWrapper(): boolean
  public isWrapper(): boolean {
    return this.get(["Wrapper"]).length > 0;
  }

  // undocumented
  public parseOptions(options: VastBuilderOptions) {
    this.options = {
      cdata: true,
      logWarn: true,
      spaces: 2,
      throwOnError: false,
      // validateOnBuild: false,
      ...options
    };
  }

  // undocumented
  private getVersionRaw(): string {
    return this.getRoot()
      .getChilds("VAST")[0]
      .getAttr("version");
  }
}

// mainly used in tests to simulate VastElement root from build/api
export class VastElementRoot extends VastElement<VastElementRoot> {
  public and(): this {
    return this;
  }
}
