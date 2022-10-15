import { invertArr } from "../InvertArray";

describe("invert Array", () => {
  it(" returns an empty array when array with 0 elements given", () => {
    const Array = [];
    expect(invertArr(Array)).toEqual([]);
  });
  it("returns same array when array given has 1 element", () => {
    const Array = [1];
    expect(invertArr(Array)).toEqual([1]);
  });
  it("returns inverted array when array given has +1 elements", () => {
    const Array = [1, 2, 3, 4, 5, 6];
    expect(invertArr(Array)).toEqual([6, 5, 4, 3, 2, 1]);
  });
});