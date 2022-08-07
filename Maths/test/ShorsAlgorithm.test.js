import { ShorsAlgorithm } from '../ShorsAlgorithm'
import { fermatPrimeCheck } from '../FermatPrimalityTest'

describe("Shor's Algorithm", () => {
  const N = 10 // number of tests
  const max = 35000 // max value to factorize
  const min = 1000 // min value to factorize

  for (let i = 0; i < N; i++) {
    while (true) {
      const num = Math.floor(Math.random() * max) + min
      // num must be composite, don't care for false negatives
      if (fermatPrimeCheck(num, 1)) continue

      it('should find a non-trivial factor of ' + num, () => {
        const f = ShorsAlgorithm(num)

        // should not be trivial
        expect(f).not.toEqual(1)
        expect(f).not.toEqual(num)

        // should be a factor
        expect(num % f).toEqual(0)
      })

      break
    }
  }
})
