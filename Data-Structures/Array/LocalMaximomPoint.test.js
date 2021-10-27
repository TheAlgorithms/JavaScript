import { LocalMaximomPoint } from './LocalMaximomPoint'

describe('LocalMaximomPoint tests', () => {
  it('should return the only element of a list of length 1', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    expect(LocalMaximomPoint([100], 1)).toEqual(100)
    expect(LocalMaximomPoint([-23], 1)).toEqual(-23)
    expect(LocalMaximomPoint([2007.102], 1)).toEqual(2007.102)
    expect(LocalMaximomPoint([0.9], 1)).toEqual(0.9)
    expect(LocalMaximomPoint([-0.075], 1)).toEqual(-0.075)
    expect(LocalMaximomPoint([0], 1)).toEqual(0)
    expect(LocalMaximomPoint([1], 1)).toEqual(1)
  })

  it('should throw an Error when k is greater than the length of the list', () => {
    expect(() => LocalMaximomPoint([100, 2], 5)).toThrow('Index Out of Bound')
  })

  it('should throw an Error when k is less than 1', () => {
    expect(() => LocalMaximomPoint([100, 2], 0)).toThrow('Index Out of Bound')
    expect(() => LocalMaximomPoint([100, 2], -1)).toThrow('Index Out of Bound')
  })

  describe('varieties of list composition', () => {
    it('should return the kth smallest element of a list that is in increasing order', () => {
      expect(LocalMaximomPoint([10, 22, 33, 44, 55], 1)).toEqual(10)
      expect(LocalMaximomPoint([10, 22, 33, 44, 55], 2)).toEqual(22)
      expect(LocalMaximomPoint([10, 22, 33, 44, 55], 3)).toEqual(33)
      expect(LocalMaximomPoint([10, 22, 33, 44, 55], 4)).toEqual(44)
      expect(LocalMaximomPoint([10, 22, 33, 44, 55], 5)).toEqual(55)
    })

    it('should return the kth smallest element of an input list that is in decreasing order', () => {
      expect(LocalMaximomPoint([82, 33.12, 4.0, 1], 1)).toEqual(1)
      expect(LocalMaximomPoint([82, 33.12, 4.0, 1], 2)).toEqual(4.0)
      expect(LocalMaximomPoint([82, 33.12, 4.0, 1], 2)).toEqual(4)
      expect(LocalMaximomPoint([82, 33.12, 4.0, 1], 3)).toEqual(33.12)
      expect(LocalMaximomPoint([82, 33.12, 4.0, 1], 4)).toEqual(82)
    })

    it('should return the kth smallest element of an input list that is no particular order', () => {
      expect(LocalMaximomPoint([123, 14231, -10, 0, 15], 3)).toEqual(15)
      expect(LocalMaximomPoint([0, 15, 123, 14231, -10], 3)).toEqual(15)
      expect(LocalMaximomPoint([-10, 15, 123, 14231, 0], 3)).toEqual(15)
      expect(LocalMaximomPoint([14231, 0, 15, 123, -10], 3)).toEqual(15)
      expect(LocalMaximomPoint([14231, 0, 15, -10, 123], 3)).toEqual(15)
    })
  })
})


const main = () => {

  // test with random 100 cells array
  const arraySize = 100

  // Initial empty array
  const A = [];

  // Push Random numbers while not repeating previous numbers in the array
  do {
      // Generating random number
      const randomNumber = Math
          .floor(Math.random() * arraySize) + 1

      // Pushing into the array only 
      // if the array does not contain it
      if (!A.includes(randomNumber)) {
          A.push(randomNumber);
      }

  } while (A.length < arraySize);
  
  // Print array for debugging purposes
  console.log(JSON.stringify(A))
  
  // Main program
  console.log("Index of the maximum local point is " + LocalMaximomPoint(A));
}

main();