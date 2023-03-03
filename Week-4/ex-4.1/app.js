function getNumber(resolutionTime) {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 5 === 0) {
            setTimeout(() => reject(randomNumber), resolutionTime);
        } else {
            setTimeout(() => resolve(randomNumber), resolutionTime);
        }
    });
}

let customPromise = getNumber(3000);

customPromise
    .then(result => console.log("Resolved: ", result))
    .catch(error => console.log("Rejected: ", error));

/*
This function generates a random number and checks if it is divisible by 5. 
If it is divisible by 5, the promise is rejected with the random number as the argument after the time passed as resolutionTime. 
If it is not divisible by 5, the promise is resolved with the random number as the argument after the time passed as resolutionTime.
The setTimeout is used to simulate the delay in the resolution/rejection of the promise.
*/