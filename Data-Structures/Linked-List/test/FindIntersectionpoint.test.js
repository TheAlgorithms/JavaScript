
import { findIntersection } from '../FindIntersectionPoint';

function runTests() {
    const tests = [
        {
            desc: 'Intersecting lines',
            input: [0, 0, 2, 2, 0, 2, 2, 0],
            expected: { x: 1, y: 1 }
        },
        {
            desc: 'Parallel lines (no intersection)',
            input: [0, 0, 2, 2, 0, 1, 2, 3],
            expected: null
        },
        {
            desc: 'Overlap lines (fully overlapping)',
            input: [0, 0, 2, 2, 1, 1, 3, 3],
            expected: { x: 1, y: 1 }
        },
        {
            desc: 'Non-intersecting lines (far apart)',
            input: [0, 0, 1, 1, 2, 2, 3, 3],
            expected: null
        },
        {
            desc: 'Intersecting at an endpoint',
            input: [0, 0, 2, 2, 2, 0, 0, 2],
            expected: { x: 2, y: 2 }
        }
    ];

    tests.forEach(({ desc, input, expected }, index) => {
        const result = findIntersection(...input);
        const isPassed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${index + 1}: ${desc} - ${isPassed ? 'Passed' : 'Failed'}`);
        if (!isPassed) {
            console.log(`  Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(result)}`);
        }
    });
}

// Run the tests
runTests();
