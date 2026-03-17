// 算法实现和可视化逻辑

// 工具函数
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 排序算法类
class SortingAlgorithms {
    constructor(visualizer) {
        this.visualizer = visualizer;
        this.isRunning = false;
        this.speed = 500;
    }

    setSpeed(speed) {
        this.speed = 1100 - (speed * 100);
    }

    stop() {
        this.isRunning = false;
    }

    // 冒泡排序
    async bubbleSort(array) {
        this.isRunning = true;
        const n = array.length;
        const bars = this.visualizer.getBars();

        for (let i = 0; i < n - 1 && this.isRunning; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1 && this.isRunning; j++) {
                // 高亮比较的元素
                bars[j].classList.add('comparing');
                bars[j + 1].classList.add('comparing');
                await sleep(this.speed);

                if (array[j] > array[j + 1]) {
                    // 交换
                    bars[j].classList.add('swapping');
                    bars[j + 1].classList.add('swapping');
                    
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    this.visualizer.updateBars(array);
                    
                    await sleep(this.speed);
                    bars[j].classList.remove('swapping');
                    bars[j + 1].classList.remove('swapping');
                    swapped = true;
                }

                bars[j].classList.remove('comparing');
                bars[j + 1].classList.remove('comparing');
            }
            
            // 标记已排序的元素
            bars[n - i - 1].classList.add('sorted');
            
            if (!swapped) break;
        }
        
        // 标记第一个元素为已排序
        if (this.isRunning && bars[0]) {
            bars[0].classList.add('sorted');
        }
        
        this.isRunning = false;
        return array;
    }

    // 快速排序
    async quickSort(array, low = 0, high = array.length - 1) {
        // 只在初始调用时设置isRunning
        if (low === 0 && high === array.length - 1) {
            this.isRunning = true;
        }
        
        if (!this.isRunning) return array;
        
        if (low < high) {
            const pi = await this.partition(array, low, high);
            await this.quickSort(array, low, pi - 1);
            await this.quickSort(array, pi + 1, high);
        }
        
        // 标记所有元素为已排序（当整个排序完成时）
        if (low === 0 && high === array.length - 1) {
            const bars = this.visualizer.getBars();
            for (let i = 0; i < array.length; i++) {
                if (bars[i]) bars[i].classList.add('sorted');
            }
            this.isRunning = false;
        }
        
        return array;
    }

    async partition(array, low, high) {
        const bars = this.visualizer.getBars();
        const pivot = array[high];
        bars[high].classList.add('comparing');
        
        let i = low - 1;
        
        for (let j = low; j < high && this.isRunning; j++) {
            bars[j].classList.add('comparing');
            await sleep(this.speed);
            
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
                this.visualizer.updateBars(array);
                
                bars[i].classList.add('swapping');
                bars[j].classList.add('swapping');
                await sleep(this.speed);
                bars[i].classList.remove('swapping');
                bars[j].classList.remove('swapping');
            }
            
            bars[j].classList.remove('comparing');
        }
        
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        this.visualizer.updateBars(array);
        bars[high].classList.remove('comparing');
        bars[i + 1].classList.add('sorted');
        
        return i + 1;
    }

    // 归并排序
    async mergeSort(array, left = 0, right = array.length - 1) {
        // 只在初始调用时设置isRunning
        if (left === 0 && right === array.length - 1) {
            this.isRunning = true;
        }
        
        if (!this.isRunning) return array;
        
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            await this.mergeSort(array, left, mid);
            await this.mergeSort(array, mid + 1, right);
            await this.merge(array, left, mid, right);
        }
        
        // 标记所有元素为已排序（当整个排序完成时）
        if (left === 0 && right === array.length - 1) {
            const bars = this.visualizer.getBars();
            for (let i = 0; i < array.length; i++) {
                if (bars[i]) bars[i].classList.add('sorted');
            }
            this.isRunning = false;
        }
        
        return array;
    }

    async merge(array, left, mid, right) {
        const bars = this.visualizer.getBars();
        const n1 = mid - left + 1;
        const n2 = right - mid;
        
        const L = array.slice(left, mid + 1);
        const R = array.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2 && this.isRunning) {
            bars[k].classList.add('comparing');
            await sleep(this.speed);
            
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            
            this.visualizer.updateBars(array);
            bars[k].classList.remove('comparing');
            bars[k].classList.add('sorted');
            k++;
        }
        
        while (i < n1 && this.isRunning) {
            array[k] = L[i];
            this.visualizer.updateBars(array);
            bars[k].classList.add('sorted');
            i++;
            k++;
            await sleep(this.speed / 2);
        }
        
        while (j < n2 && this.isRunning) {
            array[k] = R[j];
            this.visualizer.updateBars(array);
            bars[k].classList.add('sorted');
            j++;
            k++;
            await sleep(this.speed / 2);
        }
    }

    // 堆排序
    async heapSort(array) {
        this.isRunning = true;
        const n = array.length;
        
        // 构建最大堆
        for (let i = Math.floor(n / 2) - 1; i >= 0 && this.isRunning; i--) {
            await this.heapify(array, n, i);
        }
        
        // 一个个从堆顶取出元素
        for (let i = n - 1; i > 0 && this.isRunning; i--) {
            const bars = this.visualizer.getBars();
            bars[0].classList.add('swapping');
            bars[i].classList.add('swapping');
            
            [array[0], array[i]] = [array[i], array[0]];
            this.visualizer.updateBars(array);
            await sleep(this.speed);
            
            bars[0].classList.remove('swapping');
            bars[i].classList.remove('swapping');
            bars[i].classList.add('sorted');
            
            await this.heapify(array, i, 0);
        }
        
        if (this.isRunning) {
            const bars = this.visualizer.getBars();
            bars[0].classList.add('sorted');
        }
        
        this.isRunning = false;
        return array;
    }

    async heapify(array, n, i) {
        const bars = this.visualizer.getBars();
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        bars[i].classList.add('comparing');
        await sleep(this.speed / 2);
        
        if (left < n && array[left] > array[largest]) {
            largest = left;
        }
        
        if (right < n && array[right] > array[largest]) {
            largest = right;
        }
        
        if (largest !== i) {
            bars[largest].classList.add('swapping');
            
            [array[i], array[largest]] = [array[largest], array[i]];
            this.visualizer.updateBars(array);
            await sleep(this.speed);
            
            bars[largest].classList.remove('swapping');
            bars[i].classList.remove('comparing');
            
            await this.heapify(array, n, largest);
        } else {
            bars[i].classList.remove('comparing');
        }
    }
}

// 搜索算法类
class SearchAlgorithms {
    constructor(visualizer) {
        this.visualizer = visualizer;
        this.isRunning = false;
        this.speed = 800;
    }

    setSpeed(speed) {
        this.speed = 1500 - (speed * 130);
    }

    stop() {
        this.isRunning = false;
    }

    // 线性搜索
    async linearSearch(array, target) {
        this.isRunning = true;
        const elements = this.visualizer.getSearchElements();
        
        for (let i = 0; i < array.length && this.isRunning; i++) {
            elements[i].classList.add('checking');
            await sleep(this.speed);
            
            if (array[i] === target) {
                elements[i].classList.remove('checking');
                elements[i].classList.add('found');
                this.isRunning = false;
                return i;
            }
            
            elements[i].classList.remove('checking');
            elements[i].classList.add('not-found');
        }
        
        this.isRunning = false;
        return -1;
    }

    // 二分搜索
    async binarySearch(array, target) {
        this.isRunning = true;
        const elements = this.visualizer.getSearchElements();
        let left = 0;
        let right = array.length - 1;
        
        while (left <= right && this.isRunning) {
            const mid = Math.floor((left + right) / 2);
            
            // 高亮当前搜索范围
            for (let i = left; i <= right; i++) {
                elements[i].style.opacity = '1';
            }
            
            elements[mid].classList.add('checking');
            await sleep(this.speed);
            
            if (array[mid] === target) {
                elements[mid].classList.remove('checking');
                elements[mid].classList.add('found');
                this.isRunning = false;
                return mid;
            }
            
            elements[mid].classList.remove('checking');
            elements[mid].classList.add('not-found');
            
            if (array[mid] < target) {
                // 目标在右半部分
                for (let i = left; i <= mid; i++) {
                    elements[i].style.opacity = '0.3';
                }
                left = mid + 1;
            } else {
                // 目标在左半部分
                for (let i = mid; i <= right; i++) {
                    elements[i].style.opacity = '0.3';
                }
                right = mid - 1;
            }
            
            await sleep(this.speed / 2);
        }
        
        this.isRunning = false;
        return -1;
    }
}

// 图算法类
class GraphAlgorithms {
    constructor(visualizer) {
        this.visualizer = visualizer;
        this.isRunning = false;
        this.speed = 600;
    }

    setSpeed(speed) {
        this.speed = 1100 - (speed * 100);
    }

    stop() {
        this.isRunning = false;
    }

    // 广度优先搜索
    async bfs(graph, startNode) {
        this.isRunning = true;
        const visited = new Set();
        const queue = [startNode];
        const nodes = this.visualizer.getGraphNodes();
        const edges = this.visualizer.getGraphEdges();
        
        visited.add(startNode);
        nodes[startNode].classList.add('visited');
        await sleep(this.speed);
        
        while (queue.length > 0 && this.isRunning) {
            const node = queue.shift();
            nodes[node].classList.add('current');
            await sleep(this.speed);
            nodes[node].classList.remove('current');
            
            const neighbors = graph[node];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor) && this.isRunning) {
                    // 高亮边
                    const edge = this.visualizer.getEdge(node, neighbor);
                    if (edge) edge.classList.add('visited');
                    
                    visited.add(neighbor);
                    nodes[neighbor].classList.add('visited');
                    queue.push(neighbor);
                    await sleep(this.speed);
                }
            }
        }
        
        this.isRunning = false;
        return visited;
    }

    // 深度优先搜索
    async dfs(graph, startNode) {
        this.isRunning = true;
        const visited = new Set();
        const nodes = this.visualizer.getGraphNodes();
        
        const dfsRecursive = async (node) => {
            if (!this.isRunning) return;
            
            visited.add(node);
            nodes[node].classList.add('current');
            await sleep(this.speed);
            nodes[node].classList.remove('current');
            nodes[node].classList.add('visited');
            
            const neighbors = graph[node];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor) && this.isRunning) {
                    const edge = this.visualizer.getEdge(node, neighbor);
                    if (edge) edge.classList.add('visited');
                    await dfsRecursive(neighbor);
                }
            }
        };
        
        await dfsRecursive(startNode);
        this.isRunning = false;
        return visited;
    }

    // Dijkstra最短路径
    async dijkstra(graph, startNode, endNode) {
        this.isRunning = true;
        const distances = {};
        const previous = {};
        const unvisited = new Set();
        const nodes = this.visualizer.getGraphNodes();
        
        // 初始化
        for (const node in graph) {
            distances[node] = node === startNode ? 0 : Infinity;
            previous[node] = null;
            unvisited.add(node);
        }
        
        nodes[startNode].classList.add('visited');
        await sleep(this.speed);
        
        while (unvisited.size > 0 && this.isRunning) {
            // 找到距离最小的未访问节点
            let current = null;
            let minDistance = Infinity;
            
            for (const node of unvisited) {
                if (distances[node] < minDistance) {
                    minDistance = distances[node];
                    current = node;
                }
            }
            
            if (current === null || distances[current] === Infinity) break;
            
            unvisited.delete(current);
            nodes[current].classList.add('current');
            await sleep(this.speed);
            
            if (current === endNode) {
                // 找到路径，高亮显示
                let pathNode = endNode;
                while (pathNode !== null) {
                    nodes[pathNode].classList.add('found');
                    pathNode = previous[pathNode];
                    await sleep(this.speed / 2);
                }
                this.isRunning = false;
                return distances[endNode];
            }
            
            nodes[current].classList.remove('current');
            nodes[current].classList.add('visited');
            
            // 更新邻居的距离
            for (const neighbor of graph[current]) {
                if (unvisited.has(neighbor)) {
                    const alt = distances[current] + 1; // 假设权重为1
                    if (alt < distances[neighbor]) {
                        distances[neighbor] = alt;
                        previous[neighbor] = current;
                        const edge = this.visualizer.getEdge(current, neighbor);
                        if (edge) edge.classList.add('visited');
                    }
                }
            }
            
            await sleep(this.speed / 2);
        }
        
        this.isRunning = false;
        return distances[endNode];
    }
}

// 树算法类
class TreeAlgorithms {
    constructor(visualizer) {
        this.visualizer = visualizer;
        this.isRunning = false;
        this.speed = 700;
    }

    setSpeed(speed) {
        this.speed = 1200 - (speed * 110);
    }

    stop() {
        this.isRunning = false;
    }

    // 二叉搜索树插入
    async bstInsert(root, value, isBatch = false) {
        this.isRunning = true;
        
        const insertRecursive = async (node, val, parent = null, isLeft = false) => {
            if (!this.isRunning) return node;
            
            if (node === null) {
                // 创建新节点
                const newNode = { value: val, left: null, right: null };
                this.visualizer.addTreeNode(val, parent, isLeft);
                await sleep(this.speed);
                return newNode;
            }
            
            const nodeEl = this.visualizer.getTreeNode(node.value);
            if (nodeEl) nodeEl.classList.add('checking');
            await sleep(this.speed);
            
            if (val < node.value) {
                if (nodeEl) nodeEl.classList.remove('checking');
                node.left = await insertRecursive(node.left, val, node, true);
            } else if (val > node.value) {
                if (nodeEl) nodeEl.classList.remove('checking');
                node.right = await insertRecursive(node.right, val, node, false);
            }
            
            return node;
        };
        
        const result = await insertRecursive(root, value);
        // 只有在非批量插入模式或手动停止时才设置isRunning为false
        if (!isBatch) {
            this.isRunning = false;
        }
        return result;
    }

    // 批量插入（用于构建树）
    async bstInsertBatch(values) {
        this.isRunning = true;
        let root = null;
        
        for (const value of values) {
            if (!this.isRunning) break;
            root = await this.bstInsert(root, value, true);
        }
        
        this.isRunning = false;
        return root;
    }

    // 二叉搜索树搜索
    async bstSearch(root, target) {
        this.isRunning = true;
        
        const searchRecursive = async (node) => {
            if (!this.isRunning || node === null) {
                this.isRunning = false;
                return null;
            }
            
            const nodeEl = this.visualizer.getTreeNode(node.value);
            if (nodeEl) nodeEl.classList.add('checking');
            await sleep(this.speed);
            
            if (target === node.value) {
                if (nodeEl) {
                    nodeEl.classList.remove('checking');
                    nodeEl.classList.add('found');
                }
                this.isRunning = false;
                return node;
            }
            
            if (nodeEl) nodeEl.classList.remove('checking');
            
            if (target < node.value) {
                return await searchRecursive(node.left);
            } else {
                return await searchRecursive(node.right);
            }
        };
        
        const result = await searchRecursive(root);
        this.isRunning = false;
        return result;
    }

    // 树遍历 - 中序
    async inorderTraversal(root) {
        this.isRunning = true;
        const result = [];
        
        const traverse = async (node) => {
            if (!this.isRunning || node === null) return;
            
            await traverse(node.left);
            
            if (!this.isRunning) return;
            const nodeEl = this.visualizer.getTreeNode(node.value);
            if (nodeEl) {
                nodeEl.classList.add('visited');
                await sleep(this.speed);
            }
            result.push(node.value);
            
            await traverse(node.right);
        };
        
        await traverse(root);
        this.isRunning = false;
        return result;
    }
}

// 导出算法类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SortingAlgorithms,
        SearchAlgorithms,
        GraphAlgorithms,
        TreeAlgorithms,
        sleep
    };
}
