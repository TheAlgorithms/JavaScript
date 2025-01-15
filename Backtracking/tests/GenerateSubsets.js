// we define a generateSubsets function that uses backtracking to generate all possible subsets of a given set (array of numbers). The backtrack function is a recursive function that explores all possible subsets by considering or excluding each element.

import { generateSubsets } from '../GenerateSubsets'

describe('generateSubsets', () => {
    it('should generate all subsets for an array', () => {
        const inputSet = [1, 2, 3];
        const expectedSubsets = [
            [],
            [1],
            [1, 2],
            [1, 2, 3],
            [1, 3],
            [2],
            [2, 3],
            [3]
        ];

        const subsets = generateSubsets(inputSet);

        // Check if the generated subsets are deep equal to the expected subsets
        expect(subsets).to.deep.have.members(expectedSubsets);
    });
});
