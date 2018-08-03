const { assert } = require("chai");

const vastLib = require("../../lib/index");
const { getFixtureContent } = require("../helpers");

describe("validate", () => {
  it("should validate a correct VAST", () => {
    const vastRaw = getFixtureContent("v4", "minimal_vast");
    assert.isTrue(vastLib.validate(vastRaw));
  });
  it("should reject an  incorrect VAST", () => {
    const vastRaw = getFixtureContent("v4", "vast_missing_values");
    assert.isFalse(vastLib.validate(vastRaw));
  });
});
