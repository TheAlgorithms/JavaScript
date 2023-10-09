import BidirectionalSearch from "../BidirectionalSearch";

describe('Bidirectional Search', () => {
  it('should find a path between two connected vertices', () => {
    const graph = new BidirectionalSearch();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');

    expect(graph.bidirectionalSearch('A', 'B')).toBe(true);
  });

  it('should not find a path between two unconnected vertices', () => {
    const graph = new BidirectionalSearch();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');

    expect(graph.bidirectionalSearch('A', 'C')).toBe(false);
  });

  it('should handle missing vertices gracefully', () => {
    const graph = new BidirectionalSearch();
    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.bidirectionalSearch('A', 'C')).toBe(null);
  });
});