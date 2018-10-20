/*
  A non-recursive implementation of bfs with worst-case space complexity O(|E|)
*/

function Vertex (name, neighbours) {
    this.name = name;
    this.neighbours = neighbours;
  }
  
  function bfs (root) {
    var visited = {}
    var stack = []
  
    stack.push(root)
    while(!!stack.length) {
      var vertex = stack.shift()
  
      if (!visited[vertex.name]) {
        visited[vertex.name] = true
        console.log('Visiting vertex ', vertex.name)
  
        var len = vertex.neighbours.length
        for (var index = 0; index < len; index++) {
          stack.push(vertex.neighbours[index])
        }
      }
    }
  }
  
  var root = new Vertex('root', [
    new Vertex('child 1', [
      new Vertex('grandchild 1', []), new Vertex('grandchild 2', [])
    ]),
    new Vertex('child 2', [
      new Vertex('grandchild 3', []),
    ]),
    new Vertex('child 3', [
      new Vertex('grandchild 4', [
        new Vertex('grandgrandchild 1', [])
      ]),
    ]),
  ])
  
  bfs(root)