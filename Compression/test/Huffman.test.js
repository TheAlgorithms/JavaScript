import { buildHuffmanCodes, buildHuffmanTree, encodeHuffman, decodeHuffman, buildFrequencyTable } from '../Huffman';

describe('Huffman Coding', () => {
    let data, freqTable, root;

    beforeEach(() => {
        data = 'this is an example for huffman encoding';
        freqTable = buildFrequencyTable(data);
        root = buildHuffmanTree(freqTable);
    });

    it('should encode and decode a string correctly', () => {
        const encodedData = encodeHuffman(data, freqTable);
        const decodedData = decodeHuffman(encodedData, root);

        expect(decodedData).toEqual(data);
    });

    it('should build Huffman codes correctly', () => {
        const codes = buildHuffmanCodes(root);

        expect(codes['t']).toEqual('01010');
        expect(codes['h']).toEqual('11111');
        expect(codes['i']).toEqual('1001');
        expect(codes['s']).toEqual('0010');
    });


});
