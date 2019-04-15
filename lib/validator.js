const VastElement = require("./vast-element");
const validateNext = require("./utils/validate-node");

module.exports = class VastValidator extends VastElement {
  constructor(...args) {
    super(...args);
  }

  //> validate your current vast build. print error if options.logWarn = true
  //* validate(): boolean
  validate() {
    const validator = require(`../build/api/vast${this.getVastSnakeVersion()}`)
      .validator;
    return validateNext(this.getRoot(), validator);
  }
};
