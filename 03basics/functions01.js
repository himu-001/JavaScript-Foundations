function CalculateCartPrice(num1) {
    return num1;
}
console.log(CalculateCartPrice(200,400,500));
//  ... sometimes called rest or spread operator
// to overcome the above problem we use rest/spread operator

function CalculateCartPrice1(...num1) {
    return num1;
}
console.log(CalculateCartPrice1(200,400,500)); //this returns array

// passing an object
const user = {
    Username: "Hima",
    price:299,
}
function ObjectPassing(anyuser) {
    return `User ${anyuser.Username} just loggedin and price is ${anyuser.price}`;
}
// console.log(ObjectPassing(user));
console.log(ObjectPassing( {
    Username: "hima",
    price:999
}));

// passing an array
const array01 = [400, 500, 600];
function GetArray(New_Array) {
  console.log(`Array is ${New_Array}`);
}
GetArray(array01,);

const array1 = [400, 500, 600]
function GetArray(...New_Array) {
    console.log(`Array is ${New_Array}`);
}
GetArray(array1,array1);