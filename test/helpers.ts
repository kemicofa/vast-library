/* tslint:disable: no-console */
import * as fs from "fs-extra";
import * as diff from "jest-diff";
import { NO_DIFF_MESSAGE } from "jest-diff/build/constants";
import * as path from "path";
import createVast from "../lib/index";

function assertEqual(base, expected) {
  const out = diff(base.trim(), expected.trim());
  if (out !== NO_DIFF_MESSAGE) {
    throw new Error("\n" + out);
  }
}

export function runFixture(toCompare, version, fixtureName) {
  // return;

  const fixtureFile = path.join(
    __dirname,
    version,
    "fixtures",
    fixtureName + ".xml"
  );

  let expectedResponse;
  try {
    expectedResponse = fs.readFileSync(path.join(fixtureFile), "utf8");
  } catch (e) {
    console.log(
      "Didnt find expected resources, create it from received resources"
    );
    expectedResponse = toCompare;
    fs.writeFileSync(path.join(fixtureFile), expectedResponse);
  }

  assertEqual(toCompare, expectedResponse);
}

export function getFixtureContent(version, fixtureName) {
  const fixtureFile = path.join(
    __dirname,
    version,
    "fixtures",
    fixtureName + ".xml"
  );
  return fs.readFileSync(path.join(fixtureFile), "utf8");
}

export function generateMinimalVast() {
  const vast = createVast
    .v2()
    .attachAd({ id: "identifier" })
    .attachInLine()
    .addImpression("imp_link")
    .addAdSystem("Society")
    .addAdTitle("Title")
    .attachCreatives()
    .attachCreative()
    .attachLinear()
    .addDuration("00:30:00")
    .attachMediaFiles()
    .attachMediaFile("my_video", {
      delivery: "streaming",
      height: "400",
      type: "video/mp4",
      width: "600"
    });
  return vast;
}
