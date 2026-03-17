const SortingAlgorithms = [
    {
        id: 'bubble-sort',
        name: '冒泡排序',
        description: '冒泡排序是一种简单的排序算法，它重复地遍历要排序的列表，比较相邻元素并交换顺序错误的元素。',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            const n = arr.length;
            
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [j, j + 1],
                        values: [arr[j], arr[j + 1]]
                    });
                    
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        GameState.animationSteps.push({
                            type: 'swap',
                            indices: [j, j + 1],
                            values: [arr[j], arr[j + 1]]
                        });
                    }
                }
                GameState.animationSteps.push({
                    type: 'sorted',
                    index: n - i - 1
                });
            }
            GameState.animationSteps.push({
                type: 'sorted',
                index: 0
            });
            
            runAnimation();
        },
        challenge: {
            question: '冒泡排序的时间复杂度是多少？',
            options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(log n)'],
            correct: 1
        }
    },
    {
        id: 'selection-sort',
        name: '选择排序',
        description: '选择排序每次从未排序部分选择最小元素，放到已排序部分的末尾。',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            const n = arr.length;
            
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                
                for (let j = i + 1; j < n; j++) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [minIdx, j],
                        values: [arr[minIdx], arr[j]]
                    });
                    
                    if (arr[j] < arr[minIdx]) {
                        minIdx = j;
                    }
                }
                
                if (minIdx !== i) {
                    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                    GameState.animationSteps.push({
                        type: 'swap',
                        indices: [i, minIdx],
                        values: [arr[i], arr[minIdx]]
                    });
                }
                
                GameState.animationSteps.push({
                    type: 'sorted',
                    index: i
                });
            }
            GameState.animationSteps.push({
                type: 'sorted',
                index: n - 1
            });
            
            runAnimation();
        },
        challenge: {
            question: '选择排序是稳定的排序算法吗？',
            options: ['是', '否', '取决于数据', '不确定'],
            correct: 1
        }
    },
    {
        id: 'insertion-sort',
        name: '插入排序',
        description: '插入排序将数组分为已排序和未排序两部分，每次将未排序部分的第一个元素插入到已排序部分的正确位置。',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            const n = arr.length;
            
            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;
                
                GameState.animationSteps.push({
                    type: 'info',
                    message: `选择元素 ${key} 进行插入`
                });
                
                while (j >= 0 && arr[j] > key) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [j, j + 1],
                        values: [arr[j], key]
                    });
                    
                    arr[j + 1] = arr[j];
                    GameState.animationSteps.push({
                        type: 'swap',
                        indices: [j, j + 1],
                        values: [arr[j], arr[j + 1]]
                    });
                    j--;
                }
                
                arr[j + 1] = key;
                GameState.animationSteps.push({
                    type: 'info',
                    message: `将 ${key} 插入到位置 ${j + 1}`
                });
            }
            
            for (let i = 0; i < n; i++) {
                GameState.animationSteps.push({
                    type: 'sorted',
                    index: i
                });
            }
            
            runAnimation();
        },
        challenge: {
            question: '插入排序在什么情况下性能最好？',
            options: ['数组完全逆序', '数组已经有序', '数组随机分布', '数组很大'],
            correct: 1
        }
    },
    {
        id: 'quick-sort',
        name: '快速排序',
        description: '快速排序使用分治策略，选择一个基准元素，将数组分为小于和大于基准的两部分，然后递归排序。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)',
        difficulty: 2,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            const sortedIndices = new Set();
            
            const quickSort = (low, high) => {
                if (low < high) {
                    const pivotIdx = partition(low, high);
                    quickSort(low, pivotIdx - 1);
                    quickSort(pivotIdx + 1, high);
                } else if (low === high) {
                    sortedIndices.add(low);
                    GameState.animationSteps.push({
                        type: 'sorted',
                        index: low
                    });
                }
            };
            
            const partition = (low, high) => {
                const pivot = arr[high];
                let i = low - 1;
                
                GameState.animationSteps.push({
                    type: 'info',
                    message: `选择基准元素: ${pivot}`
                });
                
                for (let j = low; j < high; j++) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [j, high],
                        values: [arr[j], pivot]
                    });
                    
                    if (arr[j] < pivot) {
                        i++;
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        GameState.animationSteps.push({
                            type: 'swap',
                            indices: [i, j],
                            values: [arr[i], arr[j]]
                        });
                    }
                }
                
                [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
                GameState.animationSteps.push({
                    type: 'swap',
                    indices: [i + 1, high],
                    values: [arr[i + 1], arr[high]]
                });
                
                sortedIndices.add(i + 1);
                GameState.animationSteps.push({
                    type: 'sorted',
                    index: i + 1
                });
                
                return i + 1;
            };
            
            quickSort(0, arr.length - 1);
            runAnimation();
        },
        challenge: {
            question: '快速排序的平均时间复杂度是多少？',
            options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(log n)'],
            correct: 2
        }
    },
    {
        id: 'merge-sort',
        name: '归并排序',
        description: '归并排序将数组分成两半，递归排序后再合并。是一种稳定的排序算法。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)',
        difficulty: 2,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            
            const mergeSort = (left, right) => {
                if (left < right) {
                    const mid = Math.floor((left + right) / 2);
                    mergeSort(left, mid);
                    mergeSort(mid + 1, right);
                    merge(left, mid, right);
                }
            };
            
            const merge = (left, mid, right) => {
                const leftArr = arr.slice(left, mid + 1);
                const rightArr = arr.slice(mid + 1, right + 1);
                
                let i = 0, j = 0, k = left;
                
                while (i < leftArr.length && j < rightArr.length) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [left + i, mid + 1 + j],
                        values: [leftArr[i], rightArr[j]]
                    });
                    
                    if (leftArr[i] <= rightArr[j]) {
                        arr[k] = leftArr[i];
                        i++;
                    } else {
                        arr[k] = rightArr[j];
                        j++;
                    }
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const bars = document.querySelectorAll('.bar');
                            bars[k].style.height = `${arr[k] * 3}px`;
                            bars[k].querySelector('.bar-value').textContent = arr[k];
                        }
                    });
                    k++;
                }
                
                while (i < leftArr.length) {
                    arr[k] = leftArr[i];
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const bars = document.querySelectorAll('.bar');
                            bars[k].style.height = `${arr[k] * 3}px`;
                            bars[k].querySelector('.bar-value').textContent = arr[k];
                        }
                    });
                    i++;
                    k++;
                }
                
                while (j < rightArr.length) {
                    arr[k] = rightArr[j];
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const bars = document.querySelectorAll('.bar');
                            bars[k].style.height = `${arr[k] * 3}px`;
                            bars[k].querySelector('.bar-value').textContent = arr[k];
                        }
                    });
                    j++;
                    k++;
                }
                
                for (let idx = left; idx <= right; idx++) {
                    GameState.animationSteps.push({
                        type: 'sorted',
                        index: idx
                    });
                }
            };
            
            mergeSort(0, arr.length - 1);
            runAnimation();
        },
        challenge: {
            question: '归并排序是稳定的排序算法吗？',
            options: ['是', '否', '取决于实现', '不确定'],
            correct: 0
        }
    },
    {
        id: 'heap-sort',
        name: '堆排序',
        description: '堆排序利用堆这种数据结构来进行排序。首先构建最大堆，然后依次取出堆顶元素。',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)',
        difficulty: 2,
        init: function() {
            this.array = generateRandomArray(15, 50);
            createBars(this.array);
        },
        run: function() {
            const arr = [...this.array];
            const n = arr.length;
            
            const heapify = (size, root) => {
                let largest = root;
                const left = 2 * root + 1;
                const right = 2 * root + 2;
                
                if (left < size) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [largest, left],
                        values: [arr[largest], arr[left]]
                    });
                    if (arr[left] > arr[largest]) {
                        largest = left;
                    }
                }
                
                if (right < size) {
                    GameState.animationSteps.push({
                        type: 'compare',
                        indices: [largest, right],
                        values: [arr[largest], arr[right]]
                    });
                    if (arr[right] > arr[largest]) {
                        largest = right;
                    }
                }
                
                if (largest !== root) {
                    [arr[root], arr[largest]] = [arr[largest], arr[root]];
                    GameState.animationSteps.push({
                        type: 'swap',
                        indices: [root, largest],
                        values: [arr[root], arr[largest]]
                    });
                    heapify(size, largest);
                }
            };
            
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(n, i);
            }
            
            for (let i = n - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                GameState.animationSteps.push({
                    type: 'swap',
                    indices: [0, i],
                    values: [arr[0], arr[i]]
                });
                
                GameState.animationSteps.push({
                    type: 'sorted',
                    index: i
                });
                
                heapify(i, 0);
            }
            
            GameState.animationSteps.push({
                type: 'sorted',
                index: 0
            });
            
            runAnimation();
        },
        challenge: {
            question: '堆排序使用的是什么数据结构？',
            options: ['栈', '队列', '堆', '树'],
            correct: 2
        }
    }
];
