import { wiggleSort } from '../WiggleSort'

function testWiggleSort (n) {
  test('Wiggle Sort Test', () => {
    for (let i = 0; i < n.length; i++) {
      if (i % 2 === 0) {
        expect(n[i] >= n[i + 1])
      } else {
        expect(n[i] <= n[i + 1])
      }
    }
  })
}

testWiggleSort(wiggleSort([0, 3, 6, 9, 12]))
testWiggleSort(wiggleSort([1, 1, 90, 65, 72, 0, -32]))
testWiggleSort(wiggleSort([2, 3, 2, 3, 2, 3]))
testWiggleSort(wiggleSort([100, 4, 89, 2, 91, 89, -20, -20, 0, 0, 0]))
