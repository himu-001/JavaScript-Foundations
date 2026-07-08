// using map 
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let New_Nums = myNums.map((item) => {
    return item + 10;
})
// console.log(New_Nums);

// we can use map on map or filter or anything this is calle chaining using function upon function
// New_Nums = myNums.map().map().map().filter()

New_Nums = myNums
                 .map((item) => item * 10)
                 .map((itm) => itm+10)
                 .filter((item)=>item>40)

                
console.log(New_Nums);
