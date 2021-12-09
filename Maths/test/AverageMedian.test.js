import { averageMedian } from '../AverageMedian'

describe('math median tests', () => {
  // ----------------------------------------------------------------------
  test('given empty array then median is undefined', () => {
    expect(averageMedian([])).toBeUndefined();
  });
  // ----------------------------------------------------------------------
  test('given single array then median is found', () => {
    expect(averageMedian([1])).toBe(1);
  });
  // ----------------------------------------------------------------------
  test('given array then median not changed the origin', () => {
    const src = [1,2,1,2,0,2];
    averageMedian([src]);
    expect(src).toEqual([1,2,1,2,0,2]);
  });
  // ----------------------------------------------------------------------
  test('given array when selector defined then median not changed the origin', () => {
    const src = [1,2,1,2,0,2];
    averageMedian([src],{selector:_x=>_x});
    expect(src).toEqual([1,2,1,2,0,2]);
  });
  // ----------------------------------------------------------------------
  test('given single array when selector defined then median is found', () => {
    expect(averageMedian(["abc"], {selector: _x => _x.length})).toBe(3);
  });
    // ----------------------------------------------------------------------
    test('given sorted array then median is found', () => {
      expect(averageMedian([1],{sort:false})).toBe(1);
      expect(averageMedian([1,2],{sort:false})).toBe(1.5);
      expect(averageMedian([1,2,5],{sort:false})).toBe(2);
      expect(averageMedian([1,2,5,5],{sort:false})).toBe(3.5);
      expect(averageMedian([1,2,5,5,5],{sort:false})).toBe(5);
    });
    // ----------------------------------------------------------------------
    test('given sorted array when selector defined then median is found', () => {
      expect(averageMedian([1],{sort:false,selector:_x=>_x})).toBe(1);
      expect(averageMedian([1,2],{sort:false,selector:_x=>_x})).toBe(1.5);
      expect(averageMedian([1,2,5],{sort:false,selector:_x=>_x})).toBe(2);
      expect(averageMedian([1,2,5,5],{sort:false,selector:_x=>_x})).toBe(3.5);
      expect(averageMedian([1,2,5,5,5],{sort:false,selector:_x=>_x})).toBe(5);
    });
    // ----------------------------------------------------------------------
    test('given not sorted array then median is found', () => {
      expect(averageMedian([1])).toBe(1);
      expect(averageMedian([2,1])).toBe(1.5);
      expect(averageMedian([5,1,2])).toBe(2);
      expect(averageMedian([5,2,1,5])).toBe(3.5);
      expect(averageMedian([5,1,5,2,5])).toBe(5);
    });
    // ----------------------------------------------------------------------
    test('given not sorted array when selector defined  then median is found', () => {
      expect(averageMedian([1],{selector:_x=>_x})).toBe(1);
      expect(averageMedian([2,1],{selector:_x=>_x})).toBe(1.5);
      expect(averageMedian([5,1,2],{selector:_x=>_x})).toBe(2);
      expect(averageMedian([5,2,1,5],{selector:_x=>_x})).toBe(3.5);
      expect(averageMedian([5,1,5,2,5],{selector:_x=>_x})).toBe(5);
    });
    // ----------------------------------------------------------------------
    test('given empty generator then median is undefined', () => {
      const src = function*(){}
      expect(averageMedian(src())).toBeUndefined();
    });
    // ----------------------------------------------------------------------
    test('given generator then median is found', () => {
      const src = function*(){
        yield 1;
        yield -1;
        yield 0;
      }
      expect(averageMedian(src())).toBe(0);
    });
    // ----------------------------------------------------------------------
    test('given string generator then median string length is found', () => {
      const src = function*(){
        yield "abc";
        yield "de";
        yield "qwertyq";
      }
      expect(averageMedian(src(),{selector:_x=>_x.length})).toBe(3);
    });
});