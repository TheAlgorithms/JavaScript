
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

/* TEST */
var topoSorter = new TopologicalSorter()
topoSorter.addOrder(5, 2)
topoSorter.addOrder(5, 0)
topoSorter.addOrder(4, 0)
topoSorter.addOrder(4, 1)
topoSorter.addOrder(2, 3)
topoSorter.addOrder(3, 1)
console.log(topoSorter.sortAndGetOrderedItems())
