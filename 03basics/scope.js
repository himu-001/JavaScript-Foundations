// // var we don't use beacuse variable is accessed even out of scope, that's why we don't use var

// let a = 20;
// if (true) {
//     let a = 2;
//     const b = 3;
//     // var c = 3;
//     console.log(a);
    
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

// in js you can call function before its declaration
addone(1);
function addone(num) {
    console.log(num);
    
}

// in hoisting you can't call a function beofre its declaration hoisting is bascially assigning function as a variable this will give an error
// meow(99); this will give an error
const hoisting = function meow(num33) {
    console.log("moew");    
}
// meow(((99))); this will also give an error
hoisting(99);// correct way to call