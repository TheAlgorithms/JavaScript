/**
 * Generates all possible subsequences of the given sequence using backtracking.
 * Prints each subsequence as it is generated.
 *
 * @param {any[]} sequence - The input sequence for which subsequences are generated.
 */
function generateAllSubsequences(sequence) {
    createStateSpaceTree(sequence, [], 0);
}

/**
 * Recursively creates a state space tree to iterate through each branch using DFS.
 * Each state has exactly two children.
 * It terminates when it reaches the end of the sequence.
 *
 * @param {any[]} sequence - The input sequence.
 * @param {any[]} currentSubsequence - The current subsequence being built.
 * @param {number} index - The current index in the sequence.
 */
function createStateSpaceTree(sequence, currentSubsequence, index) {
    if (index === sequence.length) {
        console.log(currentSubsequence);
        return;
    }

    // Explore two branches: one without the current element and one with the current element
    createStateSpaceTree(sequence, currentSubsequence, index + 1);
    currentSubsequence.push(sequence[index]);
    createStateSpaceTree(sequence, currentSubsequence, index + 1);
    currentSubsequence.pop();
}

// Example usage:
const seq = [3, 1, 2, 4];
console.log("Subsequences for [3, 1, 2, 4]:");
generateAllSubsequences(seq);

const seq2 = ["A", "B", "C"];
console.log("Subsequences for ['A', 'B', 'C']:");
generateAllSubsequences(seq2);
