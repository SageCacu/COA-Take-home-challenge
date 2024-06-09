// stringTransform.js

/**
 * Function to transform a string based on given rules.
 * @param {string} str - The input string.
 * @returns {string} - The transformed string.
 */
function transformString(str) {
    const length = str.length;

    if (length % 3 === 0 && length % 5 === 0) {
        str = str.split('').reverse().join('');
        str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        str = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return str;
}

// Export the function for use in other modules
module.exports = { transformString };

// Tests
const testCases = [
    { str: 'Hello World', expected: '87 111 114 108 100 32 111 108 108 101 72' },
    { str: 'abcdef', expected: 'fedcba' },
    { str: 'Hello', expected: '72 101 108 108 111' },
    { str: 'Hi', expected: 'Hi' },
];

testCases.forEach(({ str, expected }, index) => {
    const result = transformString(str);
    console.log(`Test Case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});
