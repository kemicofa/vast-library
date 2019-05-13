export class VersionNumber {
  public snakeVersion: string;
  constructor(snakeVersion: string) {
    if (!snakeVersion /* || !/[0-9]_[0-9]/.test(snakeVersion) */) {
      throw new Error("this batch needs an arg with the vast version number");
    }
    this.snakeVersion = snakeVersion;
  }

  // 2, 3, 4 or 4.1
  public int(): number {
    return Number(this.snakeVersion.replace("_", "."));
  }
  // 2, 3, 4 or 4
  public intFloor(): number {
    return Number(Math.floor(this.int()));
  }
  // 2, 3, 4 or 4_1
  public intSnake(): string {
    return String(this.int()).replace(".", "_");
  }
  // 2_0, 3_0, 4_0 or 4_1
  public floatSnake(): string {
    return this.snakeVersion;
  }
}
