const GraphAlgorithms = [
    {
        id: 'bfs',
        name: '广度优先搜索 (BFS)',
        description: 'BFS 从起点开始，逐层向外扩展搜索，使用队列存储待访问节点。常用于寻找最短路径。',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        difficulty: 2,
        init: function() {
            this.grid = createGrid(10, 10);
            this.start = { row: 0, col: 0 };
            this.end = { row: 9, col: 9 };
            
            for (let i = 0; i < 20; i++) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                if (!(row === 0 && col === 0) && !(row === 9 && col === 9)) {
                    this.grid[row][col] = 1;
                    updateGridCell(row, col, 'wall');
                }
            }
            
            updateGridCell(0, 0, 'start', 'S');
            updateGridCell(9, 9, 'end', 'E');
        },
        run: function() {
            const grid = this.grid.map(row => [...row]);
            const start = this.start;
            const end = this.end;
            const rows = 10, cols = 10;
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            
            const queue = [[start.row, start.col, [[start.row, start.col]]]];
            const visited = new Set();
            visited.add(`${start.row},${start.col}`);
            
            while (queue.length > 0) {
                const [row, col, path] = queue.shift();
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        if (!(row === start.row && col === start.col) && 
                            !(row === end.row && col === end.col)) {
                            updateGridCell(row, col, 'visited');
                        }
                        document.getElementById('step-info').textContent = 
                            `访问节点 (${row}, ${col}), 队列长度: ${queue.length}`;
                    }
                });
                
                if (row === end.row && col === end.col) {
                    for (const [r, c] of path) {
                        GameState.animationSteps.push({
                            type: 'custom',
                            action: () => {
                                if (!(r === start.row && c === start.col) && 
                                    !(r === end.row && c === end.col)) {
                                    updateGridCell(r, c, 'path');
                                }
                            }
                        });
                    }
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('step-info').textContent = 
                                `找到路径！路径长度: ${path.length}`;
                        }
                    });
                    break;
                }
                
                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;
                    const key = `${newRow},${newCol}`;
                    
                    if (newRow >= 0 && newRow < rows && 
                        newCol >= 0 && newCol < cols && 
                        !visited.has(key) && grid[newRow][newCol] !== 1) {
                        visited.add(key);
                        queue.push([newRow, newCol, [...path, [newRow, newCol]]]);
                    }
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: 'BFS 使用什么数据结构来存储待访问节点？',
            options: ['栈', '队列', '堆', '数组'],
            correct: 1
        }
    },
    {
        id: 'dfs',
        name: '深度优先搜索 (DFS)',
        description: 'DFS 从起点开始，沿着一条路径尽可能深入，直到无法继续再回溯。使用栈或递归实现。',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        difficulty: 2,
        init: function() {
            this.grid = createGrid(10, 10);
            this.start = { row: 0, col: 0 };
            this.end = { row: 9, col: 9 };
            
            for (let i = 0; i < 20; i++) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                if (!(row === 0 && col === 0) && !(row === 9 && col === 9)) {
                    this.grid[row][col] = 1;
                    updateGridCell(row, col, 'wall');
                }
            }
            
            updateGridCell(0, 0, 'start', 'S');
            updateGridCell(9, 9, 'end', 'E');
        },
        run: function() {
            const grid = this.grid.map(row => [...row]);
            const start = this.start;
            const end = this.end;
            const rows = 10, cols = 10;
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            
            const stack = [[start.row, start.col, [[start.row, start.col]]]];
            const visited = new Set();
            
            while (stack.length > 0) {
                const [row, col, path] = stack.pop();
                const key = `${row},${col}`;
                
                if (visited.has(key)) continue;
                visited.add(key);
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        if (!(row === start.row && col === start.col) && 
                            !(row === end.row && col === end.col)) {
                            updateGridCell(row, col, 'visited');
                        }
                        document.getElementById('step-info').textContent = 
                            `访问节点 (${row}, ${col}), 栈深度: ${stack.length}`;
                    }
                });
                
                if (row === end.row && col === end.col) {
                    for (const [r, c] of path) {
                        GameState.animationSteps.push({
                            type: 'custom',
                            action: () => {
                                if (!(r === start.row && c === start.col) && 
                                    !(r === end.row && c === end.col)) {
                                    updateGridCell(r, c, 'path');
                                }
                            }
                        });
                    }
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('step-info').textContent = 
                                `找到路径！路径长度: ${path.length}`;
                        }
                    });
                    break;
                }
                
                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;
                    const newKey = `${newRow},${newCol}`;
                    
                    if (newRow >= 0 && newRow < rows && 
                        newCol >= 0 && newCol < cols && 
                        !visited.has(newKey) && grid[newRow][newCol] !== 1) {
                        stack.push([newRow, newCol, [...path, [newRow, newCol]]]);
                    }
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: 'DFS 使用什么数据结构来存储待访问节点？',
            options: ['栈', '队列', '堆', '链表'],
            correct: 0
        }
    },
    {
        id: 'dijkstra',
        name: 'Dijkstra 最短路径',
        description: 'Dijkstra 算法用于计算带权图中单源最短路径，使用优先队列选择当前最短路径节点。',
        timeComplexity: 'O((V + E) log V)',
        spaceComplexity: 'O(V)',
        difficulty: 3,
        init: function() {
            const container = document.getElementById('visualization-area');
            this.nodes = [
                { id: 0, x: 100, y: 100 },
                { id: 1, x: 250, y: 50 },
                { id: 2, x: 400, y: 100 },
                { id: 3, x: 150, y: 200 },
                { id: 4, x: 300, y: 200 },
                { id: 5, x: 450, y: 200 },
                { id: 6, x: 200, y: 300 },
                { id: 7, x: 400, y: 300 }
            ];
            
            this.edges = [
                { from: 0, to: 1, weight: 4 },
                { from: 0, to: 3, weight: 2 },
                { from: 1, to: 2, weight: 3 },
                { from: 1, to: 4, weight: 5 },
                { from: 2, to: 5, weight: 2 },
                { from: 3, to: 4, weight: 1 },
                { from: 3, to: 6, weight: 4 },
                { from: 4, to: 5, weight: 3 },
                { from: 4, to: 6, weight: 2 },
                { from: 5, to: 7, weight: 1 },
                { from: 6, to: 7, weight: 3 }
            ];
            
            container.innerHTML = `
                <div class="graph-container" style="width: 100%; height: 400px; position: relative;">
                    <svg width="100%" height="400" style="position: absolute; top: 0; left: 0;">
                        ${this.edges.map(e => {
                            const from = this.nodes[e.from];
                            const to = this.nodes[e.to];
                            return `
                                <line class="edge-${e.from}-${e.to}" 
                                    x1="${from.x + 25}" y1="${from.y + 25}" 
                                    x2="${to.x + 25}" y2="${to.y + 25}" 
                                    stroke="#475569" stroke-width="2"/>
                                <text x="${(from.x + to.x) / 2 + 25}" 
                                    y="${(from.y + to.y) / 2 + 25}" 
                                    fill="#94a3b8" font-size="12">${e.weight}</text>
                            `;
                        }).join('')}
                    </svg>
                    ${this.nodes.map(n => `
                        <div class="graph-node" id="node-${n.id}" 
                            style="left: ${n.x}px; top: ${n.y}px;">
                            ${n.id}
                        </div>
                    `).join('')}
                </div>
            `;
            
            document.getElementById('step-info').textContent = '从节点 0 开始寻找到其他节点的最短路径';
        },
        run: function() {
            const n = this.nodes.length;
            const adj = Array(n).fill(null).map(() => []);
            
            for (const edge of this.edges) {
                adj[edge.from].push([edge.to, edge.weight]);
                adj[edge.to].push([edge.from, edge.weight]);
            }
            
            const dist = Array(n).fill(Infinity);
            const visited = new Set();
            dist[0] = 0;
            
            for (let i = 0; i < n; i++) {
                let minDist = Infinity;
                let minNode = -1;
                
                for (let j = 0; j < n; j++) {
                    if (!visited.has(j) && dist[j] < minDist) {
                        minDist = dist[j];
                        minNode = j;
                    }
                }
                
                if (minNode === -1) break;
                visited.add(minNode);
                
                const currentDist = dist[minNode];
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const node = document.getElementById(`node-${minNode}`);
                        node.classList.add('visited');
                        document.getElementById('step-info').textContent = 
                            `选择节点 ${minNode}, 当前距离: ${currentDist}`;
                    }
                });
                
                for (const [neighbor, weight] of adj[minNode]) {
                    if (!visited.has(neighbor)) {
                        const newDist = dist[minNode] + weight;
                        if (newDist < dist[neighbor]) {
                            dist[neighbor] = newDist;
                            GameState.animationSteps.push({
                                type: 'custom',
                                action: () => {
                                    document.getElementById('step-info').textContent = 
                                        `更新节点 ${neighbor} 的距离: ${newDist}`;
                                }
                            });
                        }
                    }
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `最短距离: ${dist.map((d, i) => `到${i}: ${d}`).join(', ')}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: 'Dijkstra 算法可以处理负权边吗？',
            options: ['可以', '不可以', '只能处理部分情况', '取决于实现'],
            correct: 1
        }
    },
    {
        id: 'number-of-islands',
        name: '岛屿数量',
        description: '给定一个由 \'1\'（陆地）和 \'0\'（水）组成的二维网格，计算岛屿的数量。岛屿被水包围，由相邻的陆地连接而成。',
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n)',
        difficulty: 2,
        init: function() {
            this.grid = [];
            for (let i = 0; i < 8; i++) {
                this.grid[i] = [];
                for (let j = 0; j < 8; j++) {
                    this.grid[i][j] = Math.random() > 0.5 ? 1 : 0;
                }
            }
            
            createGrid(8, 8, this.grid);
            
            const cells = document.querySelectorAll('.grid-cell');
            cells.forEach((cell, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                if (this.grid[row][col] === 1) {
                    cell.classList.add('wall');
                    cell.textContent = '';
                }
            });
        },
        run: function() {
            const grid = this.grid.map(row => [...row]);
            const rows = 8, cols = 8;
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            let islandCount = 0;
            
            const dfs = (row, col, islandId) => {
                if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) {
                    return;
                }
                
                grid[row][col] = 2;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        updateGridCell(row, col, 'visited', islandId);
                        document.getElementById('step-info').textContent = 
                            `标记岛屿 ${islandId} 的陆地 (${row}, ${col})`;
                    }
                });
                
                for (const [dr, dc] of directions) {
                    dfs(row + dr, col + dc, islandId);
                }
            };
            
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (grid[i][j] === 1) {
                        islandCount++;
                        dfs(i, j, islandCount);
                    }
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `总共发现 ${islandCount} 个岛屿！`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '解决岛屿数量问题通常使用什么算法？',
            options: ['动态规划', '深度优先搜索', '贪心算法', '分治算法'],
            correct: 1
        }
    }
];
