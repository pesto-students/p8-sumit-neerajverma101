// Using Async/Await
async function executeTasks() {
    await doTask1();
    await doTask2();
    await doTask3();
    console.log("All tasks completed!");
}

// Using Generators
function* executeTasks() {
    yield doTask1();
    yield doTask2();
    yield doTask3();
    console.log("All tasks completed!");
}

executeTasks();

/*
In the first example, the function executeTasks is declared as async, which means it can use the await keyword. 
Inside the function, we use the await keyword before calling each of the three callback functions (doTask1(), doTask2(), doTask3()). 
This causes the function to wait for each callback to complete before moving on to the next one. 
Once all three are complete, it logs "All tasks completed!"

In the second example, the function executeTasks is declared as a generator function and use the yield keyword before calling each of the three callback functions. 
yield statement causes the generator to pause and resume when the next() method is called. 
The generator resumes at the point where it paused, and continues executing until it encounters the next yield statement. 
Once all three are complete, it logs "All tasks completed!"
*/
