function vowelCount(str) {
    const vowels = "aeiou";
    let counts = new Map();
    for (let i = 0; i < vowels.length; i++) {
        let count = (str.match(new RegExp(vowels[i], "g")) || []).length;
        counts.set(vowels[i], count);
    }
    return counts;
}
console.log(vowelCount("Neeraj Verma"));
// Output: Map { 'a' => 2, 'e' => 3, 'i' => 0, 'o' => 0, 'u' => 0 }


/*
Created an array of vowels called vowels and a new map called counts which we will use to store our results.

We then use a for loop to iterate over each vowel in the vowels array. Inside the loop, we use the match() method with a regular expression to find all occurrences of the current vowel in the input string. 
We then use the length property of the resulting array to get the count of the current vowel.
Then we use the .set() method to add the current vowel as the key and the count as the value in the counts map.
*/