// starting at s
function solve (graph, s) {
  var solutions = {}
  solutions[s] = []
  solutions[s].dist = 0

  while (true) {
    var p = null
    var neighbor = null
    var dist = Infinity

    for (var n in solutions) {
      if (!solutions[n]) { continue }
      var ndist = solutions[n].dist
      var adj = graph[n]

      for (var a in adj) {
        if (solutions[a]) { continue }

        var d = adj[a] + ndist
        if (d < dist) {
          p = solutions[n]
          neighbor = a
          dist = d
        }
      }
    }

    // no more solutions
    if (dist === Infinity) {
      break
    }

    // extend parent's solution path
    solutions[neighbor] = p.concat(neighbor)
    // extend parent's cost
    solutions[neighbor].dist = dist
  }

  return solutions
}
// create graph
var graph = {}

var layout = {
  R: ['2'],
  2: ['3', '4'],
  3: ['4', '6', '13'],
  4: ['5', '8'],
  5: ['7', '11'],
  6: ['13', '15'],
  7: ['10'],
  8: ['11', '13'],
  9: ['14'],
  10: [],
  11: ['12'],
  12: [],
  13: ['14'],
  14: [],
  15: []
}

// convert uni-directional to bi-directional graph
// var graph = {
//     a: {e:1, b:1, g:3},
//     b: {a:1, c:1},
//     c: {b:1, d:1},
//     d: {c:1, e:1},
//     e: {d:1, a:1},
//     f: {g:1, h:1},
//     g: {a:3, f:1},
//     h: {f:1}
// };

for (var id in layout) {
  if (!graph[id]) { graph[id] = {} }
  layout[id].forEach(function (aid) {
    graph[id][aid] = 1
    if (!graph[aid]) { graph[aid] = {} }
    graph[aid][id] = 1
  })
}

// choose start node
var start = '10'
// get all solutions
var solutions = solve(graph, start)

console.log("From '" + start + "' to")
// display solutions
for (var s in solutions) {
  if (!solutions[s]) continue
  console.log(' -> ' + s + ': [' + solutions[s].join(', ') + ']   (dist:' + solutions[s].dist + ')')
}

// From '10' to
//  -> 2: [7, 5, 4, 2]   (dist:4)
//  -> 3: [7, 5, 4, 3]   (dist:4)
//  -> 4: [7, 5, 4]   (dist:3)
//  -> 5: [7, 5]   (dist:2)
//  -> 6: [7, 5, 4, 3, 6]   (dist:5)
//  -> 7: [7]   (dist:1)
//  -> 8: [7, 5, 4, 8]   (dist:4)
//  -> 9: [7, 5, 4, 3, 13, 14, 9]   (dist:7)
//  -> 10: []   (dist:0)
//  -> 11: [7, 5, 11]   (dist:3)
//  -> 12: [7, 5, 11, 12]   (dist:4)
//  -> 13: [7, 5, 4, 3, 13]   (dist:5)
//  -> 14: [7, 5, 4, 3, 13, 14]   (dist:6)
//  -> 15: [7, 5, 4, 3, 6, 15]   (dist:6)
//  -> R: [7, 5, 4, 2, R]   (dist:5)
