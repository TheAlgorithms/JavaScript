function minimax(depth, nodeIndex, isMax, scores, height) {
    if (depth < 0) {
        throw new Error("Depth cannot be less than 0");
    }

    if (scores.length === 0) {
        throw new Error("Scores cannot be empty");
    }

    if (depth === height) {
        return scores[nodeIndex];
    }

    if (isMax) {
        const leftChildIndex = nodeIndex * 2;
        const rightChildIndex = nodeIndex * 2 + 1;
        const leftValue = minimax(depth + 1, leftChildIndex, false, scores, height);
        const rightValue = minimax(depth + 1, rightChildIndex, false, scores, height);
        return Math.max(leftValue, rightValue);
    } else {
        const leftChildIndex = nodeIndex * 2;
        const rightChildIndex = nodeIndex * 2 + 1;
        const leftValue = minimax(depth + 1, leftChildIndex, true, scores, height);
        const rightValue = minimax(depth + 1, rightChildIndex, true, scores, height);
        return Math.min(leftValue, rightValue);
    }
}

const scores = [90, 23, 6, 33, 21, 65, 123, 34423];
const height = Math.log2(scores.length);

console.log("Optimal value: " + minimax(0, 0, true, scores, height));
