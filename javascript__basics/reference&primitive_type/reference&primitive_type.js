//These are not next generation jas but they are feature I might have missed or forgotten
// and superrr important



const number =1;
// this is primitive type

const num2 = number;

console.log(num2);
//New numbers, string, booleans, these are so-called primitive types whenever you reassign or
//you store a variable in another variable


//objects and arrays are reference type
const person ={
    name: 'Max'
};

const secondPerson = person;
// it is not copying the person .. instead Person the object is stored in mermory 
// and in the constant person we store a pointer to that place in memory
// if we then assign person to seconPerson that pointer will be copied



person.name = "Merlin";
// it is gonna print Merlin
console.log(secondPerson);

//  but if u use spread(

//     const secondPerson ={
    
//     ...person
//     };

    //it will print Max instead of Merlin
// )
