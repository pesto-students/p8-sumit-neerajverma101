function createStack() {
    const items = [];

    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.items); // undefined

stack.items = [10, 100, 1000]; // Encapsulation not broken!


/*
 The createStack() function defines the items array within its scope and returns an object with two methods: push() and pop(). 
 The push() method adds an item to the items array, and the pop() method removes and returns the last item in the items array. 
 Because the items array is defined within the createStack() function, it is not accessible outside of the function's scope, and the implementation is encapsulated.
 */