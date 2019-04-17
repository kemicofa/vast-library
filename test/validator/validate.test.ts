import { assert } from "chai";

import vastLib from "../../src/index";
import { getFixtureContent } from "../helpers";

describe("validate", () => {
  it("should validate a correct VAST", () => {
    const vastRaw = getFixtureContent("v4", "minimal_vast");
    assert.isTrue(vastLib.validate(vastRaw));
  });
  it("should reject an incorrect VAST", () => {
    const vastRaw = getFixtureContent("v4", "vast_missing_values");
    assert.isFalse(vastLib.validate(vastRaw));
  });
  it("should reject an incorrect formated VAST", () => {
    const vastRaw = "<valkjdlqksj>dmlsqkd<//dqsd>sd<<sd";
    assert.isFalse(vastLib.validate(vastRaw));
  });
  it("should manage correctly nullish values inside a vast", () => {
    const vastRaw = getFixtureContent("v4", "vast_with_nullish_values");
    assert.isTrue(vastLib.validate(vastRaw, { throwOnError: true }));
  });
  it("should reject an incorrect formated VAST with warn", () => {
    const vastRaw = "<valkjdlqksj>dmlsqkd<//dqsd>sd<<sd";

    global.console = {
      error: jest.fn()
    };

    const yellow = "\x1b[33m";
    const red = "\x1b[31m";
    const reset = "\x1b[0m";
    const intro = `${yellow}VAST-BUILDER ${red}ERROR${yellow}:${reset}`;

    assert.isFalse(vastLib.validate(vastRaw, { logWarn: true }));
    expect(global.console.error).toHaveBeenCalledWith(
      `${intro} Error during the vast parsing, it seems not valid XML`
    );
  });
});
