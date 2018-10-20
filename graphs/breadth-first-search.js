// Breadth-first Search

class Graph {
    constructor(n) {
        // the number of vertexes
        this.n = n;

        // adjacency list representation
        this.adjList = Array.from(Array(n), () => []);
    }

    addDirectedEdge(from, to) {
        this.adjList[from].push(to);
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
    }

    // s - the number of the starting vertex
    // to - the number of the end vertex  
    breadthFirstSearch(s) {
        if (s < 0 || s >= this.n) {
            throw Error('Wrong starting vertex');
        }

        let queue = [];
        let visited = new Array(this.n);
        let path = new Array(this.n);
        let time = new Array(this.n).fill(-1);

        // The first iteration
        queue.push(s);
        visited[s] = true;
        path[s] = -1;
        time[s] = 0;

        while (queue.length > 0) {
            let v = queue.shift();

            for (let to of this.adjList[v]) {
                if (!visited[to]) {
                    queue.push(to);
                    visited[to] = true;
                    path[to] = v;                    
                    time[to] = time[v] + 1;
                }
            }
        }

        return { visited, path, time };
    }

    // Array of distances to vertexes from the starting one
    BFS(s) {
        return this.breadthFirstSearch(s).time;
    }

    findPathToVertex(s, to) {
        let { visited, path } = this.breadthFirstSearch(s);

        if (!visited[to]) {
            return 'No path';
        }

        let realPath = [];        
    
        for (let v = to; v !== -1; v = path[v]) {
            realPath.unshift(v);
        }

        return realPath.reduce((out, i) => `${out} ${i}`, `Path from ${s} to ${to}:`);
    }
}

function test() {
    let g = new Graph(5);

    g.addDirectedEdge(0, 1); 
    g.addDirectedEdge(1, 2);
    g.addDirectedEdge(2, 3);
    g.addDirectedEdge(3, 3);
    g.addDirectedEdge(4, 2)
    g.addEdge(2, 0);
    

    console.log(g.BFS(2));
    console.log(g.findPathToVertex(4, 1));
}

test();