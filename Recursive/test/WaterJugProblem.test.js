// WaterJugProblem.test.js
import { canMeasureWater } from "../WaterJugProblem"; // Adjust the path as necessary

describe("Water Jug Problem", () => {
  it("should return true for values jug1=3, jug2=5, target=4", () => {
    expect(canMeasureWater(3, 5, 4)).toBe(true);
  });

  it("should return false for values jug1=2, jug2=6, target=5", () => {
    expect(canMeasureWater(2, 6, 5)).toBe(false);
  });

  it("should return true for values jug1=5, jug2=3, target=5", () => {
    expect(canMeasureWater(5, 3, 5)).toBe(true);
  });

  it("should return true for values jug1=3, jug2=5, target=0", () => {
    expect(canMeasureWater(3, 5, 0)).toBe(true);
  });

  it("should return true for values jug1=3, jug2=5, target=8", () => {
    expect(canMeasureWater(3, 5, 8)).toBe(true);
  });

  it("should throw an error for invalid input", () => {
    expect(() => canMeasureWater(-1, 5, 3)).toThrow(
      "Invalid input: capacities must be non-negative."
    );
    expect(() => canMeasureWater(3, -2, 1)).toThrow(
      "Invalid input: capacities must be non-negative."
    );
    expect(() => canMeasureWater(3, 5, -1)).toThrow(
      "Invalid input: target amount must be non-negative."
    );
  });
});
