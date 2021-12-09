import { mean } from '../AverageMean'

describe('math average tests', () => {
  // ----------------------------------------------------------------------
  test('should return undefined if given empty object', () => {
    expect(average([])).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('should return single valueif given 1 value object', () => {
    expect(average([1])).toBe(1);
    expect(average([-1])).toBe(-1);
    expect(average([0])).toBe(0);
  });
  // ----------------------------------------------------------------------
  test('should return correct average in some arrays', () => {
    expect(average([1,2])).toBe(1.5);
    expect(average([9,1,2])).toBe(4);
    expect(average([-1,11])).toBe(5);
    expect(average([0,100])).toBe(50);
    expect(average([100,0])).toBe(50);
    expect(average([100,20,80,0])).toBe(50);
  });
  // ----------------------------------------------------------------------
  test('should return undefined if given empty generator', () => {
    const src = function*(){}
    expect(average(src())).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('should return correct average in generator function', () => {
    const src = function*(){
      yield 1;
      yield -1;
      yield 0;
    }
    expect(average(src())).toBe(0);
  });
  // ----------------------------------------------------------------------
  test('should return correct average in generator function with custom selector function', () => {
    const src = function*(){
      yield "abc";
      yield "de";
      yield "qwertyq";
    }
    expect(average(src(),_x=>_x.length)).toBe(4);
  });
});