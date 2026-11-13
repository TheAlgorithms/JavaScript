
// Function to calculate factorial

function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Enter a non-negative integer");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120
