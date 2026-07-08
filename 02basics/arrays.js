// // array
// const arrray = [1, 22, 34]
// // in javaacript in array you can use different data types too
// const arrat = [1.2, 2, 'himanshu'];
// console.log(arrat);

// // another declaration method
// const arrat1 = new Array(1, 2, 4)
// console.log(arrat1);

// // arrat1.push(90)
// // console.log(arrat1);
// // arrat1.pop();
// // console.log(arrat1);
// arrat1.unshift(9) // inserts elements at the starting of an array
//  console.log(arrat1);
// arrat1.shift() // remove the first element from array
// console.log(arrat1)

// console.log(arrat1.includes(9))
// console.log(arrat1.indexOf(9)); // as 9 is not present in array it will return minus 1

// const newaart = arrat1.join();
// console.log(newaart);
// console.log(typeof newaart);
// slice
const arra = [1, 2, 3, 4, 5, 6];
console.log("Slice");
const arm = arra.slice();
console.log("A", arm);
console.log("original array", arra);
// splice
console.log("Splice");

const arm1 = arra.splice(1,3);
console.log("B", arm1);
console.log("Original array", arra);
//  splice manipulates original array i.e it removes the element from the array including last index

// pushing array in array actually adds array inside an array same in the case of concat
const hero = [1, 2, 3, 34];
const xzero = [77, 88, 99];
// hero.push(xzero);
// console.log(hero);
// hero.concat(xzero);
// console.log(hero)

// but if you concat and store in variable it pushes correctly;
// const meow = hero.concat(xzero);
// console.log(meow);

// another method spread;
const newhero = [...hero, ...xzero];
console.log(newhero);

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const mom = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10]
const mom1 = mom.flat(Infinity);
console.log(mom1);

// from converts given value(String,or array like object) into array
console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));
console.log(Array.from(122345)); // this return no value empty array as it is not iterable

console.log(Array.from({ name: "Himanshu" })) // interesting case as not iterable hence empty array you have to say you want to make array from what

// of - A set of elements to include in the new array object.Returns a new array from a set of elements
let score = 100;
let score1 = 200;
let score3 = 300;
console.log(Array.of(score,score1,score3))
