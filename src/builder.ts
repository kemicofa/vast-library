import { apiv2 } from "../build/api/vast2_0";
import { apiv3 } from "../build/api/vast3_0";
import { apiv4 } from "../build/api/vast4_0";
import { apiv4_1 } from "../build/api/vast4_1";

export function v2(options: BuilderOptions = {}) {
  const root = new apiv2();
  root.parseOptions(options);
  return root.attachVAST({ version: "2.0" });
}
export function v3(options: BuilderOptions = {}) {
  const root = new apiv3();
  root.parseOptions(options);
  return root.attachVAST({ version: "3.0" });
}
export function v4(options: BuilderOptions = {}) {
  const root = new apiv4();
  root.parseOptions(options);
  return root.attachVAST({ version: "4.0" });
}
export function v4_1(options: BuilderOptions = {}) {
  const root = new apiv4_1();
  root.parseOptions(options);
  return root.attachVAST({ version: "4.1" });
}
