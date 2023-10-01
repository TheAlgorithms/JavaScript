/**
 * Class for finding articulation points in an undirected graph using Tarjan's algorithm.
 */
class ArticulationPointsFinder {
  /**
   * Initialize the ArticulationPointsFinder.
   */
  constructor() {
    this.timer = 1; // Initialize a timer to keep track of time during DFS traversal
  }

  dfs(node, parent, visited, tin, low, mark, adj) {
    visited[node] = 1; // Mark the current node as visited
    low[node] = tin[node] = this.timer; // Initialize low and tin values for the current node
    this.timer++; // Increment the timer
    let child = 0; // Initialize the number of child nodes

    // Iterate through the neighbors of the current node
    for (let i of adj[node]) {
      if (i === parent) {
        continue; // Skip the parent node to avoid going back
      }
      if (!visited[i]) {
        // If the neighbor is not visited, perform DFS
        this.dfs(i, node, visited, tin, low, mark, adj);
        low[node] = Math.min(low[node], low[i]); // Update low value of the current node
        if (low[i] >= tin[node] && parent !== -1) {
          mark[node] = 1; // Mark the current node as an articulation point
        }
        child++; // Increment the child count
      } else {
        low[node] = Math.min(low[node], tin[i]); // Update low value of the current node
      }
    }

    if (child > 1 && parent === -1) {
      mark[node] = 1; // Mark the current node as an articulation point if it has more than one child
    }
  }

  /**
   * Find and return the articulation points in the graph.
   * @param {number} V - The number of vertices in the graph.
   * @param {number[][]} adj - Adjacency list representing the graph.
   * @returns {number[]} - An array containing the articulation points.
   */
  findArticulationPoints(V, adj) {
    let visited = new Array(V).fill(0); // Create an array to track visited nodes
    let tin = new Array(V); // Create an array to store tin values
    let low = new Array(V); // Create an array to store low values
    let mark = new Array(V).fill(0); // Create an array to mark articulation points

    // Perform DFS for all unvisited nodes in the graph
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.dfs(i, -1, visited, tin, low, mark, adj);
      }
    }

    let answer = [];

    // Collect and return the articulation points
    for (let i = 0; i < V; i++) {
      if (mark[i] === 1) {
        answer.push(i);
      }
    }

    if (answer.length === 0) {
      return [-1]; // If no articulation points found, return -1
    }

    return answer; // Return the list of articulation points
  }
}

// Export the ArticulationPointsFinder class
export { ArticulationPointsFinder };

// The following code is for testing the algorithm

/**
 * Function to read input and start the program.
 */
function main() {
  const tc = parseInt(readline()); // Read the number of test cases

  for (let t = 0; t < tc; t++) {
    const [V, E] = readline().split(" ").map(Number); // Read the number of vertices and edges
    let adj = Array.from({ length: V }, () => []); // Create an adjacency list for the graph

    // Read and build the graph by adding edges
    for (let i = 0; i < E; i++) {
      const [u, v] = readline().split(" ").map(Number);
      adj[u].push(v);
      adj[v].push(u);
    }

    const apFinder = new ArticulationPointsFinder(); // Create an instance of the ArticulationPointsFinder class
    const ans = apFinder.findArticulationPoints(V, adj); // Find articulation points in the graph
    console.log(ans.join(" ")); // Print the articulation points separated by spaces
  }
}

// Define your readline() function here to read input
// and call the main() function to start the program
function readline() {
  // Implement your input reading logic here
}

// Call the main() function to start the program
main();