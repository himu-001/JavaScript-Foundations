// functions
function myname() {
    console.log("Himanshu");
    
}
myname //=> this is function reference
myname(); // function execution

// when declaring a variable in fucntion in js you don't have say its datatype and one more thing in js using return it can return even value for any datatype whereas in cpp if its int return must be int

function add(num1,num2)
{
    console.log(num1+num2);
    
}
add(5, 7);
add('5', '7');
//  //
function add(num1, num2) {
  console.log(num1 + num2);
}
let result = add(5, 7);
console.log("Result", result); //result is undefined as this function doesnot return any value


//
function add1(num1, num2) {
    return num1 + num2;
    console.log("Hima"); // this never gets printed as return exits the function
}
let result1 = add1(5, 7);
console.log("Result", result1);

function add2(num1, num2) {
    console.log("Hima"); // this gets printed as its above return
    return num1 + num2;
}
let result2 = add2(5, 7);
console.log("Result", result1);


function userlogin(username) {
    return `${username} just logged in`;
}
userlogin("Himanshu"); // calling this function doesn't print anything as function only returns you need to use variable to store or you need to use console.log()
console.log(userlogin("Himanshu"));
// if you pass no value in arguments it becomes undefined
console.log(userlogin());

function userlogin1(username) {
    if (!username) //if username === udefined is same as !username and in js you can use == or === to compare but === is preferred more
    {
        console.log("please enter a username");
        return
    }
  return `${username} just logged in`;
}
console.log(userlogin1());

// you can even pass default value to username if username is not given
function userlogin2(username = "Sam") // passing default value
{
  if (
    !username
  ) //if username === udefined is same as !username and in js you can use == or === to compare but === is preferred more
  {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(userlogin2());
