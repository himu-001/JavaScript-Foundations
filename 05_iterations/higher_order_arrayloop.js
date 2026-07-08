// for of loop
// let arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//     console.log(i);
//     if (i == 4) {
//         console.log("meow ghop ghop");
//         break;
//     }
// }

// let str = "Meow Ghop ghop";
// for (const i of str) {
//     console.log(i);
// }

// maps => it has only unique values 
let map = new Map();
map.set('IN', 'India');
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN", "India");
console.log(map);

console.log("Using for of loop on map returns an array");

for (const i of map) {
    console.log(i);
}
// destructuring of an above array;
for (const [key,values] of map) {
    console.log(`${key} :- ${values}`)
}

const obj1 = {
    'game1': 'nfs',
    'game2': 'genshin',
    'game3': 'minecraft'
}
// for (const i of Object.key(obj1)) {
//     console.log(i);
   
// } this for of loop doesn't work on iterating an object