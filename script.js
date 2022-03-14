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

let concatedArray = emptyArr.concat(lotto);
console.log(concatedArray);
console.log(shoppingList.includes("Television"));
console.log(shoppingList.includes("Television", 3)); //starting from specified index = 3
