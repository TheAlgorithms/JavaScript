const MathAlgorithms = [
    {
        id: 'sieve-of-eratosthenes',
        name: '埃拉托斯特尼筛法',
        description: '用于找出小于等于 n 的所有素数。通过标记非素数的方式筛选。',
        timeComplexity: 'O(n log log n)',
        spaceComplexity: 'O(n)',
        difficulty: 1,
        init: function() {
            this.n = 30;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <p style="color: var(--text-secondary);">找出小于等于 ${this.n} 的所有素数</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                    ${Array(this.n + 1).fill(0).map((_, i) => `
                        <div class="array-item" id="prime-${i}" style="width: 45px; height: 45px;">
                            ${i}
                        </div>
                    `).join('')}
                </div>
            `;
            
            document.getElementById('prime-0').style.background = 'var(--danger-color)';
            document.getElementById('prime-1').style.background = 'var(--danger-color)';
        },
        run: function() {
            const n = this.n;
            const isPrime = Array(n + 1).fill(true);
            isPrime[0] = isPrime[1] = false;
            
            for (let i = 2; i * i <= n; i++) {
                if (isPrime[i]) {
                    const currentI = i;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById(`prime-${currentI}`).style.background = 'var(--secondary-color)';
                            document.getElementById('step-info').textContent = 
                                `发现素数 ${currentI}，开始筛除其倍数`;
                        }
                    });
                    
                    for (let j = i * i; j <= n; j += i) {
                        if (isPrime[j]) {
                            isPrime[j] = false;
                            const currentJ = j;
                            
                            GameState.animationSteps.push({
                                type: 'custom',
                                action: () => {
                                    document.getElementById(`prime-${currentJ}`).style.background = 'var(--danger-color)';
                                    document.getElementById('step-info').textContent = 
                                        `标记 ${currentJ} 为非素数 (${currentJ} = ${currentI} × ${currentJ / currentI})`;
                                }
                            });
                        }
                    }
                }
            }
            
            const primes = [];
            for (let i = 2; i <= n; i++) {
                if (isPrime[i]) {
                    primes.push(i);
                    const currentI = i;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.getElementById(`prime-${currentI}`).style.background = 'var(--success-color)';
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `素数列表: [${primes.join(', ')}]，共 ${primes.length} 个`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '埃拉托斯特尼筛法的时间复杂度是多少？',
            options: ['O(n)', 'O(n log n)', 'O(n log log n)', 'O(n²)'],
            correct: 2
        }
    },
    {
        id: 'gcd',
        name: '最大公约数 (GCD)',
        description: '使用欧几里得算法计算两个数的最大公约数。',
        timeComplexity: 'O(log(min(a, b)))',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.a = 48;
            this.b = 18;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">计算 GCD(${this.a}, ${this.b})</p>
                    <div id="gcd-steps" style="font-size: 1.2rem; line-height: 2;"></div>
                </div>
            `;
        },
        run: function() {
            let a = this.a;
            let b = this.b;
            let step = 0;
            
            while (b !== 0) {
                const currentA = a;
                const currentB = b;
                const quotient = Math.floor(a / b);
                const remainder = a % b;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const container = document.getElementById('gcd-steps');
                        const div = document.createElement('div');
                        div.innerHTML = `步骤 ${step + 1}: GCD(${currentA}, ${currentB}) = GCD(${currentB}, ${remainder})<br>
                            <span style="color: var(--text-secondary); font-size: 0.9rem;">
                                ${currentA} = ${currentB} × ${quotient} + ${remainder}
                            </span>`;
                        div.style.cssText = 'background: var(--bg-lighter); padding: 15px; border-radius: 8px; margin: 5px;';
                        container.appendChild(div);
                        
                        document.getElementById('step-info').textContent = 
                            `${currentA} ÷ ${currentB} = ${quotient} 余 ${remainder}`;
                    }
                });
                
                a = b;
                b = remainder;
                step++;
            }
            
            const result = a;
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const container = document.getElementById('gcd-steps');
                    const div = document.createElement('div');
                    div.innerHTML = `<strong style="color: var(--success-color);">GCD(${this.a}, ${this.b}) = ${result}</strong>`;
                    div.style.cssText = 'background: var(--success-color); padding: 15px; border-radius: 8px; margin: 5px;';
                    container.appendChild(div);
                    
                    document.getElementById('step-info').textContent = 
                        `最大公约数是 ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '欧几里得算法基于什么原理？',
            options: ['GCD(a, b) = GCD(a-b, b)', 'GCD(a, b) = GCD(b, a mod b)', 'GCD(a, b) = a × b', 'GCD(a, b) = a + b'],
            correct: 1
        }
    },
    {
        id: 'factorial',
        name: '阶乘计算',
        description: '计算 n! = n × (n-1) × ... × 2 × 1。展示递归和迭代两种方式。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n) 递归 / O(1) 迭代',
        difficulty: 1,
        init: function() {
            this.n = 7;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">计算 ${this.n}!</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                        ${Array(this.n).fill(0).map((_, i) => `
                            <div class="array-item" id="fact-${i + 1}" style="width: 60px;">
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">${i + 1}!</div>
                                <div id="fact-val-${i + 1}">?</div>
                            </div>
                        `).join('')}
                    </div>
                    <div id="fact-result" style="margin-top: 20px; font-size: 1.5rem;"></div>
                </div>
            `;
        },
        run: function() {
            const n = this.n;
            let result = 1;
            
            for (let i = 1; i <= n; i++) {
                result *= i;
                const currentI = i;
                const currentResult = result;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        document.querySelectorAll('.array-item').forEach(item => {
                            item.style.background = '';
                        });
                        
                        const cell = document.getElementById(`fact-${currentI}`);
                        cell.style.background = 'var(--primary-color)';
                        document.getElementById(`fact-val-${currentI}`).textContent = currentResult;
                        
                        const prev = currentI > 1 ? document.getElementById(`fact-${currentI - 1}`) : null;
                        if (prev) prev.style.background = 'var(--secondary-color)';
                        
                        document.getElementById('step-info').textContent = 
                            `${currentI}! = ${currentI} × ${currentResult / currentI} = ${currentResult}`;
                    }
                });
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('fact-result').innerHTML = 
                        `<span style="color: var(--success-color);">${n}! = ${result}</span>`;
                    document.getElementById('step-info').textContent = 
                        `${n}! = ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '阶乘函数增长速度如何？',
            options: ['线性增长', '指数增长', '比指数增长更快', '对数增长'],
            correct: 2
        }
    },
    {
        id: 'power',
        name: '快速幂运算',
        description: '使用二进制分解快速计算 x^n，将时间复杂度从 O(n) 降低到 O(log n)。',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        difficulty: 2,
        init: function() {
            this.base = 2;
            this.exponent = 13;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">计算 ${this.base}^${this.exponent}</p>
                    <div id="power-steps" style="font-size: 1.1rem; line-height: 2;"></div>
                </div>
            `;
        },
        run: function() {
            const base = this.base;
            let exp = this.exponent;
            let result = 1;
            let currentBase = base;
            let step = 0;
            
            const container = document.getElementById('power-steps');
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    container.innerHTML = `<div>初始: result = 1, base = ${base}, exp = ${exp}</div>`;
                    document.getElementById('step-info').textContent = 
                        `开始计算 ${base}^${exp}`;
                }
            });
            
            while (exp > 0) {
                const currentExp = exp;
                const currentResult = result;
                const currentBaseVal = currentBase;
                const isOdd = exp % 2 === 1;
                
                if (isOdd) {
                    result *= currentBase;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.innerHTML = `步骤 ${step + 1}: exp = ${currentExp} (奇数)<br>
                                result = ${currentResult} × ${currentBaseVal} = ${result}`;
                            div.style.cssText = 'background: var(--warning-color); padding: 10px; border-radius: 8px; margin: 5px;';
                            container.appendChild(div);
                            
                            document.getElementById('step-info').textContent = 
                                `exp 是奇数，result = ${result}`;
                        }
                    });
                } else {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.innerHTML = `步骤 ${step + 1}: exp = ${currentExp} (偶数)<br>
                                result 保持不变 = ${currentResult}`;
                            div.style.cssText = 'background: var(--bg-lighter); padding: 10px; border-radius: 8px; margin: 5px;';
                            container.appendChild(div);
                            
                            document.getElementById('step-info').textContent = 
                                `exp 是偶数，result 保持不变`;
                        }
                    });
                }
                
                currentBase *= currentBase;
                exp = Math.floor(exp / 2);
                step++;
                
                if (exp > 0) {
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.innerHTML = `base = ${currentBaseVal}² = ${currentBase}, exp = ${currentExp}/2 = ${exp}`;
                            div.style.cssText = 'color: var(--text-secondary); padding: 5px;';
                            container.appendChild(div);
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const div = document.createElement('div');
                    div.innerHTML = `<strong style="color: var(--success-color);">${base}^${this.exponent} = ${result}</strong>`;
                    div.style.cssText = 'background: var(--success-color); padding: 15px; border-radius: 8px; margin: 10px;';
                    container.appendChild(div);
                    
                    document.getElementById('step-info').textContent = 
                        `结果: ${base}^${this.exponent} = ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '快速幂算法的时间复杂度是多少？',
            options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
            correct: 1
        }
    },
    {
        id: 'collatz',
        name: '考拉兹猜想',
        description: '从任意正整数开始，如果是偶数则除以2，如果是奇数则乘3加1，最终会回到1。',
        timeComplexity: '未知',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.n = 27;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">考拉兹序列 (从 ${this.n} 开始)</p>
                    <div id="collatz-sequence" style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            let n = this.n;
            const sequence = [n];
            const container = document.getElementById('collatz-sequence');
            
            while (n !== 1) {
                const currentN = n;
                
                if (n % 2 === 0) {
                    n = n / 2;
                } else {
                    n = 3 * n + 1;
                }
                
                sequence.push(n);
                
                const nextN = n;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const div = document.createElement('div');
                        div.className = 'array-item';
                        div.style.cssText = 'animation: fadeIn 0.3s;';
                        div.textContent = nextN;
                        
                        if (nextN === 1) {
                            div.style.background = 'var(--success-color)';
                        } else if (nextN % 2 === 0) {
                            div.style.background = 'var(--secondary-color)';
                        } else {
                            div.style.background = 'var(--warning-color)';
                        }
                        
                        container.appendChild(div);
                        
                        const operation = currentN % 2 === 0 
                            ? `${currentN} ÷ 2 = ${nextN}` 
                            : `${currentN} × 3 + 1 = ${nextN}`;
                        document.getElementById('step-info').textContent = operation;
                    }
                });
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `序列长度: ${sequence.length}, 最大值: ${Math.max(...sequence)}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '考拉兹猜想是否已被证明？',
            options: ['已证明成立', '已证明不成立', '尚未被证明', '已被证伪'],
            correct: 2
        }
    }
];
