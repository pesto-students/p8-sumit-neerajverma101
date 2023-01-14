function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

let teacher = new Teacher("Neeraj");
teacher.teach("Math");

/*
Created a function constructor called "Person" which accepts a "name" parameter. 
We then create a function constructor called "Teacher" which calls the "Person" function using the call() method and passing the "this" keyword and the "name" parameter.

We then create a prototype reference for "Teacher" by setting the "Teacher.prototype" to the result of creating an object using "Object.create(Person.prototype)" and then setting the "constructor" property to "Teacher".

Finally, We add a method called "teach" to the "Teacher.prototype" which accepts a "subject" parameter, and prints out the teacher's name and the subject they are teaching.

*/
