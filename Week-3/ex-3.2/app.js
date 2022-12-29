// Using the call() method

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

let person1, person2
person1 = { name: 'Neeraj' };
person2 = { name: 'Ram' };

greet.call(person1, 'Hello'); // "Hello, my name is John"
greet.call(person2, 'Hi'); // "Hi, my name is Jane"

// Using the bind() method

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

person1 = { name: 'Sita' };
person2 = { name: 'Geeta' };

const greetJohn = greet.bind(person1);
const greetJane = greet.bind(person2);

greetJohn('Hello'); // "Hello, my name is John"
greetJane('Hi'); // "Hi, my name is Jane"

// Using the apply() method

function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

person1 = { name: 'John' };
person2 = { name: 'James' };

greet.apply(person1, ['Hello']); // "Hello, my name is John"
greet.apply(person2, ['Hi']); // "Hi, my name is Jane"

/*
The call() method allows you to call a function and set the this value inside the function to a specific object. 
The bind() method creates a new function with the this value set to a specific object, and 
the apply() method allows you to call a function and set the this value to a specific object, as well as pass an array of arguments to the function.
*/