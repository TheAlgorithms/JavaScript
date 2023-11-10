function exist(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const visited = new Set();

    function backtrack(row, col, idx) {
        if (idx === word.length) {
            return true;
        }

        if (!(0 <= row && row < ROWS && 0 <= col && col < COLS && !visited.has(`${row},${col}`)
            && idx < word.length && board[row][col] === word[idx])) {
            return false;
        }

        visited.add(`${row},${col}`);
        const res = (backtrack(row - 1, col, idx + 1) || backtrack(row + 1, col, idx + 1) ||
            backtrack(row, col - 1, idx + 1) || backtrack(row, col + 1, idx + 1));
        visited.delete(`${row},${col}`);
        return res;
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (board[row][col] === word[0] && backtrack(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
}

export {exist}