function isParenthesisMatched(exp) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let i = 0; i < exp.length; i++) {
        const currentChar = exp[i];
        if (openingBrackets.includes(currentChar)) {
            // If the current character is an opening bracket, push it onto the stack
            stack.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            // If the current character is a closing bracket, pop the top element from the stack
            const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)];
            if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
                // If the stack is empty or the top element doesn't match the current closing bracket, return false
                return false;
            }
        }
    }

    // If the stack is empty after processing all characters, then the expression is balanced
    return stack.length === 0;
}

// Example usage
console.log(isParenthesisMatched("{([])}"));
console.log(isParenthesisMatched("()"));
console.log(isParenthesisMatched("([]"));


/**
The isParenthesisMatched function uses a stack to keep track of the opening brackets encountered in the expression string. 
For each closing bracket encountered, it checks whether the top element of the stack matches the corresponding opening bracket for that closing bracket. 
If the stack is empty or the top element doesn't match, the function returns false indicating that the expression is not balanced.
**/