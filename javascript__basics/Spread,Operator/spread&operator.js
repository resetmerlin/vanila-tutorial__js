const numbers = [1,2,3];
const newNumbers = [...numbers,4];

console.log(numbers);
console.log(newNumbers);


//if u don't use '...' dots, it is gonna be like 
// -like this [[1,2,3],4] 

//so this is the spread operator

const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age:28
}

console.log(newPerson);

//it distributing into the new..
//that is the spread operator


const filter =(...args) =>{
    //...args--> dots here are used as a rest operator
    // and that merges the arguments into an array
    return args.filter(el => el === 1);
    // filter will execute a function on every element in 
    // the passed in array

    //el is element


}


console.log(filter(1,2,3));