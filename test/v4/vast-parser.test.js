const { assert } = require("chai");
const { getFixtureContent } = require("../helpers");
const parseVast = require("../../lib/vast-parser");

describe("vast parser VAST2", () => {
  it("should validate a VAST v4 minimal vast", () => {
    const vastRaw = getFixtureContent("v4", "minimal_vast");
    assert.isTrue(parseVast(vastRaw));
  });
  it("should invalidate a wrong VAST v4", () => {
    const vastRaw = getFixtureContent("v4", "vast_missing_values");
    assert.isFalse(parseVast(vastRaw));
  });
  it("should invalidate a wrong VAST v4", () => {
    const vastRaw = getFixtureContent("v4", "vast_missing_values");
    assert.throw(() => {
      parseVast(vastRaw, { throwOnError: true });
    });
  });
});
