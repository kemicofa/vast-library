/* tslint:disable: no-console */
import * as fs from "fs-extra";
import * as diff from "jest-diff";
import { NO_DIFF_MESSAGE } from "jest-diff/build/constants";
import * as path from "path";
import "../@types/globals.type"; // do not compile without, don't ask me why
import { v2 } from "../src/builder";

function assertEqual(base, expected) {
  const out = diff(base.trim(), expected.trim());
  if (out !== NO_DIFF_MESSAGE) {
    throw new Error("\n" + out);
  }
}

type AvailableVersion = "v2" | "v3" | "v4" | "v4.1";

export function runFixture(
  toCompare: string,
  version: AvailableVersion,
  fixtureName: string
) {
  // return;

  const fixtureFile = path.join(
    __dirname,
    version,
    "fixtures",
    fixtureName + ".xml"
  );

  let expectedResponse: string;
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

export function getFixtureContent(
  version: AvailableVersion,
  fixtureName: string
) {
  const fixtureFile = path.join(
    __dirname,
    version,
    "fixtures",
    fixtureName + ".xml"
  );
  return fs.readFileSync(path.join(fixtureFile), "utf8");
}

export function generateMinimalVast() {
  const vast = v2()
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
  return vast.getRoot();
}
