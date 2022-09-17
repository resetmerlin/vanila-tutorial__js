// ecample of switch

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//what if there is no break.


let b = 2 + 2;

switch (b) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}


//ohhhh if u use switch, the computer will gonna compare the case 
//and argument of a switch. and moreover if u do not put break, it will gonna
//continues execution untill it finds a break. after break, it is done...

let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
    // 이해 안되는게..... switch안의 argument는 무조건 int로 바꾸는 건가?
    // I mean how did computer understand string +1 === number

  default:
    alert("this doesn't run");
}


// this is an expression in switch
// JavaScript's expression is a valid set of literals, 
//variables, operators, and expressions 
//that evaluate to a single value that is an expression. This single value can be a number, a string, or a logical value as depending on expression. 

//https://javascript.info/switch


let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}

// For 0, 1, the first alert runs.
// For 2 the second alert runs.
// But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. 
// So we’ve got a dead code in case 3! The default variant will execute.