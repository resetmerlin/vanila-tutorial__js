/**
 * 1. Introduction to the JavaScript const keyword

 */

//ES6 provides a new way of declaring a constant by using the const keyword.
//The const keyword creates a read-only reference to a value.

// const CONSTANT_NAME = value;
//By convention, the constant identifiers are in uppercase.

//Like the let keyword, the const keyword declares blocked-scope variables.
//However, the block-scoped variables declared by the const keyword can’t be reassigned.

//The variables declared by the let keyword are mutable.
//It means that you can change their values anytime you want as shown in the following example:

let a = 10;
a = 20;
a = a + 5;
console.log(a); //25

//However, variables created by the const keyword are “immutable(불변)”.
//In other words, you can’t reassign them to different values.

///If you attempt to reassign a variable declared by the const keyword, you’ll get a TypeError like this:
const RATE = 0.1;
RATE = 0.2; // TypeError
// Unlike the let keyword, you need to initialize the value to the variable declared by the const keyword.
// const TYPE_ERROR;

/**
 * 2. Javascript const and Ojects
 */

//  The const keyword ensures that the variable it creates is read-only.
//  However, it doesn’t mean that the actual value to which the const variable reference is immutable.

//  Example:
const person = { age: 20 };
person.age = 30; //OK
console.log(person.age); //30

//Even though the person variable is a constant, you can change the value of its property.

// However, you cannot reassign a different value to the person constant like this:
person = { age: 40 }; // TypeError

// If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method:

const person1 = Object.freeze({ age: 20 });
person1.age = 30; // TypeError

//Note that Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties.

//let me try:
const FREEZE_ME = Object.freeze({ degree: -20 });
FREEZE_ME.degree = 20;

//Example:
const company = Object.freeze({
  name: "ABC corp",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    zipcode: 95134,
  },
});

//But the company.address object is not immutable, you can add a new property to the company.address object as follows:
company.address.country = "USA"; // OK

const MERLIN_INFO = Object.freeze({
  name: "Merlin Jo",
  address: {
    street: "Namdong gu",
    city: " Incheon",
    state: "IDK",
  },
});

MERLIN_INFO.address.number = "01043481215";

/**
 * 3. JavaScript const and Arrays

 */

const colors = ["red"];
colors.push("green");
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError

//In this example, we declare an array colors that has one element using the const keyword.
//Then, we can change the array’s elements by adding the green color. However, we cannot reassign the array colors to another array.

const Math = ["one"];
Math.push("two");
console.log(Math);

Math.pop();
Math.pop();
console.log(Math);

Math = [];

/**
 * 4. JavaScript const in a for loop
 */

//  ES6 provides a new construct called for...of that allows you to create a loop iterating over iterable objects such as arrays, maps, and sets.
let scores = [75, 80, 95];

for (let score of scores) {
  console.log(score);
}

// If you don’t intend to modify the score variable inside the loop,
// you can use the const keyword instead:
let scores1 = [75, 80, 95];
for (const score of scores1) {
  console.log(score);
}

// In this example, the for...of   creates a new binding for the const keyword in each
// loop iteration. In other words, a new score constant is created in each iteration.

// Notice that the const will not work in an imperative for loop. Trying to use the const keyword to declare a variabl
// e in the imperative for loop will result in a TypeError:

for (const i = 0; i < scores.length; i++) {
  // TypeError
  console.log(scores[i]);
}

//imperative => 명령적인
