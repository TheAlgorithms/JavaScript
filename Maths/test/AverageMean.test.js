import { mean } from '../AverageMean'

describe('math average tests', () => {
  // ----------------------------------------------------------------------
  test('should return undefined if given empty object', () => {
    expect(mean([])).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('should return single valueif given 1 value object', () => {
    expect(mean([1])).toBe(1);
    expect(mean([-1])).toBe(-1);
    expect(mean([0])).toBe(0);
  });
  // ----------------------------------------------------------------------
  test('should return correct average in some arrays', () => {
    expect(mean([1,2])).toBe(1.5);
    expect(mean([9,1,2])).toBe(4);
    expect(mean([-1,11])).toBe(5);
    expect(mean([0,100])).toBe(50);
    expect(mean([100,0])).toBe(50);
    expect(mean([100,20,80,0])).toBe(50);
  });
  // ----------------------------------------------------------------------
  test('should return undefined if given empty generator', () => {
    const src = function*(){}
    expect(mean(src())).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('should return correct average in generator function', () => {
    const src = function*(){
      yield 1;
      yield -1;
      yield 0;
    }
    expect(mean(src())).toBe(0);
  });
  // ----------------------------------------------------------------------
  test('should return correct average in generator function with custom selector function', () => {
    const src = function*(){
      yield "abc";
      yield "de";
      yield "qwertyq";
    }
    expect(mean(src(),_x=>_x.length)).toBe(4);
  });
});