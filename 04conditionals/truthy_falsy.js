let username = "Got email"; //true
if (username) {
  console.log("Meow");
} else {
  console.log("GhopGhop");
}
username = ""; //in case of empty string condition false
if (username) {
  console.log("Meow");
} else {
  console.log("GhopGhop");
}
username = []; // in case of empty array condition true
if (username) {
  console.log("Meow");
} else {
  console.log("GhopGhop");
}

// Falsy values => false,0,-0, BigInt 0n,"",null,undefined,NaN
let falsyvalues = () => {
  console.log(`Falsy values => false,0,-0, BigInt 0n,"",null,undefined,NaN`);
};
falsyvalues();

// truthy values =>all non falsy values + "false","0","-0"," "(string with space are truthy values),{},[],function(){}
let truthyvalues = () => {
  console.log(
    `truthy values =>all non falsy values + "false","0","-0"," "(string with space are truthy values),{},[],function(){}`,
  );
};
truthyvalues();

// to check array is empty
username = [];
if (username.length === 0) {
  console.log(`empty`);
}
// to check object is empty
// use Object.keys(<variable>) ----> this creates an array now use length function to check emptyness;
 let username1 = {};
if (Object.keys(username1).length === 0) {
  console.log(`empty`);
}

// nullish coalescing operator (??) ---> used for null an undefined
let val1;
// val1=5 ?? 10 // it selects 5
// val1=null ?? 10 // it selects 10
// val1=undefined ?? 10 // it selects 10
// val1=null ?? 10 ?? 20 // it selects 10 , fist value gets assigned

// ternary operator
condition ? true : false

const price = 90;
price <=80 ? console.log("less than 80"): console.log("greater than 80");
;



