function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    } let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();


/*
The output will be: "Count is 0".

The createIncrement() function returns an array containing two functions: increment and log. 
The increment function increments the value of count by 1 each time it is called, while the log function logs the value of message to the console.

When the code is executed, the createIncrement() function is called and the array of functions is destructured into two variables: increment and log. 
The increment function is called three times, but the value of count is not modified because it is defined within the scope of the createIncrement() function 
and is not returned or modified in any way.

Finally, the log function is called, which logs the value of message to the console. 
The value of message is "Count is 0", because it was defined within the createIncrement() function and is not modified by the increment function.
*/