module.exports = {
  /**
   * @param {string} vastString
   * @param {{ logWarn: false, throwOnError: false}} options
   */
  validate: (vastString, options = {}) => {
    const parseVast = require("./vast-parser");
    return parseVast(vastString, options);
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v2: (options = {}) => {
    const { apiv2 } = require("../build/api/vast2_0");
    const root = new apiv2();
    root.parseOptions(options);
    return root.attachVAST({ version: "2.0" });
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v3: (options = {}) => {
    const { apiv3 } = require("../build/api/vast3_0");
    const root = new apiv3();
    root.parseOptions(options);
    return root.attachVAST({ version: "3.0" });
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v4: (options = {}) => {
    const { apiv4 } = require("../build/api/vast4_0");
    const root = new apiv4();
    root.parseOptions(options);
    return root.attachVAST({ version: "4.0" });
  },
  /**
   * @param {{ cdata: true, logWarn: true, validateOnBuild: false, throwOnError: false, spaces: 2}} options
   */
  v4_1: (options = {}) => {
    const { apiv4_1 } = require("../build/api/vast4_1");
    const root = new apiv4_1();
    root.parseOptions(options);
    return root.attachVAST({ version: "4.1" });
  }
};
