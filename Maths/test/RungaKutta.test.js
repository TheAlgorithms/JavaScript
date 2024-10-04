import { rungeKuttaStep, rungeKuttaFull } from '../RungaKutta';

describe('rungeKuttaStep', () => {
  it('should calculate the next y value correctly for trigonometric function', () => {
    expect(
      rungeKuttaStep(0, 0.1, 1, function (x, y) {
        return Math.sin(x) + y;
      })
    ).toBeCloseTo(1.10517, 4); 
  });

  it('should calculate the next y value correctly for exponential function', () => {
    expect(
      rungeKuttaStep(0.5, 0.1, 1, function (x, y) {
        return Math.exp(x) - y;
      })
    ).toBeCloseTo(1.15233, 4); 
  });
});

describe('rungeKuttaFull', () => {
  it('should return all the points found for trigonometric function', () => {
    expect(
      rungeKuttaFull(0, 1, 0.2, 1, function (x, y) {
        return Math.sin(x) + y;
      })
    ).toEqual([
        { x: 0, y: 1 },
        { x: 0.2, y: 1.24273 }, 
        { x: 0.4, y: 1.58248 }, 
        { x: 0.6, y: 2.03817 }, 
        { x: 0.8, y: 2.63124 }, 
        { x: 1.0, y: 3.38648 }  
    ]);
  });

  it('should return all the points found for exponential function', () => {
    expect(
      rungeKuttaFull(0, 1, 0.25, 1, function (x, y) {
        return Math.exp(-x) * y;
      })
    ).toEqual([
        { x: 0, y: 1 },
        { x: 0.25, y: 1.24757 },  
        { x: 0.5, y: 1.48211 },   
        { x: 0.75, y: 1.69491 },  
        { x: 1, y: 1.88159 }      
    ]);
  });
});
