// immediately invoked function expressions (IIFE)
// global scope variable causes pollution sometimes to remove those pollution we are using iife

(function chai() {
    console.log("Chai");
})();
// When writing multiple IIFEs (Immediately Invoked Function Expressions), you must separate them with a semicolon ;

(() => {
    console.log("Chai");
})();

(function name() {
    console.log("meow")
})();