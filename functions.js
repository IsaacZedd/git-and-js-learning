/*

Common trends used:
  - functions are objects!!
  - anonymous funcs are those which don't have func names
  - let and const are block-scoped, var is function-scoped
  - lexical-scoped are related with nested functions

*/

function myFunction() {
  console.log("Hell yes!! Into functions.");
}

myFunction();
myFunction();
console.log("");
for (let i = 0; i < 5; i++) {
  //looping functions
  console.log(myFunction(), i);
}

function dieRole() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

for (let i = 0; i < 4; i++) {
  dieRole();
}
console.log("");
function callDie() {
  //we can call functions in another functions
  dieRole();
  dieRole();
  dieRole();
  dieRole();
}
callDie();

//Functions with arguements
function withArgs(personName) {
  console.log("Name:", personName);
}
withArgs("Yishak");

function anotherOne(counter) {
  for (let i = 0; i < counter; i++) {
    withArgs();
  }
}
anotherOne(5); //5 will be passed to the function and loops withArgs() 5 times

//with multiple parameters
function add(num1, num2) {
  console.log(num1 + num2);
}
add(23, 1);
function div(a, b) {
  console.log(a / b); //order does care here, cause division
}
div(22, 11); //divides 22 by 11
div(11, 22); //divides 11 by 22, that's why order is crucial in some situations

function trick(freePass, number) {
  console.log(freePass / number);
}
trick("Hi", 23); //Hi/23 is NaN, because JS doesn't care value types. so we've to do some logic to overcome this
trick(23); //2nd param is left so it evaluates 23 / undefined = NaN, as number param is not defined yet.

//return statement -> ends function execution and specify the value to be returned
function retFunc(fullName) {
  return fullName;
  console.log("Will not run!"); //not run cause after every return statement function is done.
}
const fullName = retFunc("Yishak Zewdineh");
console.log(fullName);

function anothReturn(weight, age) {
  if (weight >= 70 && age > 60) {
    return `"Hey you're: ${age} years ABNORMAL!!`;
  } else if (weight >= 60 && age > 40) {
    return `"Hey you're: ${age} years HEALTHY!!`;
  } else {
    return `"You should see a doctor!!`;
  }
}
const result = anothReturn(67, 43);
console.log(result);

function isPurple(color) {
  //   if (color.toLowerCase() === 'purple') {
  //       return true;
  //   }
  //   else{
  //       return false;
  //   }

  return color.toLowerCase() === "purple"; //can be written in a single line where condtions are true/false just 2 situations
}

//return can break out of whole function no matter it's written in function's loops or whatever, example below
function checkColor(colorArray) {
  for (let color of colorArray) {
    if (color === "blue" || color === "red") {
      return true;
    }
  }
  return false; //written out of for loop cause need to check all array elements
}

const value = checkColor(["brown", "red", "yellow"]); //we pass array to the function
const value2 = checkColor(["indigo", "orange"]);
console.log(value);
console.log(value2);

/*

  Challenge #1
  password and username validator function:
    - 8 char long password
    - pass not contain spaces
    - pass must not be username value

*/
console.log("------Pass Validation------");
function isValidPassword(password, username) {
  if (
    password.length > 8 &&
    !password.includes(" ") && //or use indexOf(' ') === -1
    !password.includes(username) //or use indexOf(username) === -1
  ) {
    return true;
  }
  return false;
}
console.log(isValidPassword("yasfwerewr", "yasfw")); //compares username's whole value exact with password value

function isValidPassword2() {
  //or this way also possible
  const charLength = password.length > 8;
  const spaces = password.indexOf(" ") === -1;
  const userContain = password.indexOf(username) === -1;
  if (charLength && spaces && userContain) return true;
  return false;
}
console.log(isValidPassword("yasfwerewr", "isak"));

/*

  Challenge #2
  Find average value of array numbers:
    - arr[20,30,40] = 20 + 30 + 40 / arr.length = result

*/
console.log("------Average of arrays------");
function aveArray(myArray) {
  let ave = 0;
  let arrLen = myArray.length;
  for (let arr of myArray) {
    ave += arr;
  }
  return ave / arrLen;
} //we can also use normal for loop

console.log(aveArray([50, 20, 10]));

/*

  Challenge #3
  Check if a sentence is a pangram(include all english alphabets at least once):
    - The quick brown fox ... is a pangram

*/
console.log("----pangram sentence checking----");
function isPangram(sentence) {
  let cased = sentence.toLowerCase();
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alpha) {
    // if (cased.indexOf(char) === -1) {
    //   return false;
    // }
    //or this way using includes() method
    if (!cased.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("The quick brown jumps over the lazy dog."));

/*

  Challenge #4
  A function which returns a random playing card object:
    - {
      value: 'K',
      suit: 'clubs'
      }
    2...10 and J,Q,K,A -> values
    clubs, spades, diamonds, hearts

*/
console.log("------Get random card------");
function getCard() {
  const valls = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const randVal = Math.floor(Math.random() * valls.length);
  const valResult = valls[randVal];
  const randSuit = Math.floor(Math.random() * suits.length);
  const suitResult = suits[randSuit];
  const cardObject = {
    value: valResult,
    suit: suitResult,
  };
  return cardObject;
}
console.log(getCard());

/*or this way here using two functions, 1 for generating random values from the arrays, the other 
which holds the the arrays and displays the random object of values generated*/
function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const randVal = arr[index];
  return randVal;
}
function getCard2() {
  const valls = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return {
    value: pick(valls),
    suit: pick(suits),
  };
}
console.log(getCard2());

//Scope of variables: Block, Function and Global

function funcScope() {
  //Function-Scoped variables
  let myVar = "variable";
}
// console.log(myVar); //error cause myVar is defined within funcScope() function

let radius = 8;
if (radius > 0) {
  //Block-Scope variables
  const PI = 3.14;
  let circ = 2 * PI * radius;
  var lotto = 23442;
}
//console.log(PI * circ); //error cause PI and circ are block vars which are defined in the if block
console.log(radius); //works, cause radius isn't block scope
console.log(lotto); //works, cause var is not blocked to the block, but not const and let

function doubleArray(arr) {
  const result = [];
  for (num of arr) {
    const double = num * 2; //double is block-scoped, but if its var can be accessible outside
    result.push(double);
  }
  //return double; // not work, cause its block scoped to the for loop. this will work if double is var
  return result; //result is function-scoped
}
console.log(doubleArray([2, 4, 6]));

function outer() {
  //Lexical scoped variables (nested functions)
  let movie = "Legion";
  function inner() {
    //let movie = "Shooter"; //will be used by below statement as the inner() looks for movie var, then look to parent
    console.log(movie.toUpperCase()); //as movie is declared in parent func, inner func can access it
  }
  inner(); //helps in calling inner and get its exec, when outer() function called
}
//inner(); //will not work
outer(); //will work

//Funcion expressions, another way of defining functions
function sum(x, y) {
  return x + y;
}
const addition = function (x, y) {
  //anonymous functions
  return x + y;
};
console.log(addition(23, 3));
const addOn = function sumUp(x, y) {
  //named function expression
  return x + y;
};
console.log(addOn(3, 5));
