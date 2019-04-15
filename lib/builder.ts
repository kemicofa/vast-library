export function validate(vastString: string, options = {}) {
  const parseVast = require("./vast-parser");
  return parseVast(vastString, options);
}
export function v2(options: BuilderOptions = {}) {
  const { apiv2 } = require("../build/api/vast2_0");
  const root = new apiv2();
  root.parseOptions(options);
  return root.attachVAST({ version: "2.0" });
}
export function v3(options: BuilderOptions = {}) {
  const { apiv3 } = require("../build/api/vast3_0");
  const root = new apiv3();
  root.parseOptions(options);
  return root.attachVAST({ version: "3.0" });
}
export function v4(options: BuilderOptions = {}) {
  const { apiv4 } = require("../build/api/vast4_0");
  const root = new apiv4();
  root.parseOptions(options);
  return root.attachVAST({ version: "4.0" });
}
export function v4_1(options: BuilderOptions = {}) {
  const { apiv4_1 } = require("../build/api/vast4_1");
  const root = new apiv4_1();
  root.parseOptions(options);
  return root.attachVAST({ version: "4.1" });
}
