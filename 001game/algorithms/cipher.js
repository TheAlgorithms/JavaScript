const CipherAlgorithms = [
    {
        id: 'caesar-cipher',
        name: '凯撒密码',
        description: '凯撒密码是一种替换加密技术，将字母表中的每个字母替换为固定位置后的字母。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        difficulty: 1,
        init: function() {
            this.text = 'HELLO WORLD';
            this.shift = 3;
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 10px;">原文: ${this.text}</p>
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">位移: ${this.shift}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; margin-bottom: 20px;">
                        ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => `
                            <div class="array-item" style="width: 35px; height: 35px; font-size: 0.9rem;">${c}</div>
                        `).join('')}
                    </div>
                    <div id="cipher-result" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            const text = this.text;
            const shift = this.shift;
            const container = document.getElementById('cipher-result');
            
            let result = '';
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const currentI = i;
                
                if (char === ' ') {
                    result += ' ';
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.className = 'array-item';
                            div.textContent = '␣';
                            div.style.background = 'var(--bg-lighter)';
                            container.appendChild(div);
                            document.getElementById('step-info').textContent = '空格保持不变';
                        }
                    });
                } else {
                    const code = char.charCodeAt(0);
                    const shifted = ((code - 65 + shift) % 26) + 65;
                    const newChar = String.fromCharCode(shifted);
                    result += newChar;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.className = 'array-item';
                            div.innerHTML = `<div style="font-size: 0.7rem; color: var(--text-secondary);">${char}</div>${newChar}`;
                            div.style.background = 'var(--primary-color)';
                            container.appendChild(div);
                            
                            document.getElementById('step-info').textContent = 
                                `${char} → ${newChar} (位移${shift}位)`;
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `加密结果: ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '凯撒密码有多少种可能的密钥？',
            options: ['1种', '25种', '26种', '无限种'],
            correct: 1
        }
    },
    {
        id: 'morse-code',
        name: '摩尔斯电码',
        description: '摩尔斯电码使用点(.)和划(-)的组合来表示字母和数字。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        difficulty: 1,
        init: function() {
            this.text = 'SOS';
            this.morseCode = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
                'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
                'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
                'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
                '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
                '8': '---..', '9': '----.'
            };
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">将 "${this.text}" 转换为摩尔斯电码</p>
                    <div id="morse-result" style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;"></div>
                    <div id="morse-display" style="margin-top: 30px; font-size: 2rem; font-family: monospace;"></div>
                </div>
            `;
        },
        run: function() {
            const text = this.text.toUpperCase();
            const morseCode = this.morseCode;
            const container = document.getElementById('morse-result');
            const display = document.getElementById('morse-display');
            
            let fullMorse = '';
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const code = morseCode[char];
                fullMorse += code + ' ';
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const div = document.createElement('div');
                        div.style.cssText = 'background: var(--bg-lighter); padding: 15px 20px; border-radius: 8px; text-align: center;';
                        div.innerHTML = `
                            <div style="font-size: 1.5rem; color: var(--primary-color);">${char}</div>
                            <div style="font-size: 1.2rem; margin-top: 5px;">${code}</div>
                        `;
                        container.appendChild(div);
                        
                        display.textContent = fullMorse.trim();
                        document.getElementById('step-info').textContent = 
                            `${char} → ${code}`;
                    }
                });
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `摩尔斯电码: ${fullMorse.trim()}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: 'SOS 在摩尔斯电码中是什么？',
            options: ['... --- ...', '.- .- .-', '-.. -.. -..', '. . .'],
            correct: 0
        }
    },
    {
        id: 'vigenere-cipher',
        name: '维吉尼亚密码',
        description: '维吉尼亚密码使用关键词对明文进行多表替换加密，比凯撒密码更安全。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        difficulty: 2,
        init: function() {
            this.text = 'HELLO';
            this.key = 'KEY';
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 10px;">原文: ${this.text}</p>
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">密钥: ${this.key}</p>
                    <div id="vigenere-table" style="overflow-x: auto; margin-bottom: 20px;"></div>
                    <div id="vigenere-result" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
            
            this.renderTable();
        },
        renderTable: function() {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            document.getElementById('vigenere-table').innerHTML = `
                <table style="margin: 0 auto; border-collapse: collapse; font-size: 0.8rem;">
                    <tr>
                        <th style="padding: 5px; background: var(--primary-color);"></th>
                        ${alphabet.split('').map(c => 
                            `<th style="padding: 5px; background: var(--primary-color);">${c}</th>`
                        ).join('')}
                    </tr>
                    ${alphabet.split('').map((row, i) => `
                        <tr>
                            <td style="padding: 5px; background: var(--primary-color);">${row}</td>
                            ${alphabet.split('').map((_, j) => {
                                const shifted = (i + j) % 26;
                                return `<td style="padding: 5px; width: 20px; text-align: center;">${alphabet[shifted]}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </table>
            `;
        },
        run: function() {
            const text = this.text.toUpperCase();
            const key = this.key.toUpperCase();
            const container = document.getElementById('vigenere-result');
            
            let result = '';
            
            for (let i = 0; i < text.length; i++) {
                const textChar = text[i];
                const keyChar = key[i % key.length];
                
                const textCode = textChar.charCodeAt(0) - 65;
                const keyCode = keyChar.charCodeAt(0) - 65;
                const encryptedCode = (textCode + keyCode) % 26;
                const encryptedChar = String.fromCharCode(encryptedCode + 65);
                
                result += encryptedChar;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const div = document.createElement('div');
                        div.style.cssText = 'background: var(--bg-lighter); padding: 15px; border-radius: 8px; text-align: center;';
                        div.innerHTML = `
                            <div style="display: flex; gap: 10px; justify-content: center;">
                                <div>
                                    <div style="font-size: 0.8rem; color: var(--text-secondary);">原文</div>
                                    <div style="font-size: 1.5rem;">${textChar}</div>
                                </div>
                                <div style="font-size: 1.5rem;">+</div>
                                <div>
                                    <div style="font-size: 0.8rem; color: var(--text-secondary);">密钥</div>
                                    <div style="font-size: 1.5rem;">${keyChar}</div>
                                </div>
                                <div style="font-size: 1.5rem;">=</div>
                                <div>
                                    <div style="font-size: 0.8rem; color: var(--text-secondary);">密文</div>
                                    <div style="font-size: 1.5rem; color: var(--success-color);">${encryptedChar}</div>
                                </div>
                            </div>
                        `;
                        container.appendChild(div);
                        
                        document.getElementById('step-info').textContent = 
                            `${textChar}(${textCode}) + ${keyChar}(${keyCode}) = ${encryptedChar}(${encryptedCode})`;
                    }
                });
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `加密结果: ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '维吉尼亚密码相比凯撒密码的优势是什么？',
            options: ['更快', '使用多表替换更安全', '更简单', '不需要密钥'],
            correct: 1
        }
    },
    {
        id: 'rot13',
        name: 'ROT13 加密',
        description: 'ROT13 是凯撒密码的特例，位移固定为13位。加密和解密使用相同的操作。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        difficulty: 1,
        init: function() {
            this.text = 'HELLO WORLD';
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">原文: ${this.text}</p>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <div style="color: var(--text-secondary); margin-bottom: 10px;">原始字母表</div>
                            <div style="display: flex; gap: 2px;">
                                ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => 
                                    `<div class="array-item" style="width: 25px; height: 25px; font-size: 0.7rem;">${c}</div>`
                                ).join('')}
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; font-size: 1.5rem;">⇄</div>
                        <div>
                            <div style="color: var(--text-secondary); margin-bottom: 10px;">ROT13 字母表</div>
                            <div style="display: flex; gap: 2px;">
                                ${'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('').map(c => 
                                    `<div class="array-item" style="width: 25px; height: 25px; font-size: 0.7rem;">${c}</div>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div id="rot13-result" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            const text = this.text;
            const container = document.getElementById('rot13-result');
            
            let result = '';
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                
                if (char === ' ') {
                    result += ' ';
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.className = 'array-item';
                            div.textContent = '␣';
                            div.style.background = 'var(--bg-lighter)';
                            container.appendChild(div);
                            document.getElementById('step-info').textContent = '空格保持不变';
                        }
                    });
                } else {
                    const code = char.charCodeAt(0);
                    const shifted = ((code - 65 + 13) % 26) + 65;
                    const newChar = String.fromCharCode(shifted);
                    result += newChar;
                    
                    GameState.animationSteps.push({
                        type: 'custom',
                        action: () => {
                            const div = document.createElement('div');
                            div.className = 'array-item';
                            div.innerHTML = `<div style="font-size: 0.7rem; color: var(--text-secondary);">${char}</div>${newChar}`;
                            div.style.background = 'var(--primary-color)';
                            container.appendChild(div);
                            
                            document.getElementById('step-info').textContent = 
                                `${char} → ${newChar}`;
                        }
                    });
                }
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `加密结果: ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: 'ROT13 的一个有趣特性是什么？',
            options: ['只能加密不能解密', '加密和解密是同一操作', '需要两个密钥', '只能处理数字'],
            correct: 1
        }
    },
    {
        id: 'atbash-cipher',
        name: '埃特巴什密码',
        description: '埃特巴什密码将字母表反转：A↔Z, B↔Y, C↔X，以此类推。',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        difficulty: 1,
        init: function() {
            this.text = 'HELLO';
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            this.reversed = alphabet.split('').reverse().join('');
            
            const container = document.getElementById('visualization-area');
            container.innerHTML = `
                <div style="text-align: center;">
                    <p style="color: var(--text-secondary); margin-bottom: 20px;">原文: ${this.text}</p>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                        <div>
                            <div style="color: var(--text-secondary); margin-bottom: 10px;">原始</div>
                            <div style="display: flex; gap: 2px;">
                                ${alphabet.split('').map(c => 
                                    `<div class="array-item" style="width: 25px; height: 25px; font-size: 0.7rem;">${c}</div>`
                                ).join('')}
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; font-size: 1.5rem;">⇄</div>
                        <div>
                            <div style="color: var(--text-secondary); margin-bottom: 10px;">反转</div>
                            <div style="display: flex; gap: 2px;">
                                ${this.reversed.split('').map(c => 
                                    `<div class="array-item" style="width: 25px; height: 25px; font-size: 0.7rem;">${c}</div>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div id="atbash-result" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
                </div>
            `;
        },
        run: function() {
            const text = this.text;
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const reversed = this.reversed;
            const container = document.getElementById('atbash-result');
            
            let result = '';
            
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const index = alphabet.indexOf(char);
                const newChar = reversed[index];
                result += newChar;
                
                GameState.animationSteps.push({
                    type: 'custom',
                    action: () => {
                        const div = document.createElement('div');
                        div.className = 'array-item';
                        div.innerHTML = `<div style="font-size: 0.7rem; color: var(--text-secondary);">${char}</div>${newChar}`;
                        div.style.background = 'var(--primary-color)';
                        container.appendChild(div);
                        
                        document.getElementById('step-info').textContent = 
                            `${char} (位置${index}) → ${newChar}`;
                    }
                });
            }
            
            GameState.animationSteps.push({
                type: 'custom',
                action: () => {
                    document.getElementById('step-info').textContent = 
                        `加密结果: ${result}`;
                }
            });
            
            runAnimation();
        },
        challenge: {
            question: '埃特巴什密码的加密和解密有什么关系？',
            options: ['完全不同的操作', '同一操作', '需要密钥', '只能加密'],
            correct: 1
        }
    }
];
