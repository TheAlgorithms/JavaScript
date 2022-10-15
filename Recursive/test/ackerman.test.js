import { ackerman } from '../Ackerman'

test("Ackerman", () => {
  expect(ackerman(0,0)).toBe(1);
  expect(ackerman(1,0)).toBe(2);
  expect(ackerman(1,1)).toBe(3);
  expect(ackerman(1,2)).toBe(4);
})
