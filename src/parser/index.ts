import * as flatten from "array-flatten";
import { isNull } from "../utils/checks";
import { logWarn, warnOrThrow } from "../utils/logs";
import {
  downloadVastAndWrappersAsync,
  downloadVastAndWrappersSync
} from "../utils/vast";
import VastElement from "../vast-element";

type Vasts = Array<VastElement<any>>;

export default class VastParser {
  public vasts: Vasts;
  public parsed: boolean;
  public vastUrl: string;
  public options: VastParserOptions;

  constructor(vastUrl: string, options: VastParserOptions = {}) {
    this.vastUrl = vastUrl;
    this.options = options;
  }

  public parseAsync(callback: (vasts: Vasts) => void) {
    if (this.parsed) {
      callback(this.vasts);
    }
    downloadVastAndWrappersAsync(this.vastUrl, this.options, (vasts: Vasts) => {
      this.vasts = vasts;
      callback(this.vasts);
      this.parsed = true;
    });
  }

  public parseSync() {
    if (this.parsed) {
      return this.vasts;
    }
    this.vasts = downloadVastAndWrappersSync(this.vastUrl, this.options);
    this.parsed = true;
  }

  public getVasts() {
    return this.vasts || [];
  }

  // > return an array all childs find at "arrayOfName" path in the hierarchy
  // * getChilds(arrayOfName: Array<string>, details: 'content' | string): Array<VastElement>
  public get(
    arrayOfName: /* PossibleTag[] */ string[],
    details: "content" | /* "PossibleAttrs" */ string
  ) {
    const vastElements = (flatten(
      this.vasts.map(v => v.get(arrayOfName, true))
    ) as unknown) as Array<VastElement<any>>;
    if (details) {
      return vastElements.map(vastElement => {
        if (details === "content") {
          if (isNull(vastElement.content)) {
            warnOrThrow(
              `${vastElement.name} does not have content`,
              this.options
            );
          }
          return vastElement.content;
        } else {
          const attributeLowerCased = {};
          Object.keys(vastElement.attrs).forEach(attr => {
            attributeLowerCased[attr.toLowerCase()] = vastElement.attrs[attr];
          });
          if (isNull(attributeLowerCased[details.toLowerCase()])) {
            warnOrThrow(
              `${vastElement.name} does not have content`,
              this.options
            );
          }
          return attributeLowerCased[details.toLowerCase()];
        }
      });
    }
    return vastElements;
  }
}
