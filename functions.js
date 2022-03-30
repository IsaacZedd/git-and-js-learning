/*

Common trends used:
  - functions are objects!!
  - anonymous funcs are those which don't have func names
  - let and const are block-scoped, var is function-scoped
  - lexical-scoped are related with nested functions
  - nested functions within functions is possible
  - anony func is unnamed func. (i.e. function(){})
  - return func out of func is possible (returned func is anonymous)
  - its common to use anonymous funcs as callbacks.
  - one-liner arrow implicit funcs used when there's a single expression in the body

*/

const log = (arg) => console.log(arg);

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
console.log("----------");
//Functions are objects!! they can be stored in array or variables and called----------------
function add(x, y) {
  return x + y;
}
const sub = function (x, y) {
  return x - y;
};
function multiply(x, y) {
  return x * y;
}
const divi = function (x, y) {
  return x / y;
};

//storing above functions in array
const arrayFunc = [add, sub, multiply, divi];
for (let func of arrayFunc) {
  //loops over the arrayFunc to iterate over the functions, which inturn has a value and operation
  let res = func(30, 5); //res stores each iterated func value as the params passed(30,5) to evaluate their operation
  console.log(res);
}

//storing above functions in object
const objFunc = {
  addition: add,
  mult: multiply,
  subs: sub,
  division: divi,
};
console.log(objFunc.mult(4, 5)); //mult key has multiply func value, continued below:)
//which means the value we passed(4,5) will be evaluated in the func then becomes mult's value
let h = 45,
  k = 9;
console.log(objFunc.division(h, k));

//FUNCS as arguements for another functions
function cry() {
  console.log("Haaaa I'm Tired!!");
}
function happy() {
  console.log("HEll yes feeling Cool!!");
}
function callTwoTimes(arg) {
  arg();
  arg();
}
callTwoTimes(cry); //we passed cry func for callTwoTimes to call above arg() two times.
callTwoTimes(happy);

function repeatNTimes(passedFunc, num) {
  for (let i = 0; i < num; i++) {
    passedFunc();
  }
}
repeatNTimes(cry, 6); //takes both arguements and iterated 6 times on the cry function value
repeatNTimes(happy, 3);

function joined(first, second) {
  let fname = first();
  let lname = second();
  console.log(fname, lname);
  // YISHAK ZEWDINEH, cause those fname and lname funcs just return names which means can be stored in a variable, but not work with
  // a func that has no return value.
}
joined(fName, lName);
function fName() {
  return "YISHAK";
}
function lName() {
  return "ZEWDINEH";
}

function pickOneFunc(f1, f2) {
  let random = Math.random();
  // if (random < 0.5) {
  //   f1();
  // } else {
  //   f2();
  // }
  random < 0.5 ? f1() : f2();
}
function f1() {
  console.log("Function 1");
}
function f2() {
  console.log("Function 2");
}
pickOneFunc(f1, f2);

//FUNCS as return types for another funcs
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}
const double = multiplyBy(7);
//double holds the anonymous function which is inside multiplyBy() and 7 is passed to num param in it
console.log(double(5));
// 35, cause 5 will be placed in x param, then x*num is returned and stored in double variable

function checkBetween(min, max) {
  return function (age) {
    return age >= min && age <= max;
  };
}
const isChild = checkBetween(0, 18);
const isAdult = checkBetween(19, 50);
const isYear = checkBetween(1990, 2012);
console.log(isChild(5));
console.log(isAdult(43));
console.log(isYear(2013));

/*
FUNCTION CALLBACKS, we've seen in above examples:
  > callTwoTimes(cry) - here cry func is called a callback func
    because its used in callTwoTimes() as an arguement
*/
// function welcome() {
//   alert("Callbacks after 5 sec!");
// }
// setTimeout(welcome, 5000);
// // builtin func which takes a func and time to be used for delay
// // welcome is a callback here

// setTimeout(function () {
//   alert("Anonymous func callback after 10 sec!");
// }, 10000); // uses anonymous func as a callback

//Illustrates the use of anonymous callback func in btn listener method
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("You clicked me!!!");
});

//Hoisting - is kind of error ocurred when not keeping order of code,
// 1 - var keyword (is hoisted)
console.log(damn); //undefined, but not an error
var damn = "HEll NO!!";
// JS treat it as:
//    var damn;
//    console.log(damn);
//    damn = "HEll NO!!";

// 2 - let and const keyword (are not hoisted)
// console.log(mess); //error, before init mess can't be accessed
// let mess = "Tired!";
// console.log(bitcoin);
// const bitcoin = 23;

// 3 - in normal functions (not hoisted)
hoistedFunc(); //this works fine
function hoistedFunc() {
  console.log("Not hoisted function!!");
}

// 4 - in function expressions (hoisted)
//expFunc(); //error, cause it is hoisted as it uses var keyword
console.log(expFunc); //can log expFunc as undefined, but not expFunc()
var expFunc = function () {
  //if expFunc let/const, init before error occurs
  console.log("Is Hoisted!!");
};

/* 
Arrow funcs and func callbacks in arrays using methods(forEach,reduce,...) 
-------------*/
//forEach() -> accepts callback
const arrCall = [23, 12, 30, 16];
arrCall.forEach(function (element) {
  //this array callback has 1 arg and used to iterate and access each ele
  // ments of arrCall elements.
  console.log(element); //logs all arrCall[] elements.
});
arrCall.forEach(function (element, index) {
  //can also used 2nd param which is index of that array
  console.log(index, element);
});

function tripled(n) {
  console.log(n * 3);
}
arrCall.forEach(tripled);

const books = [
  {
    title: "Beginner Python",
    author: "Yishak",
    rating: 4.8,
  },
  {
    title: "Python for Experts and Beginner",
    author: "Biruk",
    rating: 4.9,
  },
  {
    title: "Java in Depth",
    author: "Getahun",
    rating: 4.5,
  },
  {
    title: "PHP Cookbook",
    author: "Bekele",
    rating: 4.7,
  },
];
books.forEach(function (arr) {
  console.log(arr.title.toUpperCase());
});

//map() -> extracts new array from original by using func callbacks
const nums = [21, 22, 23, 24, 25, 27];
const mappedArr = nums.map(function (n) {
  // multiplies each nums elems by 2 and store them in mappedArr as a
  // new array.
  return n * 2;
});
console.log(mappedArr); // [42,44,46,...]
const checkOddEven = nums.map(function (check) {
  // checks even/odd and returns a new object with num and isOdd keys ...
  // that have values(num and true/false) to the new checkOddEven array.
  return {
    num: check,
    isOdd: check % 2 !== 0,
  };
});
console.log(checkOddEven);

const words = ["asap", "nerd", "granite"];
const wordMapped = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(wordMapped);

const titledArray = books.map(function (titles) {
  // mapped to books array (consisits objects) to return each title
  // of the objects on the new titledArray[]
  return titles.title;
});
console.log(titledArray);

//function arrows, => along with expressions
const arrowFunc = (message) => {
  message = "EARTH is HELL!!";
  return message;
};
log(arrowFunc());
const checkk = (num) => {
  return num % 2 === 0;
};
log(checkk(12));
log(checkk(17));

const anott = (name, company) => {
  return {
    name: name,
    company: company,
  };
};
log(anott("Elon Musk", "SPACEX"));
const noParam = () => {
  return "Empty Parameter arrow function!";
};
log(noParam());

const arrCheck = (arr) => {
  let incl = "yishak";
  if (arr.includes(incl)) {
    return `Your ${arr} has '${incl}' included.`;
  } else {
    return `Sorry! ${arr} doesn't include '${incl}'.`;
  }
};
log(arrCheck(["lawyer", "judge"]));

//Arrow functions Implicit returns
const impRet = (number) => number * number;
const oneImp = (val, val2) => val * val2; // one-liner implicit return

const impArray = [4, 6, 3, 9];
const double1 = impArray.map(function (num) {
  //using normal anony func
  return num * 2;
});
const double2 = impArray.map((num) => {
  //using implicit return
  return num * 2;
});
const double3 = impArray.map((num) => num * 2); //using one-liner

const mapperOdd = impArray.map((num) => (num % 2 === 0 ? "Even" : "Odd"));

//find() -> holds boolean val and returns the value of requested thing
const nameSir = ["Ato Gebre", "Wero Kasech", "Ato and Obbo", "Obbo Jemal"];
const namo = nameSir.find((namo) => {
  return namo.includes("Ato"); //the first observed will be returned
});

const namo2 = nameSir.find(
  (namo) => namo.indexOf("Obbo") === 0 //Obbo jemal, based on index not like includes()
);

const booksVal = books.find((num) => num.rating >= 4.6); //{t:'',a:'',r:''}
const findAut = books.find((aut) => aut.author.includes("Yishak"));

//filter() -> creates new array(copy) based on the passed value to evaluate the condtion
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterEven = list.filter((n) => n % 2 === 0);
const filterLess = list.filter((n) => n <= 5.5);

const retRating = books.filter((rate) => rate.rating >= 4.6);
const inclTitle = books.filter(
  (tit) => tit.title.includes("Python") || tit.title.includes("Beginner")
);

const bookStore = [
  {
    title: "The Gausian Blur",
    author: ["David", "Bombal"],
    rating: 4.6,
    genre: ["Graphics"],
  },
  {
    title: "The Software Tools",
    author: ["Colt", "Mosh"],
    rating: 4.9,
    genre: ["Coding", "Programming"],
  },
  {
    title: "Human Cells",
    author: ["Zedd", "Leeds"],
    rating: 4.9,
    genre: ["Health", "Biology"],
  },
  {
    title: "The UFO",
    author: ["Colt", "Mosh"],
    rating: 4.9,
    genre: ["Fiction"],
  },
];
const query = "The"; //assume user's searched value
const theIncl = bookStore.filter((book) => {
  const titler = book.title.toLowerCase();
  return titler.includes(query.toLowerCase());
});
