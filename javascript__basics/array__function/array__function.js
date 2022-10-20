//// JS array functions


//// Array.prototype.map()
//

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const mapArray = [1,3,4,5,5,6,];

const mapArrayObj = mapArray.map(x=> x*3);

console.log(mapArrayObj);

//Using map to reformat objects in an array

const kvarray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key:3, value: 30},
];


const reformattedArray = kvarray.map(({key,value})=> ({[key]:value}));

//여기서 궁금한 점이 있는데 왜 []를 써야 키 값이 나오지??



// Now I want to add a key-value pair using bracket notation. This is the syntax:

// objectName[“keyName”] = value
console.log(reformattedArray);


///Tricky use case 

const makeInt = ['1','2','3'].map(parseInt);
console.log(typeof makeInt);

//type: object

//solutions 
const returnInt = (element) => parseInt(element,10);

['1','2','3'].map(returnInt);
//result: array of numbers


//
////


//// Array.prototype.find()
//


