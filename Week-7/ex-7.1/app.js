function maxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

const output1 = maxSubarraySum([1, 2, 3, 4, -10])

const output2 = maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])

console.log("output1=>", output1)
console.log("output2=>", output2)
