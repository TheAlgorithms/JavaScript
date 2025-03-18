class KnapsackSolver {
  constructor(values, weights, capacity) {
    this.values = values;
    this.weights = weights;
    this.capacity = capacity;
    this.maxKnapsackValue = 0;
  }

  knapsackBacktracking() {
    const n = this.values.length;

    function backtrack(index, currentWeight, currentValue) {
      if (index === n || currentWeight === this.capacity) {
        this.maxKnapsackValue = Math.max(this.maxKnapsackValue, currentValue);
        return;
      }

      if (currentWeight + this.weights[index] <= this.capacity) {
        // Include the current item
        backtrack(index + 1, currentWeight + this.weights[index], currentValue + this.values[index]);
      }
      // Exclude the current item
      backtrack(index + 1, currentWeight, currentValue);
    }

    backtrack.call(this, 0, 0, 0);
  }

  solve() {
    this.knapsackBacktracking();
    return this.maxKnapsackValue;
  }
}

// You can create an instance of KnapsackSolver and call the solve method with your own data.
