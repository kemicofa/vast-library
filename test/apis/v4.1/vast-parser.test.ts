import { assert } from "chai";
import VastValidator from "../../src/validator";
import { getFixtureContent } from "../helpers";

describe("vast parser VAST2", () => {
  it("should validate a VAST v4 minimal vast", () => {
    const vastRaw = getFixtureContent("v4.1", "minimal_vast");
    const vast = new VastValidator(vastRaw);
    assert.isTrue(vast.validate());
  });
  it("should invalidate a wrong VAST v4", () => {
    const vastRaw = getFixtureContent("v4.1", "vast_missing_values");
    const vast = new VastValidator(vastRaw);
    assert.isTrue(vast.validate());
  });
  it("should invalidate a wrong VAST v4", () => {
    const vastRaw = getFixtureContent("v4.1", "vast_missing_values");
    const vast = new VastValidator(vastRaw, { throwOnError: true });
    assert.throw(() => {
      vast.validate();
    });
  });
});
