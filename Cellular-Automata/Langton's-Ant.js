/**
 * Langton's Ant
 * Langton's Ant is a cellular automaton that involves an "ant" moving on a grid of cells.
 * The ant changes the color of each cell it visits and turns based on the cell's color.
 */

/**
 * Simulates Langton's Ant for a given number of steps.
 * @param {number} steps - The number of steps to simulate.
 */
export function simulateLangtonsAnt(steps) {
    const gridSize = 101; // Grid size (an odd number to have a central cell)
    const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
    let antX = Math.floor(gridSize / 2);
    let antY = Math.floor(gridSize / 2);
    let antDirection = 0; // 0: Up, 1: Right, 2: Down, 3: Left
  
    // Function to turn the ant based on the current direction
    function turnAnt() {
      if (grid[antX][antY]) {
        antDirection = (antDirection + 1) % 4; // Turn right
      } else {
        antDirection = (antDirection + 3) % 4; // Turn left
      }
    }
  
    // Function to move the ant forward
    function moveAnt() {
      if (antDirection === 0) {
        antX = (antX - 1 + gridSize) % gridSize; // Move up
      } else if (antDirection === 1) {
        antY = (antY + 1) % gridSize; // Move right
      } else if (antDirection === 2) {
        antX = (antX + 1) % gridSize; // Move down
      } else if (antDirection === 3) {
        antY = (antY - 1 + gridSize) % gridSize; // Move left
      }
    }
  
    // Function to toggle the color of the cell the ant is on
    function toggleCell() {
      grid[antX][antY] = !grid[antX][antY];
    }
  
    // Simulate Langton's Ant for the specified number of steps
    for (let step = 0; step < steps; step++) {
      toggleCell();
      turnAnt();
      moveAnt();
    }
  
    return grid;
  }
  