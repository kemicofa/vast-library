import flatten from "array-flatten";
import { getVastAndWrappers } from "./utils/vast";
import VastElement from "./vast-element";

export default class VastParser {
  public vasts: Array<VastElement<any>>;
  constructor(vastUrl: string, optionsOrCallback, optionsIfCallback = {}) {
    this.vasts = getVastAndWrappers(vastUrl, optionsOrCallback);
  }

  public getVasts() {
    return this.vasts;
  }

  // > return an array all childs find at "arrayOfName" path in the hierarchy
  // * getChilds(arrayOfName: Array<string>, details: 'content' | string): Array<VastElement>
  public get(arrayOfName: /**/ string[], details) {
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
}
