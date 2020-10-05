/**
 * @function
 * In computer science, a topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. For instance, the vertices of the graph may represent tasks to be performed, and the edges may represent constraints that one task must be performed before another; in this application, a topological ordering is just a valid sequence for the tasks.
 * @see [TopologicalSorter](https://en.wikipedia.org/wiki/Topological_sorting)
 */
function TopologicalSorter () {
  var graph = {}
  var isVisitedNode
  var finishTimeCount
  var finishingTimeList
  var nextNode

  this.addOrder = function (nodeA, nodeB) {
    nodeA = String(nodeA)
    nodeB = String(nodeB)
    graph[nodeA] = graph[nodeA] || []
    graph[nodeA].push(nodeB)
  }

  this.sortAndGetOrderedItems = function () {
    isVisitedNode = Object.create(null)
    finishTimeCount = 0
    finishingTimeList = []

    for (var node in graph) {
      if (Object.prototype.hasOwnProperty.call(graph, node) && !isVisitedNode[node]) {
        dfsTraverse(node)
      }
    }

    finishingTimeList.sort(function (item1, item2) {
      return item1.finishTime > item2.finishTime ? -1 : 1
    })

    return finishingTimeList.map(function (value) { return value.node })
  }

  function dfsTraverse (node) {
    isVisitedNode[node] = true
    if (graph[node]) {
      for (var i = 0; i < graph[node].length; i++) {
        nextNode = graph[node][i]
        if (isVisitedNode[nextNode]) continue
        dfsTraverse(nextNode)
      }
    }

    finishingTimeList.push({
      node: node,
      finishTime: ++finishTimeCount
    })
  }
}

var topoSorter = new TopologicalSorter()
topoSorter.addOrder(5, 2)
topoSorter.addOrder(5, 0)
topoSorter.addOrder(4, 0)
topoSorter.addOrder(4, 1)
topoSorter.addOrder(2, 3)
topoSorter.addOrder(3, 1)
console.log(topoSorter.sortAndGetOrderedItems())
