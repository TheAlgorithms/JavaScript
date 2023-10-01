import { FindLastElement } from '../FindLastElement';
import each from 'jest-each';

describe('find last element of an array', () => {
  each`
  array          | expected
  ${[]}          | ${undefined}
  ${[1]}         | ${1}
  ${[1, 2, 3, 4]} | ${4}
  `.test('returns $expected when given $array', ({ array, expected }) => {
    expect(FindLastElement(array)).toEqual(expected);
  });
});