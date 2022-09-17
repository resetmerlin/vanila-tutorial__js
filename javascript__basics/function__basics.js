/*1.*/document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });




  /*2.*/let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });
//   The functions we just passed to addEventListener() here are called 'anonymous functions',
//    because they don't have a name. There's an alternative way of writing anonymous functions, 

//An arrow function uses () => instead of function ():

/*3.*/document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});


/*My turn*/ document.querySelector("h3").addEventListener("click",()=>{console.log("u cliked")})



/*4 */function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message

//we could use || operation




function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
}

//// Naming function
// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.


//Use separate function 
// A separate function is not only easier to test and debug 
//– its very existence is a great comment!

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// separate function like this

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


//To make the code clean and easy to understand, 
// it’s recommended to use mainly local variables and 
// parameters in the function, not outer variables.

//next thing to study: https://javascript.info/function-expressions