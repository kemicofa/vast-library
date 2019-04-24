import { generateMinimalVast } from "../helpers";

describe("Stress test", () => {
  it("should generate 10000 VAST in less than 25s", () => {
    const begin = new Date();
    for (let i = 0; i < 10000; i++) {
      const vast = generateMinimalVast();
      vast.toXml();
    }
    const end = new Date();

    if (end.getTime() - begin.getTime() > 25000) {
      throw new Error("Vast generation was too slow");
    }
  });
});
