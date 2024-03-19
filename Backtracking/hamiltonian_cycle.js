/**
 * Determines whether it is possible to add a next vertex into the path
 * by validating two conditions:
 * 1. There should be a path between the current and next vertices.
 * 2. The next vertex should not be already in the path.
 * If both validations succeed, return true; otherwise, return false.
 *
 * @param {number[][]} graph - The graph represented as an adjacency matrix.
 * @param {number} nextVertex - The vertex to be considered for the next step.
 * @param {number} currentIndex - The current position in the path.
 * @param {number[]} path - The current path being constructed.
 * @returns {boolean} - True if it's possible to connect the vertices, false otherwise.
 */
function validConnection(graph, nextVertex, currentIndex, path) {
    if (graph[path[currentIndex - 1]][nextVertex] === 0) {
        return false; // No path between current and next vertex
    }
    return !path.includes(nextVertex); // Next vertex should not be already in the path
}

/**
 * Recursive utility function to find a Hamiltonian cycle in the graph.
 *
 * @param {number[][]} graph - The graph represented as an adjacency matrix.
 * @param {number[]} path - The current path being constructed.
 * @param {number} currentIndex - The current position in the path.
 * @returns {boolean} - True if a Hamiltonian cycle is found, false otherwise.
 */
function utilHamiltonCycle(graph, path, currentIndex) {
    if (currentIndex === graph.length) {
        // Base case: All vertices have been visited
        return graph[path[currentIndex - 1]][path[0]] === 1;
    }

    for (let nextVertex = 0; nextVertex < graph.length; nextVertex++) {
        if (validConnection(graph, nextVertex, currentIndex, path)) {
            path[currentIndex] = nextVertex; // Remember the next transition
            if (utilHamiltonCycle(graph, path, currentIndex + 1)) {
                return true; // Found a Hamiltonian cycle
            }
            path[currentIndex] = -1; // Backtrack
        }
    }
    return false;
}

/**
 * Finds a Hamiltonian cycle in the given graph starting from the specified vertex.
 * If a Hamiltonian cycle is found, the cycle is returned as an array of vertices.
 * If no Hamiltonian cycle is found, an empty array is returned.
 *
 * @param {number[][]} graph - The graph represented as an adjacency matrix.
 * @param {number} [startIndex=0] - The starting vertex for the Hamiltonian cycle.
 * @returns {number[]} - An array of vertices representing the Hamiltonian cycle.
 */
function hamiltonCycle(graph, startIndex = 0) {
    const path = new Array(graph.length + 1).fill(-1);
    path[0] = path[graph.length] = startIndex; // Initialize path

    return utilHamiltonCycle(graph, path, 1) ? path : [];
}

// Example usage:
const graph = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0]
];

const cycle = hamiltonCycle(graph);
if (cycle.length > 0) {
    console.log("Hamiltonian cycle found:", cycle);
} else {
    console.log("No Hamiltonian cycle found in the graph.");
}
