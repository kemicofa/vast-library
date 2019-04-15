import VastElement from "./vast-element";
import { validateNext } from "./utils/validate-node";

import { validator as vast2_0validator } from "../build/api/vast2_0";
import { validator as vast3_0validator } from "../build/api/vast3_0";
import { validator as vast4_0validator } from "../build/api/vast4_0";
import { validator as vast4_1validator } from "../build/api/vast4_1";

const validators = {
  "2_0": vast2_0validator,
  "3_0": vast3_0validator,
  "4_0": vast4_0validator,
  "4_1": vast4_1validator
};

export class VastValidator extends VastElement {
  // constructor(...args) {
  //   super(...args);
  // }

  //> validate your current vast build. print error if options.logWarn = true
  //* validate(): boolean
  validate() {
    const validator = validators[this.getVastSnakeVersion()].validator;
    return validateNext(this.getRoot(), validator);
  }
}
