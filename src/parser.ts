import * as flatten from "array-flatten";
import { isNull } from "./utils/checks";
import { downloadVastAndWrappers } from "./utils/vast";
import VastElement from "./vast-element";

export default class VastParser {
  public vasts: Array<VastElement<any>>;
  constructor(vastUrl: string, options: VastParserOptions);
  constructor(
    vastUrl: string,
    callback: () => void,
    options: VastParserOptions
  );
  constructor(
    vastUrl: string,
    callbackOrOptions: () => void | VastParserOptions,
    optionsIfCallback: VastParserOptions = {}
  ) {
    // TODO manage overload
    if (typeof callbackOrOptions === "function") {
    }
    this.vasts = downloadVastAndWrappers(vastUrl, callbackOrOptions);
  }

  public getVasts() {
    return this.vasts;
  }

  // > return an array all childs find at "arrayOfName" path in the hierarchy
  // * getChilds(arrayOfName: Array<string>, details: 'content' | string): Array<VastElement>
  public get(
    arrayOfName: /* PossibleTag[] */ string[],
    details: "content" | string /* PossibleAttrs[] */
  ) {
    const vastElements = (flatten(
      this.vasts.map(v => v.get(arrayOfName, true))
    ) as unknown) as Array<VastElement<any>>;
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
}
