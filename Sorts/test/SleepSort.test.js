/**
   * Jest tests for the sleepSort function.
   */
import { alternativeBubbleSort, sleepSort } from '../SleepSort'
describe("sleepSort", () => {
    it("should return an empty array when given an empty array", async () => {
      const result = await sleepSort([]);
      expect(result).toEqual([]);
    });
  
    it("should sort the input array using sleep sort", async () => {
      const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      const result = await sleepSort(input);
      expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });
  
    it("should handle duplicate values correctly", async () => {
      const input = [3, 3, 3, 2, 2, 1];
      const result = await sleepSort(input);
      expect(result).toEqual([1, 2, 2, 3, 3, 3]);
    });
  });