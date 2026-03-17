// 游戏主逻辑

// 关卡配置
const LEVELS = [
    {
        id: 1,
        name: '冒泡排序',
        category: '排序算法',
        difficulty: 1,
        algorithm: 'bubbleSort',
        type: 'sorting',
        description: '冒泡排序通过重复遍历列表，比较相邻元素并交换它们的位置来排序。',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        task: '观察冒泡排序如何将最大的元素"冒泡"到数组末尾。'
    },
    {
        id: 2,
        name: '快速排序',
        category: '排序算法',
        difficulty: 2,
        algorithm: 'quickSort',
        type: 'sorting',
        description: '快速排序使用分治法，选择一个基准元素将数组分成两部分。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)',
        task: '观察快速排序如何选择基准并分区。'
    },
    {
        id: 3,
        name: '归并排序',
        category: '排序算法',
        difficulty: 2,
        algorithm: 'mergeSort',
        type: 'sorting',
        description: '归并排序将数组分成两半，递归排序后再合并。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        task: '观察归并排序的分治过程和合并操作。'
    },
    {
        id: 4,
        name: '堆排序',
        category: '排序算法',
        difficulty: 3,
        algorithm: 'heapSort',
        type: 'sorting',
        description: '堆排序利用堆数据结构，先将数组构建成最大堆，然后逐个取出最大元素。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        task: '观察堆排序如何构建堆并提取最大元素。'
    },
    {
        id: 5,
        name: '线性搜索',
        category: '搜索算法',
        difficulty: 1,
        algorithm: 'linearSearch',
        type: 'searching',
        description: '线性搜索逐个检查数组中的每个元素，直到找到目标。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        task: '观察线性搜索如何逐个检查元素。'
    },
    {
        id: 6,
        name: '二分搜索',
        category: '搜索算法',
        difficulty: 2,
        algorithm: 'binarySearch',
        type: 'searching',
        description: '二分搜索在有序数组中通过不断将搜索范围减半来查找目标。',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        task: '观察二分搜索如何快速缩小搜索范围。'
    },
    {
        id: 7,
        name: '广度优先搜索',
        category: '图论算法',
        difficulty: 2,
        algorithm: 'bfs',
        type: 'graph',
        description: 'BFS从起始节点开始，先访问所有相邻节点，再访问下一层节点。',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        task: '观察BFS如何逐层遍历图。'
    },
    {
        id: 8,
        name: '深度优先搜索',
        category: '图论算法',
        difficulty: 2,
        algorithm: 'dfs',
        type: 'graph',
        description: 'DFS从起始节点开始，沿着一条路径尽可能深地探索，然后回溯。',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        task: '观察DFS如何深入探索图的分支。'
    },
    {
        id: 9,
        name: 'Dijkstra最短路径',
        category: '图论算法',
        difficulty: 3,
        algorithm: 'dijkstra',
        type: 'graph',
        description: 'Dijkstra算法找到从起点到其他所有节点的最短路径。',
        timeComplexity: 'O((V + E) log V)',
        spaceComplexity: 'O(V)',
        task: '观察Dijkstra如何找到最短路径。'
    },
    {
        id: 10,
        name: '二叉搜索树插入',
        category: '数据结构',
        difficulty: 2,
        algorithm: 'bstInsert',
        type: 'tree',
        description: 'BST插入操作根据值的大小将新节点放到正确的位置。',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        task: '观察BST如何保持有序性。'
    },
    {
        id: 11,
        name: '二叉搜索树搜索',
        category: '数据结构',
        difficulty: 2,
        algorithm: 'bstSearch',
        type: 'tree',
        description: 'BST搜索利用树的有序性，每次可以排除一半的节点。',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        task: '观察BST搜索如何快速定位节点。'
    },
    {
        id: 12,
        name: '树的中序遍历',
        category: '数据结构',
        difficulty: 2,
        algorithm: 'inorderTraversal',
        type: 'tree',
        description: '中序遍历按照左-根-右的顺序访问BST节点，结果是有序的。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        task: '观察中序遍历如何产生有序序列。'
    }
];

// 可视化器类
class Visualizer {
    constructor(container) {
        this.container = container;
        this.currentData = null;
    }

    clear() {
        this.container.innerHTML = '';
        this.currentData = null;
    }

    // 排序可视化
    createSortVisualization(array) {
        this.clear();
        this.container.className = 'visualization-area';
        this.currentData = [...array];
        
        const maxVal = Math.max(...array);
        
        array.forEach((val, index) => {
            const bar = document.createElement('div');
            bar.className = 'sort-bar';
            bar.style.height = `${(val / maxVal) * 300}px`;
            bar.setAttribute('data-value', val);
            bar.setAttribute('data-index', index);
            this.container.appendChild(bar);
        });
    }

    updateBars(array) {
        const bars = this.container.querySelectorAll('.sort-bar');
        const maxVal = Math.max(...array);
        
        bars.forEach((bar, index) => {
            bar.style.height = `${(array[index] / maxVal) * 300}px`;
            bar.setAttribute('data-value', array[index]);
        });
        
        this.currentData = [...array];
    }

    getBars() {
        return this.container.querySelectorAll('.sort-bar');
    }

    // 搜索可视化
    createSearchVisualization(array) {
        this.clear();
        this.container.className = 'visualization-area';
        this.currentData = [...array];
        
        const searchArray = document.createElement('div');
        searchArray.className = 'search-array';
        
        array.forEach((val, index) => {
            const element = document.createElement('div');
            element.className = 'search-element';
            element.textContent = val;
            element.setAttribute('data-index', index);
            searchArray.appendChild(element);
        });
        
        this.container.appendChild(searchArray);
    }

    getSearchElements() {
        return this.container.querySelectorAll('.search-element');
    }

    // 图可视化
    createGraphVisualization(graphData) {
        this.clear();
        this.container.className = 'visualization-area graph';
        this.currentData = graphData;
        
        const graphContainer = document.createElement('div');
        graphContainer.className = 'graph-container';
        graphContainer.style.width = '100%';
        graphContainer.style.height = '400px';
        
        // 创建节点位置（圆形布局）
        const nodes = Object.keys(graphData);
        const centerX = 350;
        const centerY = 200;
        const radius = 150;
        const nodePositions = {};
        
        nodes.forEach((node, index) => {
            const angle = (index / nodes.length) * 2 * Math.PI - Math.PI / 2;
            nodePositions[node] = {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            };
        });
        
        // 绘制边
        const drawnEdges = new Set();
        nodes.forEach(node => {
            graphData[node].forEach(neighbor => {
                const edgeKey = [node, neighbor].sort().join('-');
                if (!drawnEdges.has(edgeKey)) {
                    drawnEdges.add(edgeKey);
                    
                    const edge = document.createElement('div');
                    edge.className = 'graph-edge';
                    edge.setAttribute('data-from', node);
                    edge.setAttribute('data-to', neighbor);
                    
                    const from = nodePositions[node];
                    const to = nodePositions[neighbor];
                    const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
                    const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;
                    
                    edge.style.width = `${length}px`;
                    edge.style.left = `${from.x}px`;
                    edge.style.top = `${from.y}px`;
                    edge.style.transform = `rotate(${angle}deg)`;
                    
                    graphContainer.appendChild(edge);
                }
            });
        });
        
        // 绘制节点
        nodes.forEach(node => {
            const nodeEl = document.createElement('div');
            nodeEl.className = 'graph-node';
            nodeEl.textContent = node;
            nodeEl.setAttribute('data-node', node);
            nodeEl.style.left = `${nodePositions[node].x - 25}px`;
            nodeEl.style.top = `${nodePositions[node].y - 25}px`;
            graphContainer.appendChild(nodeEl);
        });
        
        this.container.appendChild(graphContainer);
        this.nodePositions = nodePositions;
    }

    getGraphNodes() {
        const nodes = {};
        this.container.querySelectorAll('.graph-node').forEach(node => {
            nodes[node.getAttribute('data-node')] = node;
        });
        return nodes;
    }

    getGraphEdges() {
        return this.container.querySelectorAll('.graph-edge');
    }

    getEdge(from, to) {
        const edge1 = this.container.querySelector(`[data-from="${from}"][data-to="${to}"]`);
        const edge2 = this.container.querySelector(`[data-from="${to}"][data-to="${from}"]`);
        return edge1 || edge2;
    }

    // 树可视化
    createTreeVisualization() {
        this.clear();
        this.container.className = 'visualization-area';
        this.currentData = { root: null, nodes: {} };
        
        const treeContainer = document.createElement('div');
        treeContainer.className = 'tree-container';
        treeContainer.id = 'tree-root';
        this.container.appendChild(treeContainer);
    }

    addTreeNode(value, parent = null, isLeft = false) {
        const treeRoot = document.getElementById('tree-root');
        
        if (parent === null) {
            // 根节点
            treeRoot.innerHTML = '';
            const level = document.createElement('div');
            level.className = 'tree-level';
            
            const node = document.createElement('div');
            node.className = 'tree-node inserting';
            node.textContent = value;
            node.setAttribute('data-value', value);
            
            level.appendChild(node);
            treeRoot.appendChild(level);
        } else {
            // 查找父节点并添加子节点
            const parentValue = parent.value;
            const parentNode = treeRoot.querySelector(`[data-value="${parentValue}"]`);
            
            if (parentNode) {
                let level = parentNode.closest('.tree-level');
                let nextLevel = level.nextElementSibling;
                
                if (!nextLevel) {
                    nextLevel = document.createElement('div');
                    nextLevel.className = 'tree-level';
                    treeRoot.appendChild(nextLevel);
                }
                
                const node = document.createElement('div');
                node.className = 'tree-node inserting';
                node.textContent = value;
                node.setAttribute('data-value', value);
                
                nextLevel.appendChild(node);
                
                setTimeout(() => {
                    node.classList.remove('inserting');
                }, 500);
            }
        }
    }

    getTreeNode(value) {
        return document.querySelector(`.tree-node[data-value="${value}"]`);
    }
}

// 游戏主类
class Game {
    constructor() {
        this.currentLevel = null;
        this.score = 0;
        this.isPlaying = false;
        this.visualizer = null;
        this.algorithmInstance = null;
        this.currentAlgorithm = null;
        this.startTime = null;
        this.completedLevels = new Set();
        
        this.init();
    }

    init() {
        this.visualizer = new Visualizer(document.getElementById('visualization-area'));
        this.generateLevelGrid();
        
        // 加载保存的进度
        const saved = localStorage.getItem('algorithmGameProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.score = progress.score || 0;
            this.completedLevels = new Set(progress.completedLevels || []);
        }
        
        this.updateScore();
    }

    // 屏幕切换
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showStart() {
        this.showScreen('start-screen');
    }

    start() {
        this.showLevels();
    }

    showLevels() {
        this.generateLevelGrid();
        this.showScreen('level-screen');
    }

    showHelp() {
        this.showScreen('help-screen');
    }

    // 生成关卡网格
    generateLevelGrid() {
        const grid = document.getElementById('level-grid');
        grid.innerHTML = '';
        
        LEVELS.forEach((level, index) => {
            const card = document.createElement('div');
            card.className = 'level-card';
            
            // 检查是否锁定
            if (index > 0 && !this.completedLevels.has(LEVELS[index - 1].id)) {
                card.classList.add('locked');
            }
            
            // 检查是否已完成
            if (this.completedLevels.has(level.id)) {
                card.classList.add('completed');
            }
            
            // 生成难度星星
            const stars = '★'.repeat(level.difficulty) + '☆'.repeat(3 - level.difficulty);
            
            card.innerHTML = `
                <div class="level-number">关卡 ${level.id}</div>
                <div class="level-name">${level.name}</div>
                <div class="level-category">${level.category}</div>
                <div class="level-difficulty">
                    ${stars.split('').map(star => 
                        `<span class="difficulty-star ${star === '☆' ? 'empty' : ''}">${star}</span>`
                    ).join('')}
                </div>
            `;
            
            if (!card.classList.contains('locked')) {
                card.onclick = () => this.loadLevel(level);
            }
            
            grid.appendChild(card);
        });
    }

    // 加载关卡
    loadLevel(level) {
        this.currentLevel = level;
        this.isPlaying = false;
        this.startTime = Date.now();
        
        // 更新UI
        document.getElementById('level-title').textContent = `关卡 ${level.id}: ${level.name}`;
        document.getElementById('algorithm-name').textContent = level.name;
        document.getElementById('algorithm-desc').textContent = level.description;
        document.getElementById('time-complexity').textContent = `时间复杂度: ${level.timeComplexity}`;
        document.getElementById('space-complexity').textContent = `空间复杂度: ${level.spaceComplexity}`;
        document.getElementById('game-task').innerHTML = `
            <h4>🎯 任务</h4>
            <p>${level.task}</p>
        `;
        
        // 初始化可视化
        this.visualizer.clear();
        this.initializeAlgorithm(level);
        
        // 生成初始数据
        this.generateNew();
        
        this.showScreen('game-screen');
    }

    // 初始化算法
    initializeAlgorithm(level) {
        // 停止之前的算法
        if (this.algorithmInstance) {
            this.algorithmInstance.stop();
        }
        
        const speed = document.getElementById('speed-slider').value;
        
        switch (level.type) {
            case 'sorting':
                this.algorithmInstance = new SortingAlgorithms(this.visualizer);
                this.currentAlgorithm = () => {
                    const array = this.generateRandomArray(15, 100);
                    this.visualizer.createSortVisualization(array);
                    return this.algorithmInstance[level.algorithm](array);
                };
                break;
                
            case 'searching':
                this.algorithmInstance = new SearchAlgorithms(this.visualizer);
                this.currentAlgorithm = () => {
                    const array = this.generateSortedArray(15, 100);
                    const target = array[Math.floor(Math.random() * array.length)];
                    this.visualizer.createSearchVisualization(array);
                    document.getElementById('game-task').innerHTML += `
                        <p style="margin-top: 10px; color: var(--accent-color);">🔍 搜索目标: <strong>${target}</strong></p>
                    `;
                    return this.algorithmInstance[level.algorithm](array, target);
                };
                break;
                
            case 'graph':
                this.algorithmInstance = new GraphAlgorithms(this.visualizer);
                this.currentAlgorithm = () => {
                    const graph = this.generateRandomGraph();
                    this.visualizer.createGraphVisualization(graph);
                    const startNode = Object.keys(graph)[0];
                    
                    if (level.algorithm === 'dijkstra') {
                        const endNode = Object.keys(graph)[Object.keys(graph).length - 1];
                        return this.algorithmInstance[level.algorithm](graph, startNode, endNode);
                    }
                    return this.algorithmInstance[level.algorithm](graph, startNode);
                };
                break;
                
            case 'tree':
                this.algorithmInstance = new TreeAlgorithms(this.visualizer);
                this.currentAlgorithm = async () => {
                    this.visualizer.createTreeVisualization();
                    const values = this.generateRandomArray(7, 99);
                    let root = null;
                    
                    if (level.algorithm === 'bstInsert') {
                        // 使用批量插入，完成后isRunning会自动设为false
                        root = await this.algorithmInstance.bstInsertBatch(values);
                        return root;
                    } else if (level.algorithm === 'bstSearch') {
                        // 先构建树（使用临时实例，不影响当前算法实例的状态）
                        const buildAlgo = new TreeAlgorithms(this.visualizer);
                        root = await buildAlgo.bstInsertBatch(values);
                        
                        const target = values[Math.floor(Math.random() * values.length)];
                        document.getElementById('game-task').innerHTML += `
                            <p style="margin-top: 10px; color: var(--accent-color);">🔍 搜索目标: <strong>${target}</strong></p>
                        `;
                        return this.algorithmInstance.bstSearch(root, target);
                    } else if (level.algorithm === 'inorderTraversal') {
                        // 先构建树
                        const buildAlgo = new TreeAlgorithms(this.visualizer);
                        root = await buildAlgo.bstInsertBatch(values);
                        return this.algorithmInstance.inorderTraversal(root);
                    }
                };
                break;
        }
        
        this.algorithmInstance.setSpeed(speed);
    }

    // 生成随机数组
    generateRandomArray(size, max) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * max) + 1);
        }
        return array;
    }

    // 生成有序数组
    generateSortedArray(size, max) {
        const array = this.generateRandomArray(size, max);
        return array.sort((a, b) => a - b);
    }

    // 生成随机图
    generateRandomGraph() {
        const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
        const graph = {};
        
        nodes.forEach(node => {
            graph[node] = [];
        });
        
        // 随机添加边
        nodes.forEach((node, i) => {
            const numEdges = Math.floor(Math.random() * 2) + 1;
            for (let j = 0; j < numEdges; j++) {
                const target = nodes[Math.floor(Math.random() * nodes.length)];
                if (target !== node && !graph[node].includes(target)) {
                    graph[node].push(target);
                    if (!graph[target].includes(node)) {
                        graph[target].push(node);
                    }
                }
            }
        });
        
        return graph;
    }

    // 控制方法
    togglePlay() {
        const btn = document.getElementById('btn-play');
        
        if (this.isPlaying) {
            this.isPlaying = false;
            btn.textContent = '▶ 播放';
            if (this.algorithmInstance) {
                this.algorithmInstance.stop();
            }
        } else {
            this.isPlaying = true;
            btn.textContent = '⏸ 暂停';
            this.runAlgorithm();
        }
    }

    async runAlgorithm() {
        if (this.currentAlgorithm) {
            this.algorithmCompleted = false;
            await this.currentAlgorithm();
            
            // 等待算法真正完成（检查isRunning状态）
            if (this.algorithmInstance) {
                await this.waitForAlgorithmComplete();
            }
            
            if (!this.algorithmCompleted) {
                this.algorithmCompleted = true;
                this.isPlaying = false;
                document.getElementById('btn-play').textContent = '▶ 播放';
                this.completeLevel();
            }
        }
    }

    async waitForAlgorithmComplete() {
        // 等待算法实例的isRunning变为false
        return new Promise(resolve => {
            const checkInterval = setInterval(() => {
                // 检查算法实例是否存在且isRunning为false
                if (this.algorithmInstance && !this.algorithmInstance.isRunning) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
            // 超时处理（最多等60秒）
            setTimeout(() => {
                clearInterval(checkInterval);
                resolve();
            }, 60000);
        });
    }

    step() {
        // 单步执行（简化版本，实际实现需要更复杂的逻辑）
        if (!this.isPlaying) {
            this.togglePlay();
        }
    }

    reset() {
        this.isPlaying = false;
        document.getElementById('btn-play').textContent = '▶ 播放';
        if (this.algorithmInstance) {
            this.algorithmInstance.stop();
        }
        this.initializeAlgorithm(this.currentLevel);
    }

    generateNew() {
        // 停止当前算法
        this.isPlaying = false;
        document.getElementById('btn-play').textContent = '▶ 播放';
        if (this.algorithmInstance) {
            this.algorithmInstance.stop();
        }
        // 重新生成数据但不重新初始化整个算法
        if (this.currentAlgorithm && this.currentLevel) {
            const speed = document.getElementById('speed-slider').value;
            
            switch (this.currentLevel.type) {
                case 'sorting':
                    const array = this.generateRandomArray(15, 100);
                    this.visualizer.createSortVisualization(array);
                    this.currentAlgorithm = () => {
                        return this.algorithmInstance[this.currentLevel.algorithm](array);
                    };
                    break;
                    
                case 'searching':
                    const searchArray = this.generateSortedArray(15, 100);
                    const target = searchArray[Math.floor(Math.random() * searchArray.length)];
                    this.visualizer.createSearchVisualization(searchArray);
                    document.getElementById('game-task').innerHTML = `
                        <h4>🎯 任务</h4>
                        <p>${this.currentLevel.task}</p>
                        <p style="margin-top: 10px; color: var(--accent-color);">🔍 搜索目标: <strong>${target}</strong></p>
                    `;
                    this.currentAlgorithm = () => {
                        return this.algorithmInstance[this.currentLevel.algorithm](searchArray, target);
                    };
                    break;
                    
                case 'graph':
                    const graph = this.generateRandomGraph();
                    this.visualizer.createGraphVisualization(graph);
                    const startNode = Object.keys(graph)[0];
                    this.currentAlgorithm = () => {
                        if (this.currentLevel.algorithm === 'dijkstra') {
                            const endNode = Object.keys(graph)[Object.keys(graph).length - 1];
                            return this.algorithmInstance[this.currentLevel.algorithm](graph, startNode, endNode);
                        }
                        return this.algorithmInstance[this.currentLevel.algorithm](graph, startNode);
                    };
                    break;
                    
                case 'tree':
                    this.visualizer.createTreeVisualization();
                    const values = this.generateRandomArray(7, 99);
                    if (this.currentLevel.algorithm === 'bstInsert') {
                        this.currentAlgorithm = async () => {
                            return this.algorithmInstance.bstInsertBatch(values);
                        };
                    } else if (this.currentLevel.algorithm === 'bstSearch') {
                        const buildAlgo = new TreeAlgorithms(this.visualizer);
                        buildAlgo.bstInsertBatch(values).then(root => {
                            const target = values[Math.floor(Math.random() * values.length)];
                            document.getElementById('game-task').innerHTML = `
                                <h4>🎯 任务</h4>
                                <p>${this.currentLevel.task}</p>
                                <p style="margin-top: 10px; color: var(--accent-color);">🔍 搜索目标: <strong>${target}</strong></p>
                            `;
                            this.currentAlgorithm = () => {
                                return this.algorithmInstance.bstSearch(root, target);
                            };
                        });
                    } else if (this.currentLevel.algorithm === 'inorderTraversal') {
                        const buildAlgo = new TreeAlgorithms(this.visualizer);
                        buildAlgo.bstInsertBatch(values).then(root => {
                            this.currentAlgorithm = () => {
                                return this.algorithmInstance.inorderTraversal(root);
                            };
                        });
                    }
                    break;
            }
            
            this.algorithmInstance.setSpeed(speed);
        }
    }

    updateSpeed(value) {
        if (this.algorithmInstance) {
            this.algorithmInstance.setSpeed(parseInt(value));
        }
    }

    // 完成关卡
    completeLevel() {
        if (!this.completedLevels.has(this.currentLevel.id)) {
            this.completedLevels.add(this.currentLevel.id);
            this.score += 100 * this.currentLevel.difficulty;
            this.updateScore();
            this.saveProgress();
        }
        
        const timeElapsed = Math.floor((Date.now() - this.startTime) / 1000);
        document.getElementById('complete-score').textContent = this.score;
        document.getElementById('complete-time').textContent = `${timeElapsed}s`;
        
        setTimeout(() => {
            this.showScreen('complete-screen');
        }, 1000);
    }

    nextLevel() {
        const currentIndex = LEVELS.findIndex(l => l.id === this.currentLevel.id);
        if (currentIndex < LEVELS.length - 1) {
            this.loadLevel(LEVELS[currentIndex + 1]);
        } else {
            this.showLevels();
        }
    }

    restartLevel() {
        this.loadLevel(this.currentLevel);
    }

    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    saveProgress() {
        const progress = {
            score: this.score,
            completedLevels: Array.from(this.completedLevels)
        };
        localStorage.setItem('algorithmGameProgress', JSON.stringify(progress));
    }
}

// 初始化游戏
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new Game();
});
