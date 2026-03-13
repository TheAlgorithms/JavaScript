import Queue from '../Data-Structures/Queue/Queue'

/**
 * Author: Abhay Goel
 * Implementing Kahns Algorithm for a Directed Graph
 * This algorithm uses the in-degree count of a node to process
 * It can be used to find Topological ordering , Cycle in a DAG.
 * Tutorial on Lowest Common Ancestor: [https://www.geeksforgeeks.org/cpp/kahns-algorithm-in-cpp/](https://www.geeksforgeeks.org/cpp/kahns-algorithm-in-cpp/)
 */
export function KahnsAlgorithm(graph) {
  // Keeps a track of Indegree of All Nodes in the Graph
  let Indegree_of_Node = {}

  /* 

    Structure of Graph is like this
    Graph =>
    {
        A : [B , C] ,
        B: [C , D]
    }
    u -> (v1  , v2 ..)

      */

  for (const node in graph) {
    // initialising empty
    Indegree_of_Node[node] = 0
  }

  // Calculating Indeg of Nodes
  for (const node in graph) {
    for (const neighbor of graph[node]) {
      // calculating the indegree of each node
      Indegree_of_Node[neighbor] = Indegree_of_Node[neighbor] + 1
    }
  }

  // Queue For Traversal
  let queue_for_Indeg = new Queue()

  // pusing all nodes
  for (const node in graph) {
    if (Indegree_of_Node[node] == 0) queue_for_Indeg.enqueue(node)
  }

  let Ordered_Nodes = []

  // Algorithm starts
  // loop till no nodes with are left with zero indegree
  while (queue_for_Indeg.isEmpty() === false) {
    let frontNode = queue_for_Indeg.peekFirst()
    Ordered_Nodes.push(frontNode)
    queue_for_Indeg.dequeue()

    for (const neighbor of graph[frontNode]) {
      Indegree_of_Node[neighbor] = Indegree_of_Node[neighbor] - 1
      if (Indegree_of_Node[neighbor] === 0) {
        queue_for_Indeg.enqueue(neighbor)
      }
    }
  }

  return Ordered_Nodes
}
