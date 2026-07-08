// == checks if equal or not whereas === checks even type same for != and !==
if (2 == '2') {
    console.log("true");//this executes 
    
}
if (2 === '2') {
    console.log("meow treu");// this doesnot
    
}
let balance = 100;
if (balance!==200) {
    console.log(++balance);
    
}
// implicit scope
balance = 300
if (balance < 500) console.log(++balance); // but don't use it always use braces they are good practice

