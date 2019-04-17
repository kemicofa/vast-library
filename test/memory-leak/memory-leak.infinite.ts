import memwatch from "@airbnb/node-memwatch";
import { generateMinimalVast } from "../helpers";

memwatch.on("leak", info => {
  // tslint:disable-next-line
  console.error("memory leak detected");
  throw new Error(info);
});

while (true) {
  const vast = generateMinimalVast();
  vast.validate();
  vast.toXml();
}
