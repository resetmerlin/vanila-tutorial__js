////구조 분해 할당 

//Destructuring allows you to easily extract array elements or object properties and store
// them in variables


//The difference between spread is 
// Spread takes out all elements all properties and distributes them in a 'new array' or obj


///{} == curl braces




//// Array Destructing
const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1,num2);


const numbers1 = [1,2,3];
[num4, , num6] = numbers1;
console.log(num4,num6);


//// Object Destructing


const {Merlin} = {Merlin: 'Max' , age: 28};

console.log(Merlin)
console.log(age) //not defined

