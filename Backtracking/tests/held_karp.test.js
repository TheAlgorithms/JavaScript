

const { heldKarp } = require('../held_karp');

const distanceMatrix1 = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];
console.log("Test Case 1 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix1));

const distanceMatrix2 = [
    [0, 5, 10],
    [5, 0, 15],
    [10, 15, 0]
];
console.log("Test Case 2 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix2));

const distanceMatrix3 = [
    [0, 10, 15, 20, 25],
    [10, 0, 35, 25, 30],
    [15, 35, 0, 30, 20],
    [20, 25, 30, 0, 10],
    [25, 30, 20, 10, 0]
];
console.log("Test Case 3 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix3));

const distanceMatrix4 = [
    [0]
];
console.log("Test Case 4 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix4));

const distanceMatrix5 = [
    [0, 5],
    [5, 0]
];
console.log("Test Case 5 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix5));

const distanceMatrix6 = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
];
console.log("Test Case 6 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix6));

const distanceMatrix7 = [
    [0, 10, 20, 30],
    [5, 0, 15, 25],
    [10, 5, 0, 20],
    [20, 15, 10, 0]
];
console.log("Test Case 7 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix7));

const distanceMatrix8 = [
    [0, 1000, 2000, 3000],
    [1000, 0, 1500, 2500],
    [2000, 1500, 0, 3500],
    [3000, 2500, 3500, 0]
];
console.log("Test Case 8 - Minimum cost of visiting all cities:", heldKarp(distanceMatrix8));
