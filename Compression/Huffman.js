class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function buildHuffmanTree(freqTable) {
    const nodes = Object.keys(freqTable).map((char) => new HuffmanNode(char, freqTable[char]));

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        const left = nodes.shift();
        const right = nodes.shift();
        const parent = new HuffmanNode(null, left.freq + right.freq);
        parent.left = left;
        parent.right = right;
        nodes.push(parent);
    }

    return nodes[0];
}

function buildHuffmanCodes(root, prefix = '', codes = {}) {
    if (root) {
        if (root.char) {
            codes[root.char] = prefix;
        }
        buildHuffmanCodes(root.left, prefix + '0', codes);
        buildHuffmanCodes(root.right, prefix + '1', codes);
    }
    return codes;
}

function encodeHuffman(data, freqTable) {
    const root = buildHuffmanTree(freqTable);
    const codes = buildHuffmanCodes(root);

    let encodedData = '';
    for (let char of data) {
        encodedData += codes[char];
    }

    return encodedData;
}

function decodeHuffman(encodedData, root) {
    let decodedData = '';
    let currentNode = root;
    for (let bit of encodedData) {
        if (bit === '0') {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }

        if (currentNode.char) {
            decodedData += currentNode.char;
            currentNode = root;
        }
    }

    return decodedData;
}

function buildFrequencyTable(data) {
    const freqTable = {};

    for (const char of data) {
        freqTable[char] = (freqTable[char] || 0) + 1;
    }

    return freqTable;
}

// Example usage
const data = 'this is an example for huffman encoding';
const freqTable = buildFrequencyTable(data);
const root = buildHuffmanTree(freqTable);
const encodedData = encodeHuffman(data, freqTable);
console.log('Encoded Data:', encodedData);

const decodedData = decodeHuffman(encodedData, root);
console.log('Decoded Data:', decodedData);

export { buildHuffmanCodes, buildHuffmanTree, encodeHuffman, decodeHuffman, buildFrequencyTable };
