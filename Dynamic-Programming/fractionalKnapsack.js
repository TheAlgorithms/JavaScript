/* 0-1 knapsack problem

  items: an array of {w: v:} (where 'w' stands for weight, and 'v' stands for value)
  capacity: a positive integer number
Will return max sum value that can reach, and the chosen subset to add up to the value.
Example:
var items = [{w:3,b:10},{w:1,b:3},{w:2,b:9},{w:2,b:5},{w:1,b:6}];
var capacity = 6;
console.log(knapsack(items, capacity));
will return 
{ maxValue: 25,
  subset: [ { w: 1, v: 6 }, { w: 2, v: 9 }, { w: 3, v: 10 } ] }
*/

function knapsack(items, capacity) {
  var memo = []

  // Filling the sub-problem solutions grid.
  for (var i = 0; i < items.length; i++) {
    // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
    var row = []
    for (var cap = 1; cap <= capacity; cap++) {
      row.push(getSolution(i, cap))
    }
    memo.push(row)
  }

  return getLast()

  function getLast() {
    var lastRow = memo[memo.length - 1]
    return lastRow[lastRow.length - 1]
  }

  function getSolution(row, cap) {
    const NO_SOLUTION = { maxValue: 0, subset: [] }

    var col = cap - 1
    var lastItem = items[row]

    var remaining = cap - lastItem.w

    var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION

    var lastSubSolution =
      row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION

    if (remaining < 0) {
      return lastSolution
    }

    var lastValue = lastSolution.maxValue
    var lastSubValue = lastSubSolution.maxValue

    var newValue = lastSubValue + lastItem.v
    if (newValue >= lastValue) {
      var _lastSubSet = lastSubSolution.subset.slice()
      _lastSubSet.push(lastItem)
      return { maxValue: newValue, subset: _lastSubSet }
    } else {
      return lastSolution
    }
  }
}

// test
var items = [
  { w: 70, v: 135 },
  { w: 73, v: 139 },
  { w: 77, v: 149 },
  { w: 80, v: 150 },
  { w: 82, v: 156 },
  { w: 87, v: 163 },
  { w: 90, v: 173 }
]

var capacity = 750
console.log(knapsack(items, capacity))
