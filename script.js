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
