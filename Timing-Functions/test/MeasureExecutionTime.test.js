import { measureExecutionTime } from '../MeasureExecutionTime';

describe('Measure Execution Time', () => {
  it('measures the execution time of a function', () => {
    const testFunction = () => {
      let sum = 0;
      for (let i = 0; i < 1000000; i++) {
        sum += i;
      }
    };

    const executionTime = measureExecutionTime(testFunction);
    expect(executionTime).toBeGreaterThan(0); // Ensure it took some time
  });

  it('throws a type error if not given a function', () => {
    expect(() => {
      measureExecutionTime('notAFunction');
    }).toThrow('Input should be a function.');
  });
});
