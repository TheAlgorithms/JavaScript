/*
Bidirectional search is a graph search algorithm that finds a shortest path from an initial vertex to a goal vertex in a directed graph. 
It runs two simultaneous searches: one forward from the initial state, and one backward from the goal, stopping when the two meet. 
The reason for this approach is that in many cases it is faster: for instance, in a simplified model of search problem complexity in which both searches expand a tree with branching factor b, and the distance from start to goal is d, each of the two searches has complexity O(bd/2) (in Big O notation), 
and the sum of these two search times is much less than the O(bd) complexity that would result from a single search from the beginning to the goal.

Reference:
https://en.wikipedia.org/wiki/Bidirectional_search
*/


class BidirectionalSearch {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1);
    }
  
    bidirectionalSearch(startVertex, endVertex) {
      if (!this.adjList.has(startVertex) || !this.adjList.has(endVertex)) {
        return null; // One of the vertices is not in the graph
      }
  
      const visitedStart = new Set();
      const visitedEnd = new Set();
      const queueStart = [startVertex];
      const queueEnd = [endVertex];
  
      visitedStart.add(startVertex);
      visitedEnd.add(endVertex);
  
      while (queueStart.length > 0 && queueEnd.length > 0) {
        const currentStart = queueStart.shift();
        const currentEnd = queueEnd.shift();
  
        if (visitedEnd.has(currentStart) || visitedStart.has(currentEnd)) {
          return true; // There is a path between the two vertices
        }
  
        for (const neighbor of this.adjList.get(currentStart) || []) {
          if (!visitedStart.has(neighbor)) {
            visitedStart.add(neighbor);
            queueStart.push(neighbor);
          }
        }
  
        for (const neighbor of this.adjList.get(currentEnd) || []) {
          if (!visitedEnd.has(neighbor)) {
            visitedEnd.add(neighbor);
            queueEnd.push(neighbor);
          }
        }
      }
  
      return false; // No path found between the two vertices
    }
  }
  
  module.exports = BidirectionalSearch;