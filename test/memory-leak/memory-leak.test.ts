import { execSync } from "child_process";

describe("Memory leak", () => {
  it("should not have a memory leak", () => {
    try {
      execSync("node ./test/memory-leak/memory-leak.js");
    } catch (error) {
      throw new Error("memory leak detected");
    }
  });
});
