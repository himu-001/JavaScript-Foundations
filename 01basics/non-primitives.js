// Reference (Non primitive)

// Array, Objects, Functions

const obj = {
  firstname: "himanshu",
  isLoggedIn: true,
};
obj.firstname = "Mr. H"; // here we are not chnaging menory refernces only primitive values hnece const working
obj.lastname = "Kumar";
console.log(obj.firstname);
console.log(obj.lastname);
console.log(typeof obj);
console.log(obj["firstname"]);

//array
let arr = ["hi", 1, true, "bye"];
console.log(arr[0]);

//explicit type conversion
let isValue = "2";
console.log(Number(isValue));
console.log(Number(null));
console.log(Number(undefined));
