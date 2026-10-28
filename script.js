
/*
 * Learning Modern JavaScript (ES6+)
 * Topics: Variables, Arrow Functions, Template Literals,
 * Default Parameters, Rest and Spread, Destructuring,
 * Classes, Promises, Async/Await, and Error Handling.
 */

// ============================================================================
// 1. LET AND CONST
// ============================================================================

// let aur const dono ES6 (ES2015) mein introduce hue the.

// let allows variable reassignment.
// const prevents reassignment after initialization.

// Both let and const are block-scoped.
// Block scope means variables are accessible only within their
// enclosing block, such as { } in an if statement or loop.

// Top-level let and const declarations do not become
// properties of the browser's window object.

// Note: const does not make objects or arrays immutable.
// It only prevents reassignment of the variable.

let a;
a = 12;
console.log(a);

// const b;
// This gives a SyntaxError because const must be initialized
// when it is declared.

// Example:
// const b = 24;


// ============================================================================
// 2. ARROW FUNCTIONS
// ============================================================================

// Traditional JavaScript supports:
// 1. Function declarations (function statements)
// 2. Function expressions
// 3. Anonymous functions (functions without a name)

// ES6 introduced arrow functions as another way to define functions.

// Arrow functions can have different syntactical forms:
// 1. Basic arrow function
// 2. Arrow function with parameters
// 3. Arrow function with implicit return

// Note: Traditional functions are still supported in modern JavaScript.
// Arrow functions also differ from traditional functions in how
// they handle 'this', 'arguments', and constructor usage.


// Basic arrow function

var print24 = () => {
    console.log(24);
};

print24();


// Arrow function with one parameter

// Parentheses are optional when there is exactly one simple parameter.

// var print36 = (thirtySix) => {
//     console.log(thirtySix);
// };

var print36 = thirtySix => {
    console.log(thirtySix);
};

print36(36);


// Arrow function with implicit return

// If the function body contains a single expression,
// we can omit curly braces and the return keyword.

// The expression's result is returned automatically.

var return48 = () => 48;

console.log(return48());


// ============================================================================
// 3. TEMPLATE LITERALS
// ============================================================================

// Template literals were introduced in ES6.

// They use backticks (` `) instead of regular quotation marks.

// Template literals support:
// 1. String interpolation using ${expression}
// 2. Multiline strings
// 3. Embedded JavaScript expressions

// Traditional string concatenation

console.log(
    "hey " + 2 + " + " + 2 + " is " + (2 + 2) +
    " and " + "2-2 is " + (2 - 2)
);


// Using template literals

console.log(`hey 2 + 2 is ${2 + 2} and 2 - 2 is ${2 - 2}`);


// ============================================================================
// 4. DEFAULT PARAMETERS
// ============================================================================

// Function parameter mein default value assign karna
// default parameter kehlata hai.

// Agar function call mein argument provide nahi kiya jata,
// ya explicitly undefined pass kiya jata hai,
// toh default value use hoti hai.

function abcd(prm = "default") {
    console.log(prm);
}

abcd("twelve"); // Output: twelve

abcd(122); // Output: 122

abcd(); // Output: default


// ============================================================================
// 5. REST AND SPREAD SYNTAX
// ============================================================================

// Rest aur spread dono mein ... syntax use hota hai,
// lekin dono ka purpose alag hota hai.


// ---------------------------------------------------------------------------
// Spread Syntax
// ---------------------------------------------------------------------------

// Spread syntax expands the elements of an iterable,
// such as an array, into individual values.

// It can also be used to create a shallow copy of an array.

var arr1 = [1, 2, 3, 4, 5, 6];

var arr2 = arr1;

// This does not create a separate array.
// arr1 and arr2 refer to the same array object.

console.log(arr2);


// Using spread syntax to copy an array

var arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 54, 4, 6, 7, 4];

var arr4 = [...arr3];

// arr4 is a new array containing the elements of arr3.

// Note: Spread creates a shallow copy.
// Nested objects or arrays are still shared by reference.

console.log(arr4);


// ---------------------------------------------------------------------------
// Rest Parameters
// ---------------------------------------------------------------------------

// Rest parameters collect remaining function arguments
// into a single array.

// Matlab bache hue arguments ko ek array mein store karna.

function abcd2(a, b, c, ...d) {
    console.log(a, b, c, d);
}

abcd2(1, 2, 3, 4, 5, 6, 7);

// Output:
// 1 2 3 [4, 5, 6, 7]


// ============================================================================
// 6. DESTRUCTURING
// ============================================================================

// Destructuring allows us to extract values from arrays
// or properties from objects into individual variables.


// Array destructuring

var arr5 = [1, 2, 3, 4];

var [b, c, ...d] = arr5;

// b = 1
// c = 2
// d = [3, 4]

// Here, ...d is a rest element.
// It collects the remaining array elements.

console.log(b, c, d);


// Object destructuring

var obj = {
    name: "harsh",
    age: 24
};

var { age } = obj;

// Extracts the age property from obj.

console.log(age); // Output: 24


// Skipping elements during array destructuring

var arr6 = [1, 2, 3];

var [e, , g] = arr6;

// e = 1
// The second element is skipped.
// g = 3

console.log(e, g);


// ============================================================================
// 7. CLASSES
// ============================================================================

// ES6 introduced class syntax for creating objects
// using constructors, methods, and inheritance.

// JavaScript classes are built on top of its
// prototype-based inheritance system.

// Class examples can be added here during further practice.


// ============================================================================
// 8. PROMISES
// ============================================================================

// A Promise represents the eventual completion or failure
// of an asynchronous operation.

// A Promise can be in one of three states:
// 1. Pending   - Initial state; not yet settled.
// 2. Fulfilled - Operation completed successfully.
// 3. Rejected  - Operation failed.

// resolve() is used to resolve a Promise.
// reject() is used to reject a Promise.

// .then() handles fulfillment.
// .catch() handles rejection.

// Note: Calling resolve() with another Promise or thenable
// can make the Promise follow that value's eventual state.


// ---------------------------------------------------------------------------
// Basic Promise Example
// ---------------------------------------------------------------------------

// var ans = new Promise((res, rej) => {
//     if (true) {
//         return res();
//     } else {
//         return rej();
//     }
// });

// ans
//     .then(function () {
//         console.log("Resolved!");
//     })
//     .catch(function () {
//         console.log("Rejected!");
//     });


// ---------------------------------------------------------------------------
// Promise Example with User Input
// ---------------------------------------------------------------------------

// User se 0 se 9 ke beech ek number input lena hai.

// Agar number 5 se chhota hai, Promise resolve hoga.
// Otherwise, Promise reject hoga.

// This example uses prompt(), which is available
// in browser environments.

// var ans2 = new Promise((res, rej) => {
//     var num = parseInt(prompt("Enter a number between 0 to 9"), 10);

//     if (num < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// });

// ans2
//     .then(function () {
//         console.log("Resolved!");
//     })
//     .catch(function () {
//         console.log("Rejected!");
//     });

// Note: This example does not separately validate whether
// the input is actually an integer between 0 and 9.


// ---------------------------------------------------------------------------
// Promise Chaining
// ---------------------------------------------------------------------------

// Promise chaining allows asynchronous operations
// to execute in a sequence.

// A .then() callback can return another Promise.
// The next .then() waits for that Promise to settle.

// var p1 = new Promise((res, rej) => {
//     return res("sabse pehle ghar par aao");
// });

// var p2 = p1.then(function (data) {
//     console.log(data);

//     return new Promise((res, rej) => {
//         return res("gate kholo then gate lagao");
//     });
// });

// var p3 = p2.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//         return res("khana pakao khana khao");
//     });
// });

// var p4 = p3.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//         return res("now so jao");
//     });
// });

// p4.then(function (data) {
//     console.log(data);
// });


// ============================================================================
// 9. ASYNC / AWAIT
// ============================================================================

// async/await was introduced in ES2017 (ES8).

// It provides a cleaner way to write asynchronous code
// that uses Promises.

// async functions always return a Promise.

// await pauses execution within the async function
// until the awaited Promise settles.

// It does not block the entire JavaScript thread.

// async/await can make Promise-based code easier to read
// compared with long .then() chains.


// ---------------------------------------------------------------------------
// Fetch API Using .then()
// ---------------------------------------------------------------------------

// function func() {
//     fetch("https://randomuser.me/api/")
//         .then(function (raw) {
//             return raw.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }


// ---------------------------------------------------------------------------
// Fetch API Using async/await
// ---------------------------------------------------------------------------

// async function func() {
//     let raw = await fetch("https://randomuser.me/api/");

//     let data = await raw.json();

//     console.log(data);
// }

// func();

// Note: In real applications, network requests should
// include error handling.

// fetch() rejects for network failures, but HTTP error
// responses such as 404 or 500 do not automatically
// cause the Promise to reject.


// ============================================================================
// 10. TRY / CATCH
// ============================================================================

// JavaScript engines generally compile JavaScript internally
// before or during execution, often using JIT compilation.

// try/catch is used to handle exceptions.

// The try block contains code that might throw an error.
// The catch block handles the thrown error.

// If an exception is caught, execution can continue
// after the catch block.

console.log("hey");

try {
    console.log(hey);

    // 'hey' is not declared, so this throws a ReferenceError.
} catch (err) {
    console.log(err);
}

console.log("hey");

// The final console.log() still executes because
// the error was handled by the catch block.
