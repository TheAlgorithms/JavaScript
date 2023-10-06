import { simulateLangtonsAnt } from './LangtonsAnt';

describe('Langton\'s Ant', () => {
  it('Simulates Langton\'s Ant for 1 step', () => {
    const gridSize = 11;
    const steps = 1;
    const result = simulateLangtonsAnt(steps, gridSize);

    // Add your assertions here to check the grid state after 1 step
    // For example, you can check the color of specific cells using result[row][col]
  });

  it('Simulates Langton\'s Ant for 10 steps', () => {
    const gridSize = 21;
    const steps = 10;
    const result = simulateLangtonsAnt(steps, gridSize);

    // Add your assertions here to check the grid state after 10 steps
  });

  it('Simulates Langton\'s Ant for 50 steps', () => {
    const gridSize = 31;
    const steps = 50;
    const result = simulateLangtonsAnt(steps, gridSize);

    // Add your assertions here to check the grid state after 50 steps
  });

  // Add more test cases as needed to cover different scenarios
});
