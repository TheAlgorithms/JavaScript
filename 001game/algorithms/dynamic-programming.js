const DPAlgorithms = [
    {
        id: 'fibonacci',
        name: '斐波那契数列',
        description: '斐波那契数列定义为 F(n) = F(n-1) + F(n-2)，使用动态规划可以避免重复计算。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n) 或 O(1)',
        difficulty: 1,
        init: function() {
            this.n = 15;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div class="fibonacci-container">
                    ${Array(this.n + 1).fill(0).map((_, i) => `
                        <div class="fib-box" id="fib-${i}">
                            <div class="index">F(${i})</div>
                            <div class="value">?</div>
                        </div>
                    `).join('')}
                </div>
            `;
        },
        run: function() {
            const n = this.n;
            const dp = [0, 1];
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const box = document.getElementById('fib-0');
                    box.classList.add('active');
                    box.querySelector('.value').textContent = '0';
                    document.getElementById('step-info').textContent = 'F(0) = 0';
                }
            });
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const box = document.getElementById('fib-1');
                    box.classList.add('active');
                    box.querySelector('.value').textContent = '1';
                    document.getElementById('step-info').textContent = 'F(1) = 1';
                }
            });
            
            for (let i = 2; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        document.querySelectorAll('.fib-box').forEach(b => b.classList.remove('active'));
                        
                        const prev1 = document.getElementById(`fib-${i - 1}`);
                        const prev2 = document.getElementById(`fib-${i - 2}`);
                        const current = document.getElementById(`fib-${i}`);
                        
                        prev1.style.background = 'var(--warning-color)';
                        prev2.style.background = 'var(--secondary-color)';
                        current.classList.add('active');
                        current.querySelector('.value').textContent = dp[i];
                        
                        document.getElementById('step-info').textContent = 
                            `F(${i}) = F(${i - 1}) + F(${i - 2}) = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}`;
                    }
                });
            }
            
            runAnimation();
        },
        challenge: {
            question: '斐波那契数列的递归解法时间复杂度是多少？',
            options: ['O(n)', 'O(n²)', 'O(2^n)', 'O(log n)'],
            correct: 2
        }
    },
    {
        id: 'climbing-stairs',
        name: '爬楼梯',
        description: '有 n 级楼梯，每次可以爬 1 或 2 级，问有多少种方法爬到顶？',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        difficulty: 1,
        init: function() {
            this.n = 10;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <p style="color: var(--text-secondary);">每次可以爬 1 或 2 级楼梯</p>
                </div>
                <div class="fibonacci-container">
                    ${Array(this.n + 1).fill(0).map((_, i) => `
                        <div class="fib-box" id="stair-${i}">
                            <div class="index">第${i}级</div>
                            <div class="value">?</div>
                        </div>
                    `).join('')}
                </div>
            `;
        },
        run: function() {
            const n = this.n;
            const dp = [1, 1];
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const box = document.getElementById('stair-0');
                    box.classList.add('active');
                    box.querySelector('.value').textContent = '1';
                    document.getElementById('step-info').textContent = '第0级: 1种方法（起点）';
                }
            });
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const box = document.getElementById('stair-1');
                    box.classList.add('active');
                    box.querySelector('.value').textContent = '1';
                    document.getElementById('step-info').textContent = '第1级: 1种方法（爬1级）';
                }
            });
            
            for (let i = 2; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        document.querySelectorAll('.fib-box').forEach(b => b.classList.remove('active'));
                        
                        const prev1 = document.getElementById(`stair-${i - 1}`);
                        const prev2 = document.getElementById(`stair-${i - 2}`);
                        const current = document.getElementById(`stair-${i}`);
                        
                        prev1.style.background = 'var(--warning-color)';
                        prev2.style.background = 'var(--secondary-color)';
                        current.classList.add('active');
                        current.querySelector('.value').textContent = dp[i];
                        
                        document.getElementById('step-info').textContent = 
                            `第${i}级: 从第${i - 1}级爬1级 + 从第${i - 2}级爬2级 = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}种方法`;
                    }
                });
            }
            
            runAnimation();
        },
        challenge: {
            question: '爬楼梯问题与哪个经典问题等价？',
            options: ['背包问题', '斐波那契数列', '最长公共子序列', '编辑距离'],
            correct: 1
        }
    },
    {
        id: 'coin-change',
        name: '零钱兑换',
        description: '给定不同面额的硬币和一个总金额，计算可以凑成总金额的最少硬币数量。',
        timeComplexity: 'O(amount × n)',
        spaceComplexity: 'O(amount)',
        difficulty: 2,
        init: function() {
            this.coins = [1, 2, 5];
            this.amount = 11;
            
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <p style="color: var(--text-secondary);">硬币面额: ${this.coins.join(', ')} | 目标金额: ${this.amount}</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
                    ${Array(this.amount + 1).fill(0).map((_, i) => `
                        <div class="fib-box" id="coin-${i}" style="min-width: 60px;">
                            <div class="index">金额${i}</div>
                            <div class="value">${i === 0 ? '0' : '∞'}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        },
        run: function() {
            const coins = this.coins;
            const amount = this.amount;
            const dp = Array(amount + 1).fill(Infinity);
            dp[0] = 0;
            
            for (let i = 1; i <= amount; i++) {
                for (const coin of coins) {
                    if (coin <= i && dp[i - coin] !== Infinity) {
                        const newCount = dp[i - coin] + 1;
                        if (newCount < dp[i]) {
                            dp[i] = newCount;
                            
                            GameState.animationSteps.push({
                                type: 'custom',
                                action: () => {
                                    document.querySelectorAll('.fib-box').forEach(b => b.classList.remove('active'));
                                    
                                    const current = document.getElementById(`coin-${i}`);
                                    const prev = document.getElementById(`coin-${i - coin}`);
                                    
                                    prev.style.background = 'var(--secondary-color)';
                                    current.classList.add('active');
                                    current.querySelector('.value').textContent = dp[i];
                                    
                                    document.getElementById('step-info').textContent = 
                                        `金额${i}: 使用${coin}面额硬币, 从金额${i - coin}转移, 需要${dp[i]}枚硬币`;
                                }
                            });
                        }
                    }
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    const result = dp[amount] === Infinity ? '无法兑换' : `${dp[amount]}枚硬币`;
                    document.getElementById('step-info').textContent = `最少需要 ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '零钱兑换问题属于哪类动态规划？',
            options: ['线性DP', '区间DP', '背包问题', '树形DP'],
            correct: 2
        }
    },
    {
        id: 'knapsack',
        name: '0-1 背包问题',
        description: '有 n 个物品，每个物品有重量和价值，在背包容量有限的情况下，选择物品使总价值最大。',
        timeComplexity: 'O(n × W)',
        spaceComplexity: 'O(n × W)',
        difficulty: 2,
        init: function() {
            this.items = [
                { weight: 2, value: 3 },
                { weight: 3, value: 4 },
                { weight: 4, value: 5 },
                { weight: 5, value: 8 },
                { weight: 9, value: 10 }
            ];
            this.capacity = 15;
            
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <p style="color: var(--text-secondary);">背包容量: ${this.capacity}</p>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
                        ${this.items.map((item, i) => `
                            <div style="background: var(--bg-lighter); padding: 10px 15px; border-radius: 8px;">
                                <div>物品${i + 1}</div>
                                <div style="font-size: 0.8rem; color: var(--text-secondary);">
                                    重量:${item.weight} 价值:${item.value}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div id="dp-table" style="overflow-x: auto;"></div>
            `;
            
            this.renderDpTable();
        },
        renderDpTable: function() {
            const n = this.items.length;
            const w = this.capacity;
            
            document.getElementById('dp-table').innerHTML = `
                <table style="margin: 0 auto; border-collapse: collapse;">
                    <tr>
                        <th style="padding: 8px; background: var(--bg-lighter);">物品\\容量</th>
                        ${Array(w + 1).fill(0).map((_, i) => 
                            `<th style="padding: 8px; background: var(--bg-lighter);">${i}</th>`
                        ).join('')}
                    </tr>
                    ${Array(n + 1).fill(0).map((_, i) => `
                        <tr>
                            <td style="padding: 8px; background: var(--bg-lighter);">
                                ${i === 0 ? '无' : `物品${i}`}
                            </td>
                            ${Array(w + 1).fill(0).map((_, j) => 
                                `<td id="dp-${i}-${j}" style="padding: 8px; text-align: center; min-width: 40px;">0</td>`
                            ).join('')}
                        </tr>
                    `).join('')}
                </table>
            `;
        },
        run: function() {
            const items = this.items;
            const n = items.length;
            const W = this.capacity;
            const dp = Array(n + 1).fill(null).map(() => Array(W + 1).fill(0));
            
            for (let i = 1; i <= n; i++) {
                const { weight, value } = items[i - 1];
                
                for (let w = 0; w <= W; w++) {
                    if (weight <= w) {
                        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
                    } else {
                        dp[i][w] = dp[i - 1][w];
                    }
                    
                    const currentI = i;
                    const currentW = w;
                    const currentVal = dp[i][w];
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.querySelectorAll('#dp-table td').forEach(td => {
                                td.style.background = '';
                            });
                            
                            const cell = document.getElementById(`dp-${currentI}-${currentW}`);
                            cell.textContent = currentVal;
                            cell.style.background = 'var(--primary-color)';
                            
                            if (weight <= currentW && dp[currentI - 1][currentW - weight] + value === currentVal) {
                                const prevCell = document.getElementById(`dp-${currentI - 1}-${currentW - weight}`);
                                if (prevCell) prevCell.style.background = 'var(--secondary-color)';
                            }
                            
                            document.getElementById('step-info').textContent = 
                                `考虑物品${currentI}(重${weight}, 值${value}), 容量${currentW}: 最大价值${currentVal}`;
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `最大价值: ${dp[n][W]}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '0-1背包问题中，每个物品可以选择几次？',
            options: ['0次', '1次', '无限次', '取决于容量'],
            correct: 1
        }
    },
    {
        id: 'lcs',
        name: '最长公共子序列',
        description: '给定两个字符串，找出它们的最长公共子序列的长度。',
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n)',
        difficulty: 2,
        init: function() {
            this.str1 = 'ABCBDAB';
            this.str2 = 'BDCABA';
            
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <p style="color: var(--text-secondary);">字符串1: ${this.str1}</p>
                    <p style="color: var(--text-secondary);">字符串2: ${this.str2}</p>
                </div>
                <div id="lcs-table" style="overflow-x: auto;"></div>
            `;
            
            this.renderLcsTable();
        },
        renderLcsTable: function() {
            const m = this.str1.length;
            const n = this.str2.length;
            
            document.getElementById('lcs-table').innerHTML = `
                <table style="margin: 0 auto; border-collapse: collapse;">
                    <tr>
                        <th style="padding: 8px; background: var(--bg-lighter);"></th>
                        <th style="padding: 8px; background: var(--bg-lighter);"></th>
                        ${this.str2.split('').map(c => 
                            `<th style="padding: 8px; background: var(--bg-lighter);">${c}</th>`
                        ).join('')}
                    </tr>
                    <tr>
                        <td style="padding: 8px; background: var(--bg-lighter);"></td>
                        ${Array(n + 1).fill(0).map((_, j) => 
                            `<td id="lcs-0-${j}" style="padding: 8px; text-align: center;">0</td>`
                        ).join('')}
                    </tr>
                    ${this.str1.split('').map((c, i) => `
                        <tr>
                            <td style="padding: 8px; background: var(--bg-lighter);">${c}</td>
                            ${Array(n + 1).fill(0).map((_, j) => 
                                `<td id="lcs-${i + 1}-${j}" style="padding: 8px; text-align: center;">0</td>`
                            ).join('')}
                        </tr>
                    `).join('')}
                </table>
            `;
        },
        run: function() {
            const str1 = this.str1;
            const str2 = this.str2;
            const m = str1.length;
            const n = str2.length;
            const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
            
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (str1[i - 1] === str2[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                    }
                    
                    const currentI = i;
                    const currentJ = j;
                    const currentVal = dp[i][j];
                    const match = str1[i - 1] === str2[j - 1];
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            document.querySelectorAll('#lcs-table td').forEach(td => {
                                td.style.background = '';
                            });
                            
                            const cell = document.getElementById(`lcs-${currentI}-${currentJ}`);
                            cell.textContent = currentVal;
                            cell.style.background = match ? 'var(--success-color)' : 'var(--primary-color)';
                            
                            if (match) {
                                const prevCell = document.getElementById(`lcs-${currentI - 1}-${currentJ - 1}`);
                                if (prevCell) prevCell.style.background = 'var(--secondary-color)';
                            }
                            
                            document.getElementById('step-info').textContent = 
                                `比较 '${str1[currentI - 1]}' 和 '${str2[currentJ - 1]}': ${match ? '匹配!' : '不匹配'}, LCS长度: ${currentVal}`;
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `最长公共子序列长度: ${dp[m][n]}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '最长公共子序列与最长公共子串的区别是什么？',
            options: ['完全相同', '子序列可以不连续，子串必须连续', '子序列必须连续，子串可以不连续', '没有区别'],
            correct: 1
        }
    }
];
