// // this refers to the object that is executing the current function.
// const user = {
//   username: "hima",
//   prices: 9,

//   welcomemssage: function () {
//     console.log(
//       `${this.username}, just loggedIn charge him this price ${this.prices}`,
//     );
//     console.log(this); // this prints the current context
//   },
// };
// user.welcomemssage();
// // changing the current context simply means variable
// user.username = "Meow";
// user.welcomemssage();
// console.log(this); // this only works for current context and here there's no current context hence it return empty object but in browser if return window object

// function one() {
//   username: "Meow";
//   console.log(this);
// }
// one();

// function one1() {
//   let username1 = "Meow";
//   console.log(this.username1); // this gives undefined bcoz this is used to access properties of an object.
// }
// one1();

// // arrow function
// const dom = (a,b) => {
//     return a+b
// }
// console.log(dom(4, 5));
// // Normal function: this is determined by how the function is called.
// // Arrow function: this is inherited from the surrounding scope. It does not get its own this.
// const dom1 = () => {
//     console.log(this);// empty object
// }
// console.log(this);

// // implicit return arrow function
const logh = (a, b) => a + b;
console.log(logh(4, 5));
// if you use () you don't have to type return and if you use {} you have to type return
const log = (a, b) => (a + b); // this will be used in react
console.log(log(4, 5));

// to retun an object in javascript
const dom2 = () => ({ username: "hima" })
console.log(dom2());

// function returns value in global execution context
