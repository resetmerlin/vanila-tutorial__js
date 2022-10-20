/**
 * 1. Variable scopes
 */

//  The var variables belong to the global scope when you define them outside a function. For example:
//Ex:
var counter;
//In this example, the counter is a global variable. It means that the counter variable is accessible by any functions.

//When you declare a variable inside a function using the var keyword, the scope of the variable is local. For example:
//Ex:
function increase() {
  var counter = 10;
}
//cannot access the counter variable here

// In this example, the counter variable is local to the increase() function. It cannot be accessible outside of the function.
//The following example displays four numbers from 0 to 4 inside the loop and the number 5 outside the loop.

//Ex:
for (var i = 0; i < 5; i++) {
  console.log("Inside the loop:", i);
}
console.log("outside the loop:", i);

////Result
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// Outside the loop: 5

//My Example:
for (var my_i = 0; my_i < 10; my_i++) {
  console.log("I hope my_i print, Inside result is:", my_i);
}

console.log("I hope my_i print, outside result is:", my_i);

//In this example, the i variable is a global variable.
//Therefore, it can be accessed from both inside and after the for loop.
// The following example uses the let keyword instead of the var keyword:

//Ex:
// for (let ii = 0; ii < 5; ii++) {
//   console.log("Inside the loop:", ii);
// }

// console.log("Outside the loop:", ii);
//error: Uncaught ReferenceError: i is not defined
// Reason of error: Since this example uses the let keyword, the variable i is blocked scope.
// It means that the variable i only exists and can be accessible inside the for loop block.

//My Example:
// for (let my_i_1 = 0; my_i_1 < 5; my_i_1++) {
//   console.log("Inside1 of the loop: ", my_i_1);
// }
// console.log("outside1 of the loop: ", my_i_1);

////Important!!
//In JavaScript, a block is delimited by a pair of curly braces {} like in the
// if...else and for statements:

// if(condition){
//     //inside a block
// }
// for(...) {
//     // inside a block
//   }

/**
 * 2. Creating global properties
 */

//The global var variables are added to the global object as properties. The global object is window
//on the web browser and global on Node.js:
var globall = 0;
console.log(window.globall);

//however the let variables are not added to the global obj
let globalll = 0;
console.log(window.globalll); // undefined
