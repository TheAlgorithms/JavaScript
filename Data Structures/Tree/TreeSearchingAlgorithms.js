//Breadth First Search (BFS)

function bfs(tree, value) {
    var queue = []
    
    queue.push(tree[0])
    
    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
            
            var node = queue.shift()

            if (node.value === value) {
                return node
            }
            if (node.left) {
                queue.push(tree[node.left])
            }
            if (node.right) {
                queue.push(tree[node.right])
            }
        }
    }
    return null
}


//Depth First Search (DFS)

function dfs(tree, current, value) {
      var stack = [];
      var visited = [];
      var node;
      
      stack.push(current);
      
      visited[current] = true;
      
      while (stack.length!==0) {
        node = stack.pop();
        if (node === value) {
          return node;
        }
      
        for (var i = 0; i < tree[node].length; i++) {
          if (tree[node][i] && !visited[i]) {
            stack.push(i);
            visited[i] = true;
          }
        }
      }
      
      return null;
    
    }
