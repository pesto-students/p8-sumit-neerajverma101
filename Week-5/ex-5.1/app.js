const doTask1 = () => {
    return new Promise((resolve) => setTimeout(() =>
        resolve("task 1 completed")
        , 1000));
}

const doTask2 = () => {
    return new Promise((resolve) => setTimeout(() =>
        resolve("task 2 completed")
        , 3000));
}

const doTask3 = () => {
    return new Promise((resolve) => setTimeout(() =>
        resolve("task 3 completed")
        , 2000));
}


// Using Async/Await
async function executeTasksAsync() {
    console.log(await doTask1());
    console.log(await doTask2());
    console.log(await doTask3());
    console.log("All async tasks completed!");
}

// Using Generators
async function* executeTasksGenerator() {
    yield console.log(await doTask1());
    yield console.log(await doTask2());
    yield console.log(await doTask3());
    console.log("All generator tasks completed!");
}

// executeTasksAsync();
const gen = executeTasksGenerator()
gen.next()
gen.next()
gen.next()



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
