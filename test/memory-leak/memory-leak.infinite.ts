import * as memwatch from "@airbnb/node-memwatch";
import { generateMinimalVast } from "../helpers";

memwatch.on("leak", (info: string) => {
  // tslint:disable-next-line:no-console
  console.error("memory leak detected");
  throw new Error(info);
});

while (true) {
  const vast = generateMinimalVast();
  vast.validate();
  vast.toXml();
}
