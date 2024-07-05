import { kannsAlgorithm } from "../KannsAlgorithm";

test('Test Case 1: Graph wihout cycle', () => {
    const graph = [[], [], [3], [1], [0, 1], [0, 2]];

    expect(kannsAlgorithm(graph, 6)).toEqual([4, 5, 0, 2, 3, 1]);
});

test('Test Case 2: Graph with cycle', () => {

    const graph = [[2], [], [3, 5], [0, 1], [0, 2]];
    
    expect(kannsAlgorithm(graph, 6)).toEqual([]);
});
