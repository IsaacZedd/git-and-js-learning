/*

Common trends used:
  

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
