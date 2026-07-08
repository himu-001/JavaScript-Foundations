let arr = ["js", "java", "cpp", "python"];

// call back function doesnot have name
// forEach loop
arr.forEach(function (i) {
    console.log(i);
    
})

// forEach using arrow function
arr.forEach((i) => {
    console.log(i);
    
}) 


console.log(" ");
// you can even pass function in for each


function meow(item) {
    console.log(item);
    
}
arr.forEach(meow)

// for each loop fucntion passed has (item, index of an array, and pura array bhi)
arr.forEach((item,index,arr) => {
    console.log(item, index, arr);
    
})


console.log(" ");


// when you fetch data from database it returns array of an object
// array of an object 
const mycoding = [
  {
    language_name: "java",
    extension: "java",
  },
  {
    language_name: "python",
    extension: "py",
  },
  {
    language_name: "c++",
    extension: "cpp",
  },
];

// for each loop to access data inside array of an objects
mycoding.forEach((item) => {
  console.log(item);
    
})

mycoding.forEach((item) => {
  console.log(item.language_name);
});