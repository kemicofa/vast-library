import { isNull } from "../../common/utils/checks";

describe("checks", () => {
  test("should find null or undefined elements", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(true);
    let a: any;
    expect(isNull(a)).toBe(true);
    a = 1;
    expect(isNull(a)).toBe(false);
    const t = [];
    expect(isNull(t)).toBe(false);
    expect(isNull(t[0])).toBe(true);
    const o: any = {};
    expect(isNull(o)).toBe(false);
    expect(isNull(o.anything)).toBe(true);
  });
});
