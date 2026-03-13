
import { describe, it, expect } from "vitest";
import { prefixSum } from "./BasicPrefixSum.js"; // adjust path if needed

describe("BasicPrefixSum", () => {
  it("computes prefix sums for a simple integer array", () => {
    const arr = [1, 2, 3];
    expect(prefixSum(arr)).toEqual([1, 3, 6]);
  });

  it("returns an empty array for empty input", () => {
    expect(prefixSum([])).toEqual([]);
  });

  it("handles negatives and zeros", () => {
    expect(prefixSum([0, -1, 5])).toEqual([0, -1, 4]);
  });

  it("works with floating-point numbers (exact equality for these values)", () => {
    expect(prefixSum([1.5, 2.25, -0.75])).toEqual([1.5, 3.75, 3.0]);
  });

  // it("does not mutate the input array", () => {
  //   const arr = [5, 6, 7];
  //   const before = arr.slice();
  //   const out = prefixSum(arr);
  //   expect(arr).toEqual(before);
  //   expect(out).not.toBe(arr); // different reference
  //   expect(out).toEqual([5, 11, 18]);
  // });

  it("throws TypeError for non-array inputs", () => {
    const bads = [null, undefined, 123, "hello", {}];
    bads.forEach((b) => {
      expect(() => prefixSum(b)).toThrow(TypeError);
    });
  });

  it("throws TypeError when any element is not a finite number", () => {
    expect(() => prefixSum([1, 2, "3"])).toThrow(TypeError);
    expect(() => prefixSum([1, 2, NaN])).toThrow(TypeError);
    expect(() => prefixSum([1, Infinity, 3])).toThrow(TypeError);
    expect(() => prefixSum([1, null, 3])).toThrow(TypeError);
  });

  it("error message includes failing index for easier debugging", () => {
    try {
      prefixSum([1, 2, "bad", 4]);
      // if no error thrown, force fail
      throw new Error("expected TypeError not thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(TypeError);
      expect(String(err.message)).toMatch(/index\s*2/i);
    }
  });
});
