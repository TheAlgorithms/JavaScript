/**
 * Langton's Ant
 * Langton's Ant is a cellular automaton that involves an "ant" moving on a grid of cells.
 * The ant changes the color of each cell it visits and turns based on the cell's color.
 */

/**
 * Simulates Langton's Ant for a given number of steps.
 * @param {number} steps - The number of steps to simulate.
 */

export function simulateLangtonAnt(steps, gridSize) {
  // Initialize the grid
  const grid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(false)
  );

  // Initialize the ant's position and direction
  let antX = Math.floor(gridSize / 2);
  let antY = Math.floor(gridSize / 2);
  let antDirection = 'up'; // Initial direction (up, down, left, or right)

  // Define the Langton's Ant rules
  const turnRight = { up: 'right', right: 'down', down: 'left', left: 'up' };
  const turnLeft = { up: 'left', left: 'down', down: 'right', right: 'up' };

  // Simulate Langton's Ant for the specified number of steps
  for (let step = 0; step < steps; step++) {
    // Check the current cell's color
    const isWhite = grid[antY][antX];

    // Flip the color of the current cell
    grid[antY][antX] = !isWhite;

    // Turn the ant based on the cell's color
    antDirection = isWhite ? turnRight[antDirection] : turnLeft[antDirection];

    // Move the ant forward
    if (antDirection === 'up') {
      antY--;
    } else if (antDirection === 'down') {
      antY++;
    } else if (antDirection === 'left') {
      antX--;
    } else if (antDirection === 'right') {
      antX++;
    }

    // Handle ant's position wrapping around the grid edges
    if (antX < 0) antX = gridSize - 1;
    if (antX >= gridSize) antX = 0;
    if (antY < 0) antY = gridSize - 1;
    if (antY >= gridSize) antY = 0;
  }

  return grid;
}
