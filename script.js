/* 

Common trends used when coding:
  - === operator is used instead of == in conditional operations
  - if situation has only 2 conditions(i.e if & else), then use ternary condition operator
  - use !, && and || at a time to write less ifelseif codes
  - use const keyword with Arrays and Objects often
  - use for loops for number-related cases like iterating over numbers
  - use while loops for some condition to meet true or false 
  - break keyword is often used in while loop(while(true){...}), not with for loops
  - for .. of is used in iterables(strs,arrays) and also in objects but used different way. and its preferable
  - objects are not iterable!!!!

*/

// alert("Gech");
console.log("Hello Deers,".toUpperCase());
console.log(3 > 0, "Fuuck", `${"Username".slice(0, 4).toLowerCase()}`);
console.error("You're Busted DUDE!!");
let myVar = 23;
if (myVar++ > 21) {
  console.log("Awesome");
}
console.log(myVar);

//Easying nested ifs
let pass = "yishak";
if (pass.length >= 6 && pass.indexOf(" ") === -1) {
  console.log("Good job pass verified!");
} else {
  console.log("Pass must be greater than 6 characters!");
}

//Truthiness and Falseyness
if ("") {
  console.log("TRUTHY");
} else {
  console.log("Falsey");
}

//switch
let day = 2;
switch (day) {
  case 1:
    console.log("Developer");
    break;
  case 2:
    console.log("Director");
    break;
  case 3:
    console.log("Data Scientist");
    break;
  case 4:
    console.log("Engineer");
    break;
  default:
    console.log("Invalid Name");
}

//Ternary Operator
let statuss = "online";
console.log(
  statuss == "online" ? console.log("Online") : console.log("Offline")
);

//Arrays
let emptyArr = [];
let lotto = [12, 34, 23, 23];
let shoppingList = ["Laptop", "Phone", "Radio"];
let mixedArray = ["hello", 12, false, NaN, null, undefined, 23.25];
mixedArray[0] = "Isaac";
console.log(mixedArray[2], " is value of myArr at index 2.");
shoppingList[0] = shoppingList[1];
shoppingList[3] = "Television";
shoppingList[shoppingList.length] = "LastOne";
console.log(shoppingList);

//Array methods
lotto.push(34); //adds 34 to last pos of lotto array becomes 5 elements
console.log(lotto);
shoppingList.push("Some", "Items"); //added 2 values to the shoppingList array
console.log(shoppingList);
shoppingList.pop();
shoppingList.pop();
shoppingList.pop();
console.log(shoppingList);

mixedArray.unshift("Developer");
mixedArray.unshift("The", "Most Influential");
console.log(mixedArray);
mixedArray.shift();
mixedArray.shift();
console.log(mixedArray);

let concatedArray = emptyArr.concat(lotto); //concatenates as the order
console.log(concatedArray);
console.log(shoppingList.includes("Television"));
console.log(shoppingList.includes("Television", 3)); //starting from specified index = 3
console.log(shoppingList.indexOf("Isaac")); //return -1 which is not present
console.log(shoppingList.indexOf("Television"));
console.log(shoppingList.indexOf("Television", 3));

//checking if an element is present in list without knowing index
if (shoppingList.includes("Laptop")) {
}
//checking if an element is present in list using their index position
if (shoppingList.indexOf("Television") !== -1) {
}

let revArray = ["K", "C", "U", "F"];
revArray.reverse();
console.log(revArray);

let joinArray = ["D", "R", "E", "N"];
let joined = joinArray.reverse().join("-"); //can pass to join() if u like
console.log(joined);

let sliced = ["my", "name", "is", "Isaac", "!"];
let slicedP = sliced.slice(0, 2); //start from 0(including it), to index 1 exluding index 2
console.log(slicedP);
console.log(sliced);

let spliced = ["Null", "undefined", "NaN"];
spliced.splice(0, 0, "variables"); //add variable str before Null without removing anything
spliced.splice(1, 2); //starting from index 1, removes 2 elements
spliced.splice(2, 0, "Null", "Undefined", "False"); //adds elems starting from index 2 without removing (0)
console.log(spliced);

let sortedArrayStr = ["yisak", "morke", "chung", "abdure"];
let sortedArrayNum = [12, 10, 10000, 43, 2234, 4];
console.log(sortedArrayStr.sort());
console.log(sortedArrayNum.sort());

//Arrays and primitive types assigning value is different, here is how.
let str1 = "Hello";
let str2 = str1;
str1 = "Dudes"; //This doesn't change the value of str2 as it already has the value, not referencing to some location

let arr = ["Hi"];
let arr2 = arr;
arr2.push("there"); //This changes the value of arr too, cause they're both referencing to same location in memory

//Using const with Arrays
const constArr = ["A"];
constArr.push("L", "L", "A", "H"); //Legal as it's just changing only the value of the array, not changing the reference as the ref is const
// constArr = ["some", "thing"]; //Impossible cause changing ref is illegal as the array is const on the reference.

//Nested Array
const nestedArray = [
  ["Orange", "Brown"],
  ["AMD", "Nvidia"],
  ["PUMA", "Klein"],
]; //2D array
console.log(nestedArray);
nestedArray[1][2] = "Intel";
nestedArray[2][2] = ["Adidas", "Nike"];
console.log(nestedArray[2][2][0]); //op = Adidas
console.log(nestedArray[1]);
nestedArray.pop(); //removes branding Array box(PUMA,Klein etc)
nestedArray.shift(); //removes Fruit Array box(Orange etc)
console.log(nestedArray); //only holds 'Amd, Nvidia and Intel' Box, but still 2D array.

//Objects
const myObject = {
  username: "asgardia360",
  age: 23,
  "1 Phone": "InfinixHot4Lite",
  myStatus: "single",
  position: "Developer",
  varia: myVar,
  23: "Twenty Three",
  anot: 0 === 0 ? true : false, //we can assign to keys whatever we want
};
console.log(myObject.position, "!"); // . is used to access object datas
//console.log(myObject.23); //doesn't work using . to access number keys, instead use below method
console.log(myObject["23"]); //[] is used to access value if key is number or symbol(invalid identifier), and it looks for 23 key as a string.
console.log(myObject["2" + "3"]);
console.log(myObject["1 Phone"]); //has to be in quotes as identifier convention is used to

let mn = "username";
console.log(myObject[mn]); //will look for 'username' key to get its value using the var mn

//Nested arrays and objects within each other
const maObj = {
  userData: {
    fname: "Yishak",
    lname: "Zewdineh",
  },
  hobbies: ["Music", "Art"],
}; //Arrays for keys and objects within objects can be used
maObj.userData.mname = "Sahlemariam";
maObj.hobbies[1] = "Gaming";
console.log(maObj);
console.log(maObj.hobbies[0]);
console.log(maObj.userData.fname, maObj.userData.lname);

const maArr = [
  {
    product: "HP",
    price: "1000$",
    quantity: 23,
  },
  {
    product: "Acer",
    price: "2000$",
    quantity: 12,
  },
]; //objects within arrays can be used
console.log(maArr[1].product, "is ma fav Laptop you Mothefockas!!");

//Array and object Equality
const check1 = [12, 22, 43];
const check2 = [];
console.log(check1 == check2); //false, cause the arrays point to diff reference
const check3 = check1;
console.log(check3 === check1); //true, cause both are referencing same location in memory
// also its same for objects!!

/* LOOPS */
//for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: ", i);
}
for (let i = 0; i < 10; i += 2) {
  console.log("Hi", i);
}
for (let i = 1; i <= 7; i++) {
  console.log(`${i}x${i} = ${i * i}`);
}
let star = "";
let word = "NERDOV";
for (let i = word.length - 1; i >= 0; i--) {
  star = star + word[i];
}
console.log(star); //out of the loop displays the final iterated value
//Infinite Loops
// for (let i = 0; i >= 0; i++) {
//   console.log("Infinite Loop!!");
// }
const forArray = [
  {
    fN: "Yishak",
    carrrer: "Developer",
  },
  {
    fN: "Getahun",
    carrrer: "Hacker",
  },
  {
    fN: "Bekele",
    carrrer: "Manager",
  },
];
for (let i = 0; i < forArray.length; i++) {
  console.log(`${forArray[i].fN} is a ${forArray[i].carrrer}` + "!");
}
//Loop through a string reversely
let maaStr = "LOOPER!";
for (let i = maaStr.length - 1; i >= 0; i--) {
  console.log(`${maaStr[i]} ${i}`);
}

const forAverage = [
  {
    fN: "Yishak",
    score: 98,
  },
  {
    fN: "Getahun",
    score: 92,
  },
  {
    fN: "Bekele",
    score: 87,
  },
];
let ave = 0;

for (let i = 0; i < forAverage.length; i++) {
  const cont = forAverage[i];
  ave = ave + cont.score;
}
console.log(ave / forAverage.length);

//Nested for loops
let stro = "NERD";
for (let i = 0; i <= 5; i++) {
  console.log("YOU Busted!!!");
  for (let j = stro.length - 1; j >= 0; j--) {
    console.log(`   *${stro[j]}*`);
  }
}

const gameBoard = [
  [4, 21, 55, 23],
  [66, 58, 33, 56],
  [78, 22, 11, 43],
  [65, 32, 19, 10],
];
let tot = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  if (i == 0) {
    console.log(row, `is ${[i]}th row.`);
  } else if (i == 1) {
    console.log(row, `is ${[i]}st row.`);
  } else if (i == 2) {
    console.log(row, `is ${[i]}nd row.`);
  } else {
    console.log(row, `is ${[i]}rd row.`);
  }
  for (let j = 0; j < row.length; j++) {
    tot += row[j];
    console.log(`      ${row[j]} is ${[j]}th element.`);
  }
  console.log(tot, "is the sum of all values in the array");
}
//While Loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("");
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10); //cause we need to update new attempt to make the condition false
}
console.log(`Target: ${target} - Guess: ${guess}`);

//break keyword
console.log("");
const targeted = Math.floor(Math.random() * 10);
let guessed = Math.floor(Math.random() * 10);
while (true) {
  if (guessed === targeted) {
    break;
  }
  console.log(guessed + "=Guessed", targeted + "=Targeted");
  guessed = Math.floor(Math.random() * 10); //cause we need to update new attempt to make the condition false
}
console.log(`Congrats!!! Target: ${targeted} , Guess: ${guessed}`);

//for .. of loop
const forOf = ["he", "she", "it", "they"];
for (let noun of forOf) {
  console.log(`'${noun}'`);
}
for (let hi of "yishak") {
  console.log(hi.toUpperCase());
}
console.log("");

//for and for .. of comparsion
let matrix = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
//using normal for loop
for (let i = 0; i < matrix.length; i++) {
  let grid = matrix[i];
  let sum = 0;
  // console.log(grid);
  for (let j = 0; j < grid.length; j++) {
    sum = sum + grid[j];
    // if (sum === 15) {
    //   console.log("Hell yes its 15!!");
    // }
  }
  console.log(`${grid} is summed as = ${sum}`);
}
console.log("-----------------------------");
//using for .. of loop
for (grid of matrix) {
  let sum = 0;
  for (let num of grid) {
    sum += num;
  }
  console.log(`${grid} is summed as = ${sum}`);
}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];
for (let i = 0; i < words1.length; i++) {
  //joins each words1 elems straight to words2 array
  console.log(words1[i] + words2[i]);
}

//iterating over objects uses Object.keys(obj) or Object.values(obj) to iterate through for .. of loop
const movieReviews = {
  Legion: 9.9,
  Transformers: 9.4,
  Avengers: 8.9,
  "The Hobbit": 9.7,
};
for (let mov of Object.keys(movieReviews)) {
  console.log(mov, movieReviews[mov]);
}
let aveRev = 0;
const rating = Object.values(movieReviews);
for (let mov of rating) {
  aveRev += mov;
}
aveRev /= rating.length;
console.log(aveRev);

//for .. in loops used to iterate keys over objects, not used with arrays often
for (let prop in movieReviews) {
  console.log(prop);
}

for (let k in [23, 33, 24, 21]) {
  console.log(k); //outputs the props(indices) not values, cause for .. in loops iterates over keys(properties)
}
