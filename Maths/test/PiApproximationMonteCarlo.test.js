import { piEstimation } from '../PiApproximationMonteCarlo'

describe('PiApproximationMonteCarlo', () => {
  it('should be between the range of 2 to 4', () => {
    const pi = piEstimation()
    const piRange = pi >= 2 && pi <= 4
    expect(piRange).toBeTruthy()
  })
})
