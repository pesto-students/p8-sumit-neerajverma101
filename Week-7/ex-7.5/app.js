const diffPossible = (arr, B) => {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] - B) || set.has(arr[i] + B)) {
            return 1;
        }
        set.add(arr[i]);
    }
    return 0;
};

console.log(diffPossible([5, 10, 3, 2, 50, 80], 78))

console.log(diffPossible([-10, 20], 30))


//This function uses a JavaScript Set to keep track of the unique elements in the input array arr.
//For each element in the array, the function checks if either arr[i] - B or arr[i] + B exists in the set.
//If either of these elements exists in the set, it means a pair with the required difference of B has been found and the function returns
//1. If the loop completes without finding such a pair, the function returns 0.
