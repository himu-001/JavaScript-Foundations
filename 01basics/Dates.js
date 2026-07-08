//dates
// In Js month starts from 0 to 11 i.e Jan is zero and december is 11.
let mydate = new Date();
// console.log(mydate)
// console.log(mydate.toString()); // returns a string representation of date

// console.log(mydate.toDateString()); //returns the date as string
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString()); // coverts date and time into string

// let mynewdate = new Date(2026, 3, 25);
// console.log(mynewdate);
// console.log(mynewdate.toDateString());

// you can even pass date as string and here it starts from 1 as js treats date string and numeric arguments different
let newdate = new Date("2034-01-23");
console.log(newdate.toDateString());

// mm-dd-yyyy fomrat
let newdate1 = new Date("01-23-2024");
let mytimestamp = Date.now();
console.log(mytimestamp)
console.log(newdate1.getTime());

// converting the above milliseconds into seconds
console.log(Math.floor(Date.now() / 1000));

console.log(newdate.getDay())
console.log(newdate.getMonth())

console.log(newdate.toLocaleString('default', {
    dateStyle: "medium",
})) // many things you can add timezones you can customize it.