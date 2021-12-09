import { findMin } from '../FindMin'

describe('findMin', () => {
  // ----------------------------------------------------------------------
  test('given empty array then min is undefined', () => {
    expect(findMin([])).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('given single value array then min is found', () => {
    expect(findMin([1])).toBe(1);
    expect(findMin([-1])).toBe(-1);
    expect(findMin([0])).toBe(0);
  });
  // ----------------------------------------------------------------------
  test('given array then min is found', () => {
    expect(findMin([1,2])).toBe(1);
    expect(findMin([-1,10])).toBe(-1);
    expect(findMin([0,100])).toBe(0);
    expect(findMin([100,0])).toBe(0);
    expect(findMin([100,50,20,0,-100,0,2,30,45,99,104,23])).toBe(-100);
  });
  // ----------------------------------------------------------------------
  test('given empty generator then min is undefined', () => {
    const src = function*(){}
    expect(findMin(src())).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('given generator then min is found', () => {
    const src = function*(){
      yield 1;
      yield -1;
      yield 0;
    }
    expect(findMin(src())).toBe(-1);
  });
  // ----------------------------------------------------------------------
  test('given string generator then min string length is found', () => {
    const src = function*(){
      yield "abc";
      yield "de";
      yield "qwerty";
    }
    expect(findMin(src(),_x=>_x.length)).toBe(2);
  });
});