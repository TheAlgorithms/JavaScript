import { ackerman } from '../Ackerman'

// More concise, plus we get test name formatting
test("Ackerman", () => {
  test.each([[0, 0, 1], [1, 0, 2], [1, 1, 3], [1, 2, 4]])('%i! = %i', (m, n, expected) => {
    expect(ackerman(m,n)).toBe(expected);
  });
});

