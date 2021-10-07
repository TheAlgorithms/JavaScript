const BinaryHeap = require('../BinaryHeap').BinaryHeap
test('Binary Heap works as a Max Heap', function () {
  const maxHeap = new BinaryHeap((parent, child) => parent >= child)
  maxHeap.insert(4)
  maxHeap.insert(3)
  maxHeap.insert(6)
  maxHeap.insert(1)
  maxHeap.insert(8)
  maxHeap.insert(2)
  const sorted = []
  while (!maxHeap.empty()) {
    const mx = maxHeap.extract()
    sorted.push(mx)
  }
  expect(sorted).toEqual([8,6,4,3,2,1])
})
