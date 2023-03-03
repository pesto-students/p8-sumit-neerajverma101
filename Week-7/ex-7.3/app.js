function sortArray(arr, n) {

    // Count number of 0's, 1's, and 2's 
    let zeroCount = 0, oneCount = 0, twoCount = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 0)
            zeroCount++;
        else if (arr[i] == 1)
            oneCount++;
        else
            twoCount++;
    }

    // Update array 
    let i = 0;
    while (zeroCount > 0) {
        arr[i++] = 0;
        zeroCount--;
    }

    while (oneCount > 0) {
        arr[i++] = 1;
        oneCount--;
    }

    while (twoCount > 0) {
        arr[i++] = 2;
        twoCount--;
    }
}

// Driver code 
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
let n = arr.length;
sortArray(arr, 1);

console.log("Array after sorting : ");
console.log(arr);