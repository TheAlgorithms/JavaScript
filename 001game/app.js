const GameState = {
    score: 0,
    currentLevel: 1,
    currentCategory: null,
    currentAlgorithm: null,
    isRunning: false,
    isPaused: false,
    speed: 1,
    completedLevels: new Set(),
    startTime: null,
    animationSteps: [],
    currentStep: 0,
    maxBarValue: 100,
    currentArray: []
};

const speedLevels = [1, 2, 4, 8];
let currentSpeedIndex = 0;

const categories = [
    {
        id: 'sorting',
        name: '排序算法',
        icon: '📊',
        description: '学习各种经典排序算法的工作原理',
        algorithms: []
    },
    {
        id: 'searching',
        name: '搜索算法',
        icon: '🔍',
        description: '掌握二分搜索、线性搜索等搜索技巧',
        algorithms: []
    },
    {
        id: 'graph',
        name: '图算法',
        icon: '🕸️',
        description: '探索BFS、DFS、最短路径等图算法',
        algorithms: []
    },
    {
        id: 'dynamic-programming',
        name: '动态规划',
        icon: '📈',
        description: '理解斐波那契、背包问题等经典DP问题',
        algorithms: []
    },
    {
        id: 'backtracking',
        name: '回溯算法',
        icon: '🔄',
        description: '解决N皇后、数独、迷宫等问题',
        algorithms: []
    },
    {
        id: 'math',
        name: '数学算法',
        icon: '🔢',
        description: '素数筛、最大公约数、阶乘等数学计算',
        algorithms: []
    },
    {
        id: 'cipher',
        name: '密码算法',
        icon: '🔐',
        description: '凯撒密码、摩尔斯电码等加密解密',
        algorithms: []
    }
];

function init() {
    loadProgress();
    initializeAlgorithms();
    renderCategories();
    updateStats();
}

function initializeAlgorithms() {
    if (typeof SortingAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'sorting').algorithms = SortingAlgorithms;
    }
    if (typeof SearchingAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'searching').algorithms = SearchingAlgorithms;
    }
    if (typeof GraphAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'graph').algorithms = GraphAlgorithms;
    }
    if (typeof DPAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'dynamic-programming').algorithms = DPAlgorithms;
    }
    if (typeof BacktrackingAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'backtracking').algorithms = BacktrackingAlgorithms;
    }
    if (typeof MathAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'math').algorithms = MathAlgorithms;
    }
    if (typeof CipherAlgorithms !== 'undefined') {
        categories.find(c => c.id === 'cipher').algorithms = CipherAlgorithms;
    }
}

function loadProgress() {
    const saved = localStorage.getItem('algorithmGameProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        GameState.score = progress.score || 0;
        GameState.completedLevels = new Set(progress.completedLevels || []);
    }
}

function saveProgress() {
    localStorage.setItem('algorithmGameProgress', JSON.stringify({
        score: GameState.score,
        completedLevels: Array.from(GameState.completedLevels)
    }));
}

function updateStats() {
    document.getElementById('score').textContent = GameState.score;
    document.getElementById('level').textContent = GameState.currentLevel;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showHome() {
    showScreen('home-screen');
    renderCategories();
}

function showLevelSelect() {
    if (GameState.currentCategory) {
        showCategory(GameState.currentCategory.id);
    } else {
        showHome();
    }
}

function renderCategories() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = categories.map(category => {
        const completedCount = category.algorithms.filter(a => 
            GameState.completedLevels.has(`${category.id}-${a.id}`)
        ).length;
        const progress = category.algorithms.length > 0 
            ? (completedCount / category.algorithms.length) * 100 
            : 0;
        
        return `
            <div class="category-card" onclick="showCategory('${category.id}')">
                <div class="category-icon">${category.icon}</div>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <div class="category-progress">
                    <div class="category-progress-bar" style="width: ${progress}%"></div>
                </div>
                <small style="color: var(--text-secondary)">${completedCount}/${category.algorithms.length} 已完成</small>
            </div>
        `;
    }).join('');
}

function showCategory(categoryId) {
    GameState.currentCategory = categories.find(c => c.id === categoryId);
    document.getElementById('category-title').textContent = GameState.currentCategory.name;
    renderLevels();
    showScreen('level-select');
}

function renderLevels() {
    const grid = document.getElementById('level-grid');
    const algorithms = GameState.currentCategory.algorithms;
    
    grid.innerHTML = algorithms.map((algo, index) => {
        const levelId = `${GameState.currentCategory.id}-${algo.id}`;
        const isCompleted = GameState.completedLevels.has(levelId);
        const isLocked = index > 0 && !GameState.completedLevels.has(
            `${GameState.currentCategory.id}-${algorithms[index - 1].id}`
        );
        
        return `
            <div class="level-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
                 onclick="${isLocked ? '' : `startGame('${algo.id}')`}">
                <div class="level-number">${index + 1}</div>
                <div class="level-name">${algo.name}</div>
                <div class="level-difficulty">${getDifficultyText(algo.difficulty)}</div>
                ${isCompleted ? '<span style="color: var(--success-color)">✓ 已完成</span>' : ''}
                ${isLocked ? '<span style="color: var(--text-secondary)">🔒 未解锁</span>' : ''}
            </div>
        `;
    }).join('');
}

function getDifficultyText(difficulty) {
    const texts = {
        1: '⭐ 简单',
        2: '⭐⭐ 中等',
        3: '⭐⭐⭐ 困难'
    };
    return texts[difficulty] || '⭐ 简单';
}

function startGame(algorithmId) {
    GameState.currentAlgorithm = GameState.currentCategory.algorithms.find(
        a => a.id === algorithmId
    );
    
    if (!GameState.currentAlgorithm) return;
    
    document.getElementById('game-title').textContent = GameState.currentAlgorithm.name;
    document.getElementById('algorithm-description').textContent = GameState.currentAlgorithm.description;
    document.getElementById('time-complexity').textContent = GameState.currentAlgorithm.timeComplexity;
    document.getElementById('space-complexity').textContent = GameState.currentAlgorithm.spaceComplexity;
    
    GameState.isRunning = false;
    GameState.isPaused = false;
    GameState.currentStep = 0;
    GameState.animationSteps = [];
    
    document.getElementById('start-btn').textContent = '开始';
    document.getElementById('step-info').textContent = '点击"开始"按钮开始可视化';
    document.getElementById('challenge-area').classList.add('hidden');
    
    if (GameState.currentAlgorithm.init) {
        GameState.currentAlgorithm.init();
    }
    
    showScreen('game-screen');
}

function startVisualization() {
    if (GameState.isRunning) {
        GameState.isPaused = !GameState.isPaused;
        document.getElementById('start-btn').textContent = GameState.isPaused ? '继续' : '暂停';
        if (!GameState.isPaused) {
            runAnimation();
        }
        return;
    }
    
    GameState.isRunning = true;
    GameState.isPaused = false;
    GameState.startTime = Date.now();
    document.getElementById('start-btn').textContent = '暂停';
    
    if (GameState.currentAlgorithm.run) {
        GameState.currentAlgorithm.run();
    }
}

function resetVisualization() {
    GameState.isRunning = false;
    GameState.isPaused = false;
    GameState.currentStep = 0;
    document.getElementById('start-btn').textContent = '开始';
    document.getElementById('step-info').textContent = '点击"开始"按钮开始可视化';
    document.getElementById('challenge-area').classList.add('hidden');
    
    if (GameState.currentAlgorithm.init) {
        GameState.currentAlgorithm.init();
    }
}

function toggleSpeed() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speedLevels.length;
    GameState.speed = speedLevels[currentSpeedIndex];
    document.getElementById('speed-btn').textContent = `速度: ${GameState.speed}x`;
}

async function runAnimation() {
    while (GameState.isRunning && !GameState.isPaused && GameState.currentStep < GameState.animationSteps.length) {
        const step = GameState.animationSteps[GameState.currentStep];
        await executeStep(step);
        GameState.currentStep++;
        await sleep(getDelay());
    }
    
    if (GameState.currentStep >= GameState.animationSteps.length && GameState.isRunning) {
        GameState.isRunning = false;
        document.getElementById('start-btn').textContent = '完成';
        showChallenge();
    }
}

function getDelay() {
    return Math.max(50, 500 / GameState.speed);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeStep(step) {
    if (step.type === 'compare') {
        document.getElementById('step-info').textContent = `比较位置 ${step.indices[0]} 和 ${step.indices[1]}: ${step.values[0]} vs ${step.values[1]}`;
        highlightBars(step.indices, 'comparing');
    } else if (step.type === 'swap') {
        document.getElementById('step-info').textContent = `交换位置 ${step.indices[0]} 和 ${step.indices[1]}`;
        highlightBars(step.indices, 'swapping');
        swapBars(step.indices, step.values);
    } else if (step.type === 'sorted') {
        document.getElementById('step-info').textContent = `位置 ${step.index} 已排序`;
        markBarSorted(step.index);
    } else if (step.type === 'info') {
        document.getElementById('step-info').textContent = step.message;
    } else if (step.type === 'highlight') {
        highlightBars(step.indices, step.className || 'current');
    } else if (step.type === 'custom') {
        if (step.action) {
            step.action();
        }
    }
}

function highlightBars(indices, className) {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, i) => {
        bar.classList.remove('comparing', 'swapping', 'current');
        if (indices.includes(i)) {
            bar.classList.add(className);
        }
    });
}

function swapBars(indices, values) {
    const bars = document.querySelectorAll('.bar');
    const maxVal = GameState.maxBarValue;
    indices.forEach((index, i) => {
        bars[index].style.height = `${(values[i] / maxVal) * 250}px`;
        bars[index].querySelector('.bar-value').textContent = values[i];
    });
}

function markBarSorted(index) {
    const bars = document.querySelectorAll('.bar');
    bars[index].classList.add('sorted');
}

function showChallenge() {
    if (!GameState.currentAlgorithm.challenge) {
        showResult(true);
        return;
    }
    
    const challenge = GameState.currentAlgorithm.challenge;
    document.getElementById('challenge-question').textContent = challenge.question;
    
    const optionsContainer = document.getElementById('challenge-options');
    optionsContainer.innerHTML = challenge.options.map((option, index) => `
        <button onclick="checkAnswer(${index}, ${challenge.correct})">${option}</button>
    `).join('');
    
    document.getElementById('challenge-area').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.challenge-options button');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) {
            btn.classList.add('correct');
        } else if (i === selected && i !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    const isCorrect = selected === correct;
    setTimeout(() => showResult(isCorrect), 1000);
}

function showResult(success) {
    const levelId = `${GameState.currentCategory.id}-${GameState.currentAlgorithm.id}`;
    const isNewCompletion = success && !GameState.completedLevels.has(levelId);
    
    if (isNewCompletion) {
        GameState.completedLevels.add(levelId);
        const baseScore = GameState.currentAlgorithm.difficulty * 100;
        const timeBonus = Math.max(0, Math.floor((300000 - (Date.now() - GameState.startTime)) / 1000));
        GameState.score += baseScore + timeBonus;
        saveProgress();
        updateStats();
    }
    
    document.getElementById('result-title').textContent = success ? '🎉 恭喜完成！' : '💪 继续加油！';
    document.getElementById('result-message').textContent = success 
        ? '你成功掌握了这个算法！' 
        : '再试一次，你会做得更好！';
    
    const completionTime = Math.floor((Date.now() - GameState.startTime) / 1000);
    document.getElementById('completion-time').textContent = `${Math.floor(completionTime / 60)}分${completionTime % 60}秒`;
    document.getElementById('earned-score').textContent = success ? `+${GameState.currentAlgorithm.difficulty * 100}` : '0';
    
    const stars = success ? Math.min(3, Math.ceil(3 - (GameState.currentStep / GameState.animationSteps.length) * 2)) : 0;
    const starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = Array(3).fill(0).map((_, i) => 
        `<span class="star ${i < stars ? 'filled' : ''}">★</span>`
    ).join('');
    
    showScreen('result-screen');
}

function retryLevel() {
    startGame(GameState.currentAlgorithm.id);
}

function nextLevel() {
    const algorithms = GameState.currentCategory.algorithms;
    const currentIndex = algorithms.findIndex(a => a.id === GameState.currentAlgorithm.id);
    
    if (currentIndex < algorithms.length - 1) {
        startGame(algorithms[currentIndex + 1].id);
    } else {
        showCategory(GameState.currentCategory.id);
    }
}

function generateRandomArray(size = 20, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
}

function createBars(array) {
    const container = document.getElementById('visualization-area');
    const maxVal = Math.max(...array);
    GameState.maxBarValue = maxVal;
    GameState.currentArray = [...array];
    const barWidth = Math.max(20, Math.floor((container.clientWidth - array.length * 4) / array.length));
    
    container.innerHTML = array.map((val, i) => `
        <div class="bar" style="height: ${(val / maxVal) * 250}px; width: ${barWidth}px;">
            <span class="bar-value">${val}</span>
        </div>
    `).join('');
}

function createArrayDisplay(array, highlightIndices = []) {
    const container = document.getElementById('visualization-area');
    container.innerHTML = `
        <div class="array-container">
            ${array.map((val, i) => `
                <div class="array-item ${highlightIndices.includes(i) ? 'highlight' : ''}">${val}</div>
            `).join('')}
        </div>
    `;
}

function createGrid(rows, cols, grid = null) {
    const container = document.getElementById('visualization-area');
    const displayGrid = grid || Array(rows).fill(null).map(() => Array(cols).fill(0));
    
    container.innerHTML = `
        <div class="grid-container" style="grid-template-columns: repeat(${cols}, 40px);">
            ${displayGrid.flat().map((cell, i) => `
                <div class="grid-cell" data-row="${Math.floor(i / cols)}" data-col="${i % cols}">${cell || ''}</div>
            `).join('')}
        </div>
    `;
    
    return displayGrid;
}

function updateGridCell(row, col, className, value = '') {
    const cell = document.querySelector(`.grid-cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.className = `grid-cell ${className}`;
        cell.textContent = value;
    }
}

document.addEventListener('DOMContentLoaded', init);
