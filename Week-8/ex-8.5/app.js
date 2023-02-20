function nextGreaterElements(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1); // Initialize result array with -1 values

    for (let i = 0; i < arr.length; i++) {
        // Keep popping from the stack while the current element is greater than the top element of the stack
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = arr[i];
        }
        // Push the current index onto the stack
        stack.push(i);
    }

    return result;
}

let arr = [1, 3, 2, 4];
let result = nextGreaterElements(arr);
console.log(result);

arr = [6, 8, 0, 1, 3]
result = nextGreaterElements(arr);
console.log(result);


/** 
Used a stack to keep track of the indices of elements for which we haven't found the next greater element yet. 
For each element in the input array, the function pops all the indices from the stack for which the corresponding element is less than the current element and updates the result array with the current element for each popped index. 
The current index is then pushed onto the stack. 
**/
