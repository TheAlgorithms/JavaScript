var Graph = (function () {

    function graph() {
        this.adjacencyMap = {}
    }

    graph.prototype.addVertex = function (v) {
        this.adjacencyMap[v] = [];

    }
    graph.prototype.containsVertex = function (vertex) {
        return typeof (this.adjacencyMap[vertex]) !== "undefined"
    }

    graph.prototype.addEdge = function (v, w) {
        let result = false
        if (this.containsVertex(v) && this.containsVertex(w)) {
            this.adjacencyMap[v].push(w);
            this.adjacencyMap[w].push(v);
            result = true
        }
        return result
    }

    graph.prototype.printGraph = function () {
        let keys = Object.keys(this.adjacencyMap);
        for (let i of keys) {
            let values = this.adjacencyMap[i];
            let vertex = "";
            for (let j of values)
                vertex += j + " ";
            console.log(i + " -> " + vertex);
        }
    }

    return graph;

}())


//test
var g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.printGraph();