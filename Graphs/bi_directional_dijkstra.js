/**
 * Bidirectional Dijkstra's algorithm to find the shortest path between two nodes in a graph.
 *
 * @param {string} source - The starting node.
 * @param {string} destination - The destination node.
 * @param {object} graphForward - The forward graph representation with node distances.
 * @param {object} graphBackward - The backward graph representation with node distances.
 * @returns {number} - The length of the shortest path. Returns -1 if the destination is not reachable.
 */
function bidirectionalDijkstra(source, destination, graphForward, graphBackward) {
    let shortestPathDistance = -1;

    const visitedForward = new Set();
    const visitedBackward = new Set();
    const costForward = { [source]: 0 };
    const costBackward = { [destination]: 0 };
    const parentForward = { [source]: null };
    const parentBackward = { [destination]: null };
    const queueForward = new PriorityQueue();
    const queueBackward = new PriorityQueue();

    let shortestDistance = Number.POSITIVE_INFINITY;

    queueForward.enqueue(0, source);
    queueBackward.enqueue(0, destination);

    if (source === destination) {
        return 0;
    }

    while (!queueForward.isEmpty() && !queueBackward.isEmpty()) {
        const [_, vertexForward] = queueForward.dequeue();
        visitedForward.add(vertexForward);

        const [__, vertexBackward] = queueBackward.dequeue();
        visitedBackward.add(vertexBackward);

        shortestDistance = passAndRelaxation(
            graphForward,
            vertexForward,
            visitedForward,
            visitedBackward,
            costForward,
            costBackward,
            queueForward,
            parentForward,
            shortestDistance
        );

        shortestDistance = passAndRelaxation(
            graphBackward,
            vertexBackward,
            visitedBackward,
            visitedForward,
            costBackward,
            costForward,
            queueBackward,
            parentBackward,
            shortestDistance
        );

        if (costForward[vertexForward] + costBackward[vertexBackward] >= shortestDistance) {
            break;
        }
    }

    if (shortestDistance !== Number.POSITIVE_INFINITY) {
        shortestPathDistance = shortestDistance;
    }

    return shortestPathDistance;
}

/**
 * Helper function for relaxing edges and updating costs.
 *
 * @param {object} graph - The graph representation with node distances.
 * @param {string} vertex - The current vertex being processed.
 * @param {Set} visitedForward - The set of visited nodes in the forward search.
 * @param {Set} visitedBackward - The set of visited nodes in the backward search.
 * @param {object} costForward - The cost of reaching each node from the source in the forward search.
 * @param {object} costBackward - The cost of reaching each node from the destination in the backward search.
 * @param {PriorityQueue} queue - The priority queue for nodes to be processed.
 * @param {object} parent - The parent node of each node in the path.
 * @param {number} shortestDistance - The current shortest distance.
 * @returns {number} - The updated shortest distance.
 */
function passAndRelaxation(
    graph,
    vertex,
    visitedForward,
    visitedBackward,
    costForward,
    costBackward,
    queue,
    parent,
    shortestDistance
) {
    for (const [next, distance] of graph[vertex]) {
        if (visitedForward.has(next)) {
            continue;
        }

        const oldCostForward = costForward[next] || Number.POSITIVE_INFINITY;
        const newCostForward = costForward[vertex] + distance;

        if (newCostForward < oldCostForward) {
            queue.enqueue(newCostForward, next);
            costForward[next] = newCostForward;
            parent[next] = vertex;
        }

        if (visitedBackward.has(next)) {
            if (costForward[vertex] + distance + costBackward[next] < shortestDistance) {
                shortestDistance = costForward[vertex] + distance + costBackward[next];
            }
        }
    }

    return shortestDistance;
}

// Example usage:
const graphForward = {
    B: [["C", 1]],
    C: [["D", 1]],
    D: [["F", 1]],
    E: [["B", 1], ["G", 2]],
    F: [],
    G: [["F", 1]],
};

const graphBackward = {
    B: [["E", 1]],
    C: [["B", 1]],
    D: [["C", 1]],
    F: [["D", 1], ["G", 1]],
    E: [[null, Number.POSITIVE_INFINITY]],
    G: [["E", 2]],
};

const source = "E";
const destination = "F";

const shortestPathDistance = bidirectionalDijkstra(source, destination, graphForward, graphBackward);

if (shortestPathDistance !== -1) {
    console.log(`Shortest path from ${source} to ${destination}: ${shortestPathDistance}`);
} else {
    console.log(`No path found from ${source} to ${destination}`);
}
