// Object.getOwnPropertyDescriptors(obj) is a JavaScript method that returns all own property descriptors of an object.

// whereas Object.getOwnPropertyDescriptor(obj,"property") only returns one 

// Instead of returning just the values (like Object.keys() or Object.entries()), it returns detailed information about each property

// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const obj = Object.create(null);


const adoption = {
    name: "Cat",
    price: 20000,
    isAvailable: true,

    hello: function () {
        console.log("meow"); 
    }
};
console.log(Object.getOwnPropertyDescriptor(adoption, "name"));


// ✅ You can change configurable from true → false.
// ❌ You cannot change it back from false → true.

// enumerable decides whether a property shows up when you iterate over an object.

// defineProperty()is used to manipulate one property of object and defineProperties() for multiple
// Object.defineProperty(adoption, "name", {
//     writable: false,
//     enumerable:false
// })

//console.log(Object.getOwnPropertyDescriptor(adoption, "name"));

// Object.entries() returns an array of [key, value] pairs.
// We use for...of to iterate over that array.

for (let [key,values] of Object.entries(adoption)) {
    if (typeof values !== 'function') {
        // console.log(`${key} : ${values}`); 
        
    }
}

// above loop is working as enumerable is true what if i set enumerable false -> it wont work

Object.defineProperty(adoption, "name", {
    enumerable:false
})

// here only name is not iterable hence we dont get in o/p but other properties has enumerable true so they are iterable

/*`
Object.defineProperty()` works on a single property, whereas `Object.defineProperties()` works on multiple properties at once. However, neither method can automatically make all properties `enumerable`, `writable`, or `configurable`. With `Object.defineProperties()`, you still need to specify the descriptor for each property manually, or generate those descriptors using a loop.
*/


// if you want all of it to become non iterable 
for (const key of Object.keys(adoption)) {
    Object.defineProperty(adoption, key, {
        enumerable:false
    })
    
}
console.log(Object.getOwnPropertyDescriptor(adoption,"name"));


for (const [key,values] of Object.entries(adoption)) {
    if (typeof values !== 'function') {
        console.log(`${key} : ${values}`)
    }
}
