const SearchingAlgorithms = [
    {
        id: 'linear-search',
        name: '线性搜索',
        description: '线性搜索从数组的第一个元素开始，逐个检查每个元素，直到找到目标值或遍历完整个数组。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.array = generateRandomArray(10, 50);
            this.target = this.array[Math.floor(Math.random() * this.array.length)];
            createArrayDisplay(this.array);
            document.getElementById('step-info').textContent = `查找目标: ${this.target}`;
        },
        run: function() {
            const arr = this.array;
            const target = this.target;
            
            for (let i = 0; i < arr.length; i++) {
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const items = document.querySelectorAll('.array-item');
                        items.forEach(item => item.classList.remove('highlight', 'searching', 'found'));
                        items[i].classList.add('searching');
                        document.getElementById('step-info').textContent = `检查位置 ${i}: ${arr[i]} ${arr[i] === target ? '= 目标!' : '≠ 目标'}`;
                    }
                });
                
                if (arr[i] === target) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const items = document.querySelectorAll('.array-item');
                            items[i].classList.remove('searching');
                            items[i].classList.add('found');
                            document.getElementById('step-info').textContent = `找到目标 ${target} 在位置 ${i}!`;
                        }
                    });
                    break;
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: '线性搜索最坏情况下需要比较多少次？',
            options: ['1次', 'n/2次', 'n次', 'log n次'],
            correct: 2
        }
    },
    {
        id: 'binary-search',
        name: '二分搜索',
        description: '二分搜索在有序数组中查找目标值，每次将搜索范围缩小一半。',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.array = Array.from({ length: 15 }, (_, i) => (i + 1) * 3);
            this.target = this.array[Math.floor(Math.random() * this.array.length)];
            createArrayDisplay(this.array);
            document.getElementById('step-info').textContent = `查找目标: ${this.target}`;
        },
        run: function() {
            const arr = this.array;
            const target = this.target;
            let left = 0, right = arr.length - 1;
            
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const items = document.querySelectorAll('.array-item');
                        items.forEach(item => item.classList.remove('highlight', 'searching', 'found'));
                        for (let i = left; i <= right; i++) {
                            items[i].classList.add('highlight');
                        }
                        items[mid].classList.remove('highlight');
                        items[mid].classList.add('searching');
                        document.getElementById('step-info').textContent = 
                            `搜索范围: [${left}, ${right}], 中间位置: ${mid}, 值: ${arr[mid]}`;
                    }
                });
                
                if (arr[mid] === target) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const items = document.querySelectorAll('.array-item');
                            items.forEach(item => item.classList.remove('highlight', 'searching'));
                            items[mid].classList.add('found');
                            document.getElementById('step-info').textContent = `找到目标 ${target} 在位置 ${mid}!`;
                        }
                    });
                    break;
                } else if (arr[mid] < target) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('step-info').textContent = 
                                `${arr[mid]} < ${target}, 在右半部分继续搜索`;
                        }
                    });
                    left = mid + 1;
                } else {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById('step-info').textContent = 
                                `${arr[mid]} > ${target}, 在左半部分继续搜索`;
                        }
                    });
                    right = mid - 1;
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: '二分搜索的前提条件是什么？',
            options: ['数组必须有序', '数组长度为偶数', '数组元素唯一', '数组元素为整数'],
            correct: 0
        }
    },
    {
        id: 'jump-search',
        name: '跳跃搜索',
        description: '跳跃搜索在有序数组中按固定步长跳跃查找，找到范围后再进行线性搜索。',
        timeComplexity: 'O(√n)',
        spaceComplexity: 'O(1)',
        difficulty: 2,
        init: function() {
            this.array = Array.from({ length: 20 }, (_, i) => (i + 1) * 2);
            this.target = this.array[Math.floor(Math.random() * this.array.length)];
            createArrayDisplay(this.array);
            document.getElementById('step-info').textContent = `查找目标: ${this.target}`;
        },
        run: function() {
            const arr = this.array;
            const target = this.target;
            const n = arr.length;
            const step = Math.floor(Math.sqrt(n));
            let prev = 0;
            let curr = step;
            
            while (curr < n && arr[curr] < target) {
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const items = document.querySelectorAll('.array-item');
                        items.forEach(item => item.classList.remove('highlight', 'searching'));
                        items[curr].classList.add('searching');
                        document.getElementById('step-info').textContent = 
                            `跳跃到位置 ${curr}: ${arr[curr]} < ${target}, 继续跳跃`;
                    }
                });
                prev = curr;
                curr += step;
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `目标可能在范围 [${prev}, ${Math.min(curr, n - 1)}] 内，开始线性搜索`;
                }
            });
            
            for (let i = prev; i < Math.min(curr, n); i++) {
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const items = document.querySelectorAll('.array-item');
                        items.forEach(item => item.classList.remove('searching'));
                        items[i].classList.add('searching');
                        document.getElementById('step-info').textContent = 
                            `检查位置 ${i}: ${arr[i]}`;
                    }
                });
                
                if (arr[i] === target) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const items = document.querySelectorAll('.array-item');
                            items[i].classList.remove('searching');
                            items[i].classList.add('found');
                            document.getElementById('step-info').textContent = 
                                `找到目标 ${target} 在位置 ${i}!`;
                        }
                    });
                    break;
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: '跳跃搜索的最优步长是多少？',
            options: ['n/2', '√n', 'log n', 'n/4'],
            correct: 1
        }
    },
    {
        id: 'interpolation-search',
        name: '插值搜索',
        description: '插值搜索是二分搜索的改进版，根据目标值的大小估计其位置，适用于均匀分布的数据。',
        timeComplexity: 'O(log log n)',
        spaceComplexity: 'O(1)',
        difficulty: 2,
        init: function() {
            this.array = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);
            this.target = this.array[Math.floor(Math.random() * this.array.length)];
            createArrayDisplay(this.array);
            document.getElementById('step-info').textContent = `查找目标: ${this.target}`;
        },
        run: function() {
            const arr = this.array;
            const target = this.target;
            let left = 0, right = arr.length - 1;
            
            while (left <= right && target >= arr[left] && target <= arr[right]) {
                const pos = left + Math.floor(
                    ((target - arr[left]) * (right - left)) / (arr[right] - arr[left])
                );
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const items = document.querySelectorAll('.array-item');
                        items.forEach(item => item.classList.remove('highlight', 'searching', 'found'));
                        for (let i = left; i <= right; i++) {
                            items[i].classList.add('highlight');
                        }
                        items[pos].classList.remove('highlight');
                        items[pos].classList.add('searching');
                        document.getElementById('step-info').textContent = 
                            `插值估计位置: ${pos}, 值: ${arr[pos]}`;
                    }
                });
                
                if (arr[pos] === target) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const items = document.querySelectorAll('.array-item');
                            items.forEach(item => item.classList.remove('highlight', 'searching'));
                            items[pos].classList.add('found');
                            document.getElementById('step-info').textContent = 
                                `找到目标 ${target} 在位置 ${pos}!`;
                        }
                    });
                    break;
                }
                
                if (arr[pos] < target) {
                    left = pos + 1;
                } else {
                    right = pos - 1;
                }
            }
            
            runAnimation();
        },
        challenge: {
            question: '插值搜索在什么情况下性能最好？',
            options: ['数据随机分布', '数据均匀分布', '数据完全逆序', '数据有重复'],
            correct: 1
        }
    }
];
