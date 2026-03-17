const BacktrackingAlgorithms = [
    {
        id: 'n-queens',
        name: 'N皇后问题',
        description: '在 N×N 的棋盘上放置 N 个皇后，使其不能互相攻击（同行、同列、同对角线不能有两个皇后）。',
        timeComplexity: 'O(N!)',
        spaceComplexity: 'O(N)',
        difficulty: 2,
        init: function() {
            this.n = 6;
            this.board = Array(this.n).fill(null).map(() => Array(this.n).fill(0));
            this.renderBoard();
        },
        renderBoard: function() {
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div class="nqueens-board" style="grid-template-columns: repeat(${this.n}, 45px);">
                    ${this.board.flat().map((_, i) => {
                        const row = Math.floor(i / this.n);
                        const col = i % this.n;
                        const isLight = (row + col) % 2 === 0;
                        return `<div class="queen-cell ${isLight ? 'light' : 'dark'}" id="queen-${row}-${col}"></div>`;
                    }).join('')}
                </div>
            `;
        },
        run: function() {
            const n = this.n;
            const board = Array(n).fill(null).map(() => Array(n).fill(0));
            const solutions = [];
            
            const isSafe = (row, col) => {
                for (let i = 0; i < row; i++) {
                    if (board[i][col]) return false;
                }
                for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                    if (board[i][j]) return false;
                }
                for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
                    if (board[i][j]) return false;
                }
                return true;
            };
            
            const solve = (row) => {
                if (row === n) {
                    solutions.push(board.map(r => [...r]));
                    return true;
                }
                
                for (let col = 0; col < n; col++) {
                    const currentRow = row;
                    const currentCol = col;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.querySelectorAll('.queen-cell').forEach(cell => {
                                cell.classList.remove('has-queen', 'conflict');
                            });
                            for (let r = 0; r < currentRow; r++) {
                                for (let c = 0; c < n; c++) {
                                    if (board[r][c]) {
                                        document.getElementById(`queen-${r}-${c}`).classList.add('has-queen');
                                        document.getElementById(`queen-${r}-${c}`).textContent = '♛';
                                    }
                                }
                            }
                            document.getElementById(`queen-${currentRow}-${currentCol}`).classList.add('has-queen');
                            document.getElementById('step-info').textContent = 
                                `尝试在第${currentRow}行第${currentCol}列放置皇后`;
                        }
                    });
                    
                    if (isSafe(row, col)) {
                        board[row][col] = 1;
                        
                        GameState.animationSteps.push({
                            type: 'custom',
                            action: () => {
                                document.getElementById(`queen-${currentRow}-${currentCol}`).textContent = '♛';
                                document.getElementById('step-info').textContent = 
                                    `在(${currentRow}, ${currentCol})放置皇后成功`;
                            }
                        });
                        
                        if (solve(row + 1)) {
                            return true;
                        }
                        
                        board[row][col] = 0;
                        
                        GameState.animationSteps.push({
                            type: 'custom',
                            action: () => {
                                document.getElementById(`queen-${currentRow}-${currentCol}`).textContent = '';
                                document.getElementById(`queen-${currentRow}-${currentCol}`).classList.add('conflict');
                                document.getElementById('step-info').textContent = 
                                    `回溯: 移除(${currentRow}, ${currentCol})的皇后`;
                            }
                        });
                    } else {
                        GameState.animationSteps.push({
                            type: 'custom',
                            action: () => {
                                document.getElementById(`queen-${currentRow}-${currentCol}`).classList.add('conflict');
                                document.getElementById('step-info').textContent = 
                                    `位置(${currentRow}, ${currentCol})不安全，尝试下一个位置`;
                            }
                        });
                    }
                }
                
                return false;
            };
            
            solve(0);
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `找到解决方案！成功放置${n}个皇后`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: 'N皇后问题的时间复杂度是多少？',
            options: ['O(N²)', 'O(N³)', 'O(N!)', 'O(2^N)'],
            correct: 2
        }
    },
    {
        id: 'sudoku',
        name: '数独求解',
        description: '填充9×9的数独网格，使每行、每列、每个3×3宫格内的数字1-9各出现一次。',
        timeComplexity: 'O(9^(n*n))',
        spaceComplexity: 'O(n²)',
        difficulty: 2,
        init: function() {
            this.board = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ];
            this.renderSudoku();
        },
        renderSudoku: function() {
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div class="sudoku-grid">
                    ${this.board.flat().map((val, i) => {
                        const row = Math.floor(i / 9);
                        const col = i % 9;
                        return `<div class="sudoku-cell ${val ? 'given' : ''}" id="sudoku-${row}-${col}">${val || ''}</div>`;
                    }).join('')}
                </div>
            `;
        },
        run: function() {
            const board = this.board.map(row => [...row]);
            
            const isValid = (row, col, num) => {
                for (let i = 0; i < 9; i++) {
                    if (board[row][i] === num || board[i][col] === num) return false;
                }
                const boxRow = Math.floor(row / 3) * 3;
                const boxCol = Math.floor(col / 3) * 3;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board[boxRow + i][boxCol + j] === num) return false;
                    }
                }
                return true;
            };
            
            const solve = () => {
                for (let row = 0; row < 9; row++) {
                    for (let col = 0; col < 9; col++) {
                        if (board[row][col] === 0) {
                            for (let num = 1; num <= 9; num++) {
                                const currentRow = row;
                                const currentCol = col;
                                const currentNum = num;
                                
                                if (isValid(row, col, num)) {
                                    board[row][col] = num;
                                    
                                    GameState.animationSteps.push({
                                        type: 'custom',
                                        action: () => {
                                            const cell = document.getElementById(`sudoku-${currentRow}-${currentCol}`);
                                            cell.textContent = currentNum;
                                            cell.classList.add('solving');
                                            document.getElementById('step-info').textContent = 
                                                `尝试在(${currentRow}, ${currentCol})放置${currentNum}`;
                                        }
                                    });
                                    
                                    if (solve()) return true;
                                    
                                    board[row][col] = 0;
                                    
                                    GameState.animationSteps.push({
                                        type: 'custom',
                                        action: () => {
                                            const cell = document.getElementById(`sudoku-${currentRow}-${currentCol}`);
                                            cell.textContent = '';
                                            cell.classList.remove('solving');
                                            document.getElementById('step-info').textContent = 
                                                `回溯: 清除(${currentRow}, ${currentCol})`;
                                        }
                                    });
                                }
                            }
                            return false;
                        }
                    }
                }
                return true;
            };
            
            solve();
            
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    const currentRow = row;
                    const currentCol = col;
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const cell = document.getElementById(`sudoku-${currentRow}-${currentCol}`);
                            cell.classList.remove('solving');
                            cell.classList.add('solved');
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = '数独求解完成！';
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '数独求解使用的算法思想是什么？',
            options: ['贪心算法', '动态规划', '回溯算法', '分治算法'],
            correct: 2
        }
    },
    {
        id: 'maze-solver',
        name: '迷宫求解',
        description: '给定一个迷宫，找到从起点到终点的路径。使用回溯算法探索所有可能的路径。',
        timeComplexity: 'O(4^(m×n))',
        spaceComplexity: 'O(m×n)',
        difficulty: 2,
        init: function() {
            this.maze = [
                [0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [1, 1, 1, 1, 1, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 0]
            ];
            this.start = { row: 0, col: 0 };
            this.end = { row: 7, col: 7 };
            this.renderMaze();
        },
        renderMaze: function() {
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div class="maze-grid" style="grid-template-columns: repeat(8, 25px);">
                    ${this.maze.flat().map((val, i) => {
                        const row = Math.floor(i / 8);
                        const col = i % 8;
                        let className = val ? 'wall' : '';
                        if (row === this.start.row && col === this.start.col) className = 'start';
                        if (row === this.end.row && col === this.end.col) className = 'end';
                        return `<div class="maze-cell ${className}" id="maze-${row}-${col}"></div>`;
                    }).join('')}
                </div>
            `;
        },
        run: function() {
            const maze = this.maze.map(row => [...row]);
            const start = this.start;
            const end = this.end;
            const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            const path = [];
            
            const solve = (row, col) => {
                if (row === end.row && col === end.col) {
                    path.push([row, col]);
                    return true;
                }
                
                if (row < 0 || row >= 8 || col < 0 || col >= 8 || maze[row][col] === 1 || maze[row][col] === 2) {
                    return false;
                }
                
                maze[row][col] = 2;
                path.push([row, col]);
                
                const currentRow = row;
                const currentCol = col;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        if (!(currentRow === start.row && currentCol === start.col)) {
                            const cell = document.getElementById(`maze-${currentRow}-${currentCol}`);
                            cell.classList.add('current');
                            setTimeout(() => cell.classList.replace('current', 'path'), 100);
                        }
                        document.getElementById('step-info').textContent = 
                            `探索位置 (${currentRow}, ${currentCol})`;
                    }
                });
                
                for (const [dr, dc] of directions) {
                    if (solve(row + dr, col + dc)) {
                        return true;
                    }
                }
                
                path.pop();
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const cell = document.getElementById(`maze-${currentRow}-${currentCol}`);
                        cell.classList.remove('path', 'current');
                        document.getElementById('step-info').textContent = 
                            `回溯: 离开位置 (${currentRow}, ${currentCol})`;
                    }
                });
                
                return false;
            };
            
            solve(start.row, start.col);
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `找到路径！路径长度: ${path.length} 步`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '迷宫求解问题中，回溯算法的特点是什么？',
            options: ['找到一条路径就停止', '找到所有可能的路径', '只找最短路径', '随机选择路径'],
            correct: 0
        }
    },
    {
        id: 'generate-parentheses',
        name: '括号生成',
        description: '给定 n 对括号，生成所有有效的括号组合。',
        timeComplexity: 'O(4^n / √n)',
        spaceComplexity: 'O(n)',
        difficulty: 2,
        init: function() {
            this.n = 3;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">生成 ${this.n} 对括号的所有有效组合</p>
                    <div id="parentheses-tree" style="font-family: monospace; font-size: 1.2rem;"></div>
                    <div id="parentheses-results" style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            const n = this.n;
            const results = [];
            let currentStr = '';
            let depth = 0;
            
            const container = document.getElementById('parentheses-tree');
            const resultsContainer = document.getElementById('parentheses-results');
            
            const generate = (open, close, str, level) => {
                if (str.length === n * 2) {
                    results.push(str);
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.style.cssText = 'background: var(--success-color); padding: 10px 15px; border-radius: 8px; animation: fadeIn 0.3s;';
                            div.textContent = str;
                            resultsContainer.appendChild(div);
                            document.getElementById('step-info').textContent = `找到有效组合: ${str}`;
                        }
                    });
                    return;
                }
                
                const currentStr = str;
                
                if (open < n) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            container.innerHTML = `${'  '.repeat(level)}${currentStr}(`;
                            document.getElementById('step-info').textContent = 
                                `添加左括号: ${currentStr}(`;
                        }
                    });
                    generate(open + 1, close, str + '(', level + 1);
                }
                
                if (close < open) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            container.innerHTML = `${'  '.repeat(level)}${currentStr})`;
                            document.getElementById('step-info').textContent = 
                                `添加右括号: ${currentStr})`;
                        }
                    });
                    generate(open, close + 1, str + ')', level + 1);
                }
            };
            
            generate(0, 0, '', 0);
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `共生成 ${results.length} 个有效括号组合: ${results.join(', ')}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '生成有效括号时，什么条件下可以添加右括号？',
            options: ['任何时候都可以', '右括号数量小于n', '右括号数量小于左括号数量', '左括号数量大于0'],
            correct: 2
        }
    },
    {
        id: 'permutations',
        name: '全排列',
        description: '给定一组不重复的数字，返回所有可能的排列组合。',
        timeComplexity: 'O(n! × n)',
        spaceComplexity: 'O(n)',
        difficulty: 2,
        init: function() {
            this.nums = [1, 2, 3];
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">生成 [${this.nums.join(', ')}] 的所有排列</p>
                    <div id="perm-current" style="font-size: 1.5rem; margin-bottom: 20px;"></div>
                    <div id="perm-results" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            const nums = [...this.nums];
            const results = [];
            const used = Array(nums.length).fill(false);
            const current = [];
            
            const permute = () => {
                if (current.length === nums.length) {
                    results.push([...current]);
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const container = document.getElementById('perm-results');
                            const div = document.createElement('div');
                            div.style.cssText = 'background: var(--success-color); padding: 10px 15px; border-radius: 8px;';
                            div.textContent = `[${current.join(', ')}]`;
                            container.appendChild(div);
                            document.getElementById('step-info').textContent = `找到排列: [${current.join(', ')}]`;
                        }
                    });
                    return;
                }
                
                for (let i = 0; i < nums.length; i++) {
                    if (used[i]) continue;
                    
                    used[i] = true;
                    current.push(nums[i]);
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('perm-current').textContent = 
                                `当前: [${current.join(', ')}]`;
                            document.getElementById('step-info').textContent = 
                                `选择 ${nums[i]}, 当前排列: [${current.join(', ')}]`;
                        }
                    });
                    
                    permute();
                    
                    current.pop();
                    used[i] = false;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('step-info').textContent = 
                                `回溯: 移除 ${nums[i]}`;
                        }
                    });
                }
            };
            
            permute();
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `共生成 ${results.length} 个排列`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: 'n个不同元素的排列数量是多少？',
            options: ['n', 'n²', 'n!', '2^n'],
            correct: 2
        }
    }
];
