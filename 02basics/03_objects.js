// const tinderuser =tinderuser(); singleton object as it is constructed using  object constructor

// below all are non singleton object
const tinderuser = {};
tinderuser.id = "123";
tinderuser.name = "Hima";
tinderuser.isLoggedIn = false;
// console.log(tinderuser)

// you can even create nested objects inside an objects
const newuser = {
  email: "Hima@gmail.com",
  fullname: {
    userfullname: {
      fisrtname: "himanshu",
      lastname: "kumar",
    },
  },
};
// console.log(newuser.fullname.userfullname)
// console.log(newuser.fullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "A", 4: "B" };
const obj3 = { obj1, obj2 }; // here one problem it returns object of an object
console.log(obj3);

// another method to solve above problem

let obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// more used syntax i.e. spread
let obj5 = { ...obj1, ...obj2 };
console.log(obj5);

// you can create array of objects
const objj = [
  {},
  {},
  {
    email: "Meow@gmail.com",
  },
];
console.log(
  "Separating the above code and below on output for better understanding",
);

console.log(tinderuser);

console.log(Object.keys(tinderuser)); // returns array of keys of an object
// same for values
console.log(Object.values(tinderuser)); // returns array of keys of an object
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("isLogged"));
console.log(tinderuser.hasOwnProperty("isLoggedIn"));
// below is the modern method
console.log(Object.hasOwn(tinderuser, "isLoggedIn"));
console.log();
console.log();
console.log();
console.log("destructuring and json api info");
console.log();

let course = {
  coursename: "MERN",
  courseinstructor: "Hitesh",
  price: 999,
};
let { courseinstructor } = course; // this is same as course.courseinstructor
console.log(courseinstructor);

// if you think courseinstructor is too big name then you can even name according to you
let { courseinstructor : instructor /* your own name for your convenience */  } = course; // this is same as course.courseinstructor
console.log(instructor);