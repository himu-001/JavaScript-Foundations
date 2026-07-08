let arr = [1, 2, 3, 4, 5];
const initial_value = 0;
let sum_with_initial = arr.reduce(
    (acc, curr_val) => {
        return acc + curr_val;
    }
,initial_value)
// console.log(sum_with_initial);


sum_with_initial = arr.reduce((acc, curr_val) => {
    // console.log(`Accumulator Value ${acc}, current vale ${curr_val}`);
    
  return acc + curr_val;
}, 0);
// console.log(sum_with_initial);



let Cart = [
  {
    item_name: "JS course",
    price: 2999,
  },
  {
    item_name: "Python course",
    price: 999,
  },
  {
    item_name: "Mobile Dev course",
    price: 5999,
  },
  {
    item_name: "Data Science course",
    price: 12999,
  },
];
const add_Cart = Cart.reduce((acc, curr_val_of_item) => {
    return acc+curr_val_of_item.price;
}, 0);

console.log(add_Cart);

