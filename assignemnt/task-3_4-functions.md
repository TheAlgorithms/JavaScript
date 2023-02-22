# Functions

_Cyclomatic complexity (CC) and lines without comments (NLOC) measured with lizard._

| Function                                                                  | NLOC | CC  | MCC |
| ------------------------------------------------------------------------- | ---- | --- | --- |
| [`caesarCipherEncodeAndDecodeEngine`](#caesarcipherencodeanddecodeengine) | 71   | 26  |     |
| [`newGeneration`](#newgeneration)                                         | 25   | 20  |     |
| [`hexLookup`](#hexlookup)                                                 | 24   | 18  | 18  |
| [`integralEvaluation`](#integralevaluation)                               | 26   | 15  | 12  |
| [`flashSort`](#flashsort)                                                 | 58   | 15  |     |
| [`helper`](#helper)                                                       | 30   | 13  | 14  |
| [`convexHull`](#convexhull)                                               | 37   | 13  |     |
| [`Trie.prototype.remove`](#trieprototyperemove)                           | 23   | 12  | 9   |
| [`_shiftDown`](#_shiftdown)                                               | 39   | 12  |     |
| [`maxProductOfThree`](#maxproductofthree)                                 | 30   | 11  | 13  |

## [`caesarCipherEncodeAndDecodeEngine`](../Ciphers/KeyFinder.js)

### Purpose

Find and retrieve the encryption key automatically

### Reasons of complexity

The function has nested loops and uses an auxiliary function which has a lot more branch statements. Both of them cause a high CC.

### Parameters

str (get the input of encrypted string)

### Return

the key number if founded

## [`newGeneration`](../Cellular-Automata/ConwaysGameOfLife.js)

### Purpose

Generates the next generation for a given state of Conway's Game of Life.

### Reasons of complexity

The function is for generating next generation of Conway's Game of Life. It accepts an array and also returns an array. Besides, there are nested loop and many branch statements within the function, which significantly increases the cyclomatic complexity.

### Parameters

A two dimensional array of integers.

### Return

A two dimensional array of integers representing the next step in the game.

## [`hexLookup`](../Conversions/BinaryToHex.js)

### Purpose

Function for converting Binary to Hex

### Reasons of complexity

The function has a switch statement block for converting binary to hex which creates many branches and thus increases complexity.

The function has an if statement which provides two different paths and then an independent switch case with 16 different cases. This gives us 18 independent paths through the function and an CCN of 18.

### Parameters

- binaryString

### Return

hex number(in array)

## [`integralEvaluation`](../Maths/SimpsonIntegration.js)

### Purpose

Calculate Integration by implementing Simpson Integration method.

### Reasons of complexity

It adds many conditional statements for validity of this function in the beginning, which increases CC of the code.

The function has 6 initial if-statements that have a direct path to an end node. Then comes a “if-if else-else”-statement which can be passed through in three different ways. Lastly we have a single if statement that gives us 2 unique paths but it can be reached in three different ways. We get a total of 6 + 3\*2 = 12 unique paths and a CCN of 12.

### Parameters

- N: the split number
- a,b: endpoints of interval
- func: math function used for integration

### Return

Integration result

## [`flashSort`](../Sorts/FlashSort.js)

### Purpose

Sort the array by flash sort algorithm.

### Reasons of complexity

The function has many loops because there are corresponding steps in the algorithm, so it affects CC.

### Parameters

- arr

### Return

arr(after sorting)

## [`helper`](../String/ScrambleStrings.js)

### Purpose

Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false. This code is for a problem on leetcode(87. Scramble String).

### Reasons of complexity

The function uses three loops and many conditional statements, for dp and also recursion. It makes the function has a high CC.

This function has 6 if-statements. 4 of them have a direct path to an end node while 2 of them do not and can create unique paths. There are 2 unique independent paths up until these two if-statements. There are four unique paths through these two statements. The last two if statements give us 3 paths, but we can reach it from the four different earlier paths. We get a total of 2 + 4\*3 = 14 unique independent paths.

### Parameters

- s1
- s2

### Return

if s2 is a scrambled string of s1

## [`convexHull`](../Geometry/ConvexHullGraham.js)

### Purpose

Given a set of points in the plane. The Convex hull of the set is the smallest convex polygon that contains all the points of it.

### Reasons of complexity

The function implements the Convex Hull algorithm, which needs to find the upper points and lower points of the polygon by calculating orientation of every sequence of three consecutive points. It creates loops and conditional statements and uses 2 auxiliary functions that higher complexity.

### Parameters

- Points(array)

### Return

Convex hull of points(array)

## [`Trie.prototype.remove`](../Data-Structures/Tree/Trie.js)

### Purpose

Trie is a type of k-ary search tree, a tree data structure used for locating specific keys from within a set.

### Reasons of complexity

Such data structure needs many loops and branch statements to ensure the correctness of adding, updating and retrieving, which also lead to the high complexity.

The function has 3 initial if-statements that have one path to an end node and 1 if-statement that has two paths to an end node. Then comes two if-else statements that do not lead directly to end nodes. These two can be passed in 4 different ways which gives us a total of 3 + 2 + 4 = 9 unique independent paths and a CCN of 9.

## [`_shiftDown`](../Graphs/PrimMST.js)

### Purpose

The code implements PrimMST algorithm and creates two classes. One is to implement priority queue, the other is for storing edges and vertex of the graph. The algorithm is intended to generate the lowest weighted tree from a given graph.

### Reasons of complexity

The primMST algorithm has to traverse priority queue and check if endpoint of the current edge is in the result graph, thus it has loops and conditional statements to achieve these goals and results in a high complexity.

## [`maxProductOfThree`](../Dynamic-Programming/MaxProductOfThree.js)

### Purpose

Given an array of numbers, return the maximum product of 3 numbers from the array

### Reasons of complexity

Also, there are many conditional statements in one loop, which is unavoidable for finding 3 largest values and 2 smallest values.

This function has an initial if-statement that catches an error. Then we have three nested if-statements which give four linearly independent paths through the code. A final “if else-if” statement is then passed through which gives another three paths. If we count all the combinations we can move through the two blocks of if-statements and add the first single one we get a cyclomatic complexity of 4\*3 + 1 = 13.

### Parameters

- {number[]} arrayItems

### Return

number
