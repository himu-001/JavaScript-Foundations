// as we know for of loop doesn't works on object hence we use different loops like for-in loop

let obj1 = {
  js: "Javascript",
  cpp: "c++",
  py: "python",
  java: "java",
};

// syntax
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;

//     const element = object[key];

// }

// now iterating over our object which was declared earlier
for (const key in obj1) {
  console.log(key); //printing key
  console.log("values below");

  console.log(obj1[key]); // printing values
}

for (const key in obj1) {
  console.log(`${key} is an extension for ${obj1[key]}`);
}

let arr = ["js", "ruby", "Python", "java", "cpp"];
for (const key in arr) {
  console.log(arr[key]);
  console.log(key);
}

// forof loop in array prints value whereas forin loop prints index or key of an array until you want to print the value

let map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN", "India");
// forin loop doesn't works on map, it returns nothing no value
for (const key in map) {
  console.log(key);//no o/p as for in doesnt work on map
  
}
