/**
 * Introduction to the Javascript let keyword
 */

//I you declare a variable outside of a function, the scope of the variable is global.
//When you declare a variable inside a function, the scope of the variable is local.

// let keyword is similar to the var keyword, except that these variables are blocked-scope

//Example:
let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x); //20; reference x inside the block
}

console.log(x); //10; reference at the begining of the script

// When the JavaScript engine completes executing the if block, the x variable inside the if block is out of scope.
// Therefore, the value of the x variable that following the if block is 10.

//My code
let z = 15;
if (z == 15) {
  let z = 14;
  console.log(z);
}
console.log(z);

/**
 * JavaScript let and global object
 */

//when you declare a global variable using the car keyword, you add that variable to the property
//list of the global object. In the case of the web browser, the global object is the window,

//Example:
var a = 10;
console.log(window.a); //10

//But if you use 'let' variable, this is not gonna attached to the global object as a property.

//Example:
let b = 20;
console.log(window.b); //undefined

/**
 * Javascript let and callback function in a for loop
 *
 */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
//the intention of the code is to output numbers from 0 to 4 to the console every second.
//However, it outputs the number 5 five times

//in ES5, you cna fix this issue by creating another scope so that each callback function references a new variable.
//And to create a new scope, you need to create a function. Typically, you use the IIFE pattern as follows:
for (var ii = 0; ii < 5; ii++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(ii);
}

//in ES6 the let keyword declares a new variable in each loop iteration(반복), Therefore, you just need to replace the var keyword with the
// let keyword to fix the issue:
for (let iii = 0; iii < 5; iii++) {
  setTimeout(function () {
    console.log(iii);
  }, 1000);
}

// to make the code completely ES6 style, u can use an arrow function as follows:
for (let iiii = 0; iiii < 5; iiii++) {
  setTimeout(() => console.log(iiii), 1000);
}

/**
 * Redeclaration
 */

//The 'var' keyword allows you to redeclare a variable without any issue:

var counter = 0;
var counter;
console.log(counter); //0

//However, redeclaring a variable using the 'let' keyword will result in an error:
// let counter1 = 0;
// let counter1;
// console.log(counter1);
//error message: Uncaught SyntaxError: Identifier 'counter' has already been declared

/**
 * JavaScript let variables and hoisting

 */

{
  console.log(counter2);
  let counter2 = 10;
  // error: Uncaught ReferenceError: Cannot access 'counter' before initialization
}

//In this example, accessing the counter variable before declaring it causes a ReferenceError.
//You may think that a variable declaration using the let keyword does not hoist, but it does.
//Meaning of hoist: an act of raising or lifting something.

/**
 * Temporal death zone (TDZ)

 */

//A variable delclared by the let keyword has a so-called temporal dead zone(TDZ)
// The TDZ is the time from the start of the block until the variable declaration is processed.

// The following example illustrates that the temporal dead zone is time-based, not location-based.

{
  //enter new scope, TDZ starts
  let log = function () {
    console.log(message); //message declared later
  };

  //This is the TDZ and accessing log
  //would cause a ReferenceError

  let message1 = "Hello"; //TDZ ends
  log(); //Called outside TDZ
}

//First, the curly brace starts a new block scope, therefore, the TDZ starts.
// Third, declare the message variable and initialize its value to 'Hello'.
// The time from the start of the block scope to the time that the message variable is accessed is called a temporal death zone.
// When the JavaScript engine processes the declaration, the TDZ ends.

// Finally, call the log() function that accesses the message variable outside of the TDZ.

// Note that if you access a variable declared by the let keyword in the TDZ,
//  you’ll get a ReferenceError as illustrated in the following example.

{
  // TDZ starts
  console.log(typeof myVar); // undefined
  console.log(typeof message); // ReferenceError
  let message; // TDZ ends
}

// The temporal death zone prevents you from accidentally referencing a variable before its declaration.

/**
 * Summary
 */

//  Summary
//  Variables are declared using the let keyword are block-scoped, are not initialized to any value, and are not attached to the global object.
//  Redeclaring a variable using the let keyword will cause an error.
//  A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization is evaluated.
