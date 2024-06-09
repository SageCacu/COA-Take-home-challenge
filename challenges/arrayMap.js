// arrayMap.js

/**
 * Function to determine if there exists a contiguous subarray that sums to the target.
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {boolean} - True if such a subarray exists, otherwise false.
 */
function hasSubarrayWithSum(arr, target) {
    const prefixSum = new Map();
    let currentSum = 0;

    // Initialize with prefix sum 0 at index -1
    prefixSum.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (prefixSum.has(currentSum - target)) {
            return true;
        }

        prefixSum.set(currentSum, i);
    }

    return false;
}

// Export the function for use in other modules
module.exports = { hasSubarrayWithSum };

// Tests
const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 14, expected: true },
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },
    { arr: [1, 2, 3, 4, 5], target: 20, expected: false },
    { arr: [-1, -2, -3, -4, -5], target: -15, expected: true },
];

testCases.forEach(({ arr, target, expected }, index) => {
    const result = hasSubarrayWithSum(arr, target);
    console.log(`Test Case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});
