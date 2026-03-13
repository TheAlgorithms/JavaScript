// WaterJugProblem.js

export function canMeasureWater(jug1Capacity, jug2Capacity, targetAmount) {
  // Input validation
  if (jug1Capacity < 0 || jug2Capacity < 0) {
    throw new Error("Invalid input: capacities must be non-negative.");
  }
  if (targetAmount < 0) {
    throw new Error("Invalid input: target amount must be non-negative.");
  }

  // Base case: If the target amount is greater than the sum of both jugs, it's not possible.
  if (targetAmount > jug1Capacity + jug2Capacity) return false;

  // Use BFS to explore possible states.
  let visited = new Set(); // To keep track of visited states.
  let queue = [[0, 0]]; // Starting with both jugs empty.

  while (queue.length > 0) {
    let [jug1, jug2] = queue.shift();

    // If we've reached the target amount in either jug.
    if (
      jug1 === targetAmount ||
      jug2 === targetAmount ||
      jug1 + jug2 === targetAmount
    ) {
      return true;
    }

    // If this state has been visited, skip it.
    let state = `${jug1},${jug2}`;
    if (visited.has(state)) continue;
    visited.add(state);

    // Add all possible next states to the queue:
    queue.push([jug1Capacity, jug2]); // Fill Jug 1
    queue.push([jug1, jug2Capacity]); // Fill Jug 2
    queue.push([0, jug2]); // Empty Jug 1
    queue.push([jug1, 0]); // Empty Jug 2
    queue.push([
      Math.max(0, jug1 - (jug2Capacity - jug2)),
      Math.min(jug2Capacity, jug1 + jug2),
    ]); // Pour Jug 1 into Jug 2
    queue.push([
      Math.min(jug1Capacity, jug1 + jug2),
      Math.max(0, jug2 - (jug1Capacity - jug1)),
    ]); // Pour Jug 2 into Jug 1
  }

  // If no solution is found
  return false;
}
