//https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

// program to solve Rat in a Maze 

//  Maze size of Maze
let N = 4;

// A utility function to print solution matrix sol 
function printSolution(sol) {

    for (let i of sol) {
        console.log(i);
    }

}

//  A utility function to check if x, y is valid 
//  index for N * N Maze 
function isSafe(maze, x, y) {

    if ((x >= 0) && (x < N) && (y >= 0) && (y < N) && (maze[x][y] == 1)) {
        return true;
    }

    return false;
}
/**
   This function solves the Maze problem using Backtracking. 
	It mainly uses solveMazeUtil() to solve the problem. It 
	returns false if no path is possible, otherwise return 
	true && prints the path in the form of 1s.
**/

function solveMaze(maze) {

    //  Creating a (4 * 4) 2-D list 
    let sol = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    if (solveMazeUtil(maze, 0, 0, sol) == false) {
        console.log("Solution doesn't exist");
        return false;
    }

    printSolution(sol)
    return true;
}

// A recursive utility function to solve Maze problem 
function solveMazeUtil(maze, x, y, sol) {

    //if (x, y is goal) return true
    if ((x == N - 1) && (y == N - 1) && (maze[x][y] == 1)) {
        sol[x][y] = 1;
        return true;
    }


    // Check if maze[x][y] is valid 
    if (isSafe(maze, x, y) == true) {
        // mark x, y as part of solution path 
        sol[x][y] = 1;
    } else {
        return false;
    }

    // Move forward in x direction 
    if (solveMazeUtil(maze, x + 1, y, sol) == true) {
        return true;
    }

    // If moving in x direction doesn't give solution 
    // then Move down in y direction 
    if (solveMazeUtil(maze, x, y + 1, sol) == true) {
        return true;
    }

    // If none of the above movements work then 
    // BACKTRACK: unmark x, y as part of solution path 
    sol[x][y] = 0;
    return false;
}


function main() {
    // Initialising the maze 
    let maze = [
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [0, 1, 0, 0],
        [1, 1, 1, 1]
    ];

    solveMaze(maze);
}

main();