// Global scope
let globalVar = "Global";
console.log(globalVar); // Output: Global

// Function scope
function outerFunction() {
    // Outer function scope
    let outerVar = "Outer";
    
    function innerFunction() {
        // Inner function scope
        let innerVar = "Inner";
        console.log(globalVar, outerVar, innerVar);
    }

    innerFunction();
}

// Calling the outer function
outerFunction(); // Output: Global Outer Inner

// Block scope
if (true) {
    let blockVar = "Block";
    console.log(blockVar); // Output: Block
}

// Try-catch-finally scope
try {
    throw "Exception";
} catch (e) {
    let catchVar = "Catch";
    console.log(catchVar, e); // Output: Catch Exception
} finally {
    let finallyVar = "Finally";
    console.log(finallyVar); // Output: Finally
}

// Class scope
class MyClass {
    constructor() {
        this.classVar = "Class";
    }

    // Method scope
    classMethod() {
        let methodVar = "Method";
        console.log(this.classVar, methodVar); // Output: Class Method
    }
}

// Creating an instance of the class
const instance = new MyClass();
instance.classMethod();

// Arrow function scope
const arrowFunction = () => {
    let arrowVar = "Arrow";
    console.log(arrowVar); // Output: Arrow
};

arrowFunction();

// Generator function scope
function* generatorFunction() {
    yield "Generator";
}

// Creating a generator and getting the value
const generator = generatorFunction();
console.log(generator.next().value); // Output: Generator

// Async function scope
async function asyncFunction() {
    let asyncVar = "Async";
    return asyncVar;
}

// Calling the async function and handling the promise
asyncFunction().then(value => console.log(value)); // Output: Async

// Promise scope
const promise = new Promise((resolve) => {
    let promiseVar = "Promise";
    resolve(promiseVar);
});

// Handling the resolved promise
promise.then(value => console.log(value)); // Output: Promise

// SetTimeout scope
setTimeout(() => {
    let timeoutVar = "Timeout";
    console.log(timeoutVar); // Output: Timeout
}, 1000);

// Logging the end of the script
console.log("End"); // Output: End
