//The Bellman–Ford algorithm is an algorithm that computes shortest paths 
//from a single source vertex to all of the other vertices in a weighted digraph.
//It also detects negative weight cycle. 
//Worst-case performance O(VE) 
//Best-case performance O(E) 
//Worst-case space complexity O(V)

function BellmanFord(graph, V, E, src)
{
    // Initialize distance of all vertices as infinite.
    var dis = Array(V).fill(Infinity);
    // initialize distance of source as 0
    dis[src] = 0;
 
    // Relax all edges |V| - 1 times. A simple
    // shortest path from src to any other
    // vertex can have at-most |V| - 1 edges
    for (var i = 0; i < V - 1; i++){
        for (var j = 0; j < E; j++){
            if ((dis[graph[j][0]] + graph[j][2]) < dis[graph[j][1]])
                dis[graph[j][1]] = dis[graph[j][0]] + graph[j][2];
        }
    }
    // check for negative-weight cycles.
    for (var i = 0; i < E; i++){
        var x = graph[i][0];
        var y = graph[i][1];
        var weight = graph[i][2];
        if ((dis[x] != Infinity) && (dis[x] + weight < dis[y])){
            console.log("Graph contains negative weight cycle")
        }
    }
    console.log("Vertex Distance from Source")
    for (var i = 0; i < V; i++){
        console.log(i + "   " + dis[i])
    }
}
 
// Driver code
var V = 5; // Number of vertices in graph
var E = 8; // Number of edges in graph
 
// Every edge has three values (u, v, w) where
// the edge is from vertex u to v. And weight
// of the edge is w.
var graph = [[ 0, 1, -1 ], [ 0, 2, 4 ],
            [ 1, 2, 3 ], [ 1, 3, 2 ],
            [ 1, 4, 2 ], [ 3, 2, 5 ],
            [ 3, 1, 1 ], [ 4, 3, -3 ]]
                
BellmanFord(graph, V, E, 0)