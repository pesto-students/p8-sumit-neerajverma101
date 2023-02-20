const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);
    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return closest;
};

console.log(threeSumClosest([-1, 2, 1, - 4], 1))

//  This function sorts the input array nums in ascending order and sets closest to the sum of the first three elements.
//It then uses a two-pointer approach to find a pair of elements in the rest of the array that sums to the target, updating closest whenever a closer sum is found. 