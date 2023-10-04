import { limit } from "../Limit.js";

describe("limit", () => {
  it("should return 4", () => {
    expect(limit(2, (x) => x ** 2)).toBe(4);
  });
  it("should return 2", () => {
    expect(limit(Infinity, (x) => (2 * x - 1) / x)).toBe(2);
  });
  it("should return 0.84147", () => {
    expect(limit(1, Math.sin)).toBeCloseTo(0.84147);
  });
  it("should return 0", () => {
    expect(limit(0, (x) => Math.sin(x) / x)).toBe(1);
  });
  it("should return 1", () => {
    expect(limit(0, (x) => Math.cos(x) / x)).toBe(0);
  });
  it("should throw error", () => {
    expect(limit("10", (x) => Math.cos(x) / x)).toThrow(TypeError);
  });
  it("should throw error", () => {
    expect(limit(10, "x")).toThrow(SyntaxError);
  });
  it("should throw error", () => {
    expect(limit(10, (x) => Math.cos(x) / x, 12)).toThrow(TypeError);
  });
  it("should throw error", () => {
    expect(limit(10, (x) => Math.cos(x) / x, 0)).toThrow(TypeError);
  });
  it("should throw error", () => {
    expect(
      limit(10, (x) => {
        console.log(x);
        return "abc";
      })
    ).toThrow(TypeError);
  });
});
