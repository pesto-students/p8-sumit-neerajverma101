function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
console.log(hasDuplicate([1, 2, 3, 4, 5])); // Output: false
console.log(hasDuplicate([1, 2, 3, 4, 5, 5])); // Output: true

/*
Created a new Set by passing the input array to the Set constructor. 
A Set only stores unique values, so if the input array contains duplicates, the Set will have a smaller size than the original array.
We then use the size property of the Set object to check if its size is not equal to the length of the input array. 
If it's not, it means that the input array contains duplicates and the function returns true.
Otherwise, the input array does not contain duplicates and the function returns false.
*/