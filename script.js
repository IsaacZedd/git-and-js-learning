/* 

Common trends used when coding:
  - === operator is used instead of == in conditional operations
  - if situation has only 2 conditions(i.e if & else), then use ternary condition operator
  - use !, && and || at a time to write less ifelseif codes
  - use const keyword with Arrays and Objects often
  -

*/

// alert("Gech");
console.log("Hello Deers,".toUpperCase());
console.log(3 > 0, "Fuuck", `${"Username".slice(0, 4).toLowerCase()}`);
console.error("Uncaught error happened!!");
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
console.log(myObject.position, "Yishak!"); // . is used to access object datas
//console.log(myObject.23); //doesn't work using . to access number keys, instead use below method
console.log(myObject["23"]); //[] is used to access value if key is number or symbol(invalid identifier), and it looks for 23 key as a string.
console.log(myObject["2" + "3"]);
console.log(myObject["1 Phone"]); //has to be in quotes as identifier convention is used to

let mn = "username";
console.log(myObject[mn]); //will look for 'username' key to get its value using the var mn
