class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

class Graph {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
        this.distance = new Array(vertices);
        
        // Initialize distances to Infinity
        for (let i = 0; i < vertices; i++) {
            this.distance[i] = Infinity;
        }
    }

    bellmanFord(source) {
        // Initialize the distance to the source vertex as 0
        this.distance[source] = 0;

        // Relax all edges V-1 times (V is the number of vertices)
        for (let i = 0; i < this.vertices - 1; i++) {
            for (let j = 0; j < this.edges.length; j++) {
                const edge = this.edges[j];
                const u = edge.src;
                const v = edge.dest;
                const w = edge.weight;
                
                if (this.distance[u] !== Infinity && this.distance[u] + w < this.distance[v]) {
                    this.distance[v] = this.distance[u] + w;
                }
            }
        }

        // Check for negative-weight cycles
        for (let i = 0; i < this.edges.length; i++) {
            const edge = this.edges[i];
            const u = edge.src;
            const v = edge.dest;
            const w = edge.weight;

            if (this.distance[u] !== Infinity && this.distance[u] + w < this.distance[v]) {
                console.log("Graph contains negative-weight cycle. Bellman-Ford cannot solve it.");
                return;
            }
        }

        // Print the distances from the source vertex
        console.log("Shortest distances from source vertex:");
        for (let i = 0; i < this.vertices; i++) {
            console.log(`Vertex ${i}: ${this.distance[i]}`);
        }
    }
}

// Example usage
const vertices = 5;
const edges = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 2, 5),
    new Edge(3, 1, 1),
    new Edge(4, 3, -3)
];

const graph = new Graph(vertices, edges);
const sourceVertex = 0;
graph.bellmanFord(sourceVertex);
