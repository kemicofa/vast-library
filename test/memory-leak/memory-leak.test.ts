import { execSync } from "child_process";

describe("Memory leak", () => {
  it("should not have a memory leak", () => {
    try {
      execSync("ts-node ./test/memory-leak/memory-leak.ts");
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error);
      throw new Error("memory leak detected");
    }
  });
});
