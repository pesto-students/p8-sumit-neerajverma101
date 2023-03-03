class FibonacciIterator {
    constructor() {
        this.previous = 0;
        this.current = 1;
    }

    next() {
        let newCurrent = this.previous + this.current;
        this.previous = this.current;
        this.current = newCurrent;
        return { value: this.previous, done: false };
    }
}

let fibonacci = new FibonacciIterator();
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 1
console.log(fibonacci.next().value); // Output: 2
console.log(fibonacci.next().value); // Output: 3
console.log(fibonacci.next().value); // Output: 5

/*
Created a class called "FibonacciIterator" which has two properties: "previous" and "current". 
The "next()" method is defined which is used to generate the next number in the Fibonacci series by adding the current and previous numbers and then updating the values of "previous" and "current"
We then create an instance of the FibonacciIterator class, and call the "next()" method multiple times to generate the next numbers in the series.
*/
