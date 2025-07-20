// let and const dono es6 se hain
// let and const dono dfferent hain, matlab let makes a variable and const makes a constant
// let and const dono khud ko window object mein add karte hain
// let and const both are braces scoped [local scope]

let a;
a = 12;
console.log(a);
// const b;  // this will give an error

// -----------------------------------------------------------------------------------------------
// arrow functions
// purani js mein 3 prakar ke functions the, they were:
// 1: function statement
// 2: function expression
// 3: anonymous function

// nayi js mein 1 prakar ka function hai, jiske 3 roop hain:
// arrow functions
// basic fat arrow function
var print24 = () => {console.log(24);
}
print24();

// fat arrow function with one parameter
// var print36 = (thirtySix) => {console.log(thirtySix);
// }
// now aap chaho to iska fat nikal salte ho
var print36 = thirtySix => {console.log(thirtySix);
}
print36(36);

// fat arrow function with implicit return
var return48 = () => 48;
console.log(return48());

// ----------------------------------------------------------------------------------------------------
// template literals backtick``

// hey 2+2 is 4 and 2-2 is 0 and if 2 is 3+2 and 6 is 3-4 then print hello 

console.log("hey " + 2 + " + " + 2 + " is " + (2+2) + " and " + "2-2 is " + (2-2));

console.log(`hey 2 + 2 is ${2+2} and 2 -2 is ${2-2}`);


// --------------------------------------------------------------------------------------------------------
// default parameters
// parameter mein value assign kar dena default parameter kehte hain
function abcd(prm="default"){
    console.log(prm);
    
}

abcd("twelve");
abcd(122);
abcd(); // undefined


// --------------------------------------------------------------------------------------------------------
// rest and spread
var arr1 = [1,2,3,4,5,6];
var arr2 =arr1 // this is not copy, this is referencing
console.log(arr2);

// to copy, we use spread operator
// ... spread/ rest

var arr3 = [1,2,3,4,5,6,7,7,54,4,6,7,4]
var arr4 = [...arr3] // this is a copy
console.log(arr4);
// spread means ekement ke saare values ko us jagah bikher dena
// rest use hota hia jab aapko bache hue values ek variable mein dalne hain

// rest operator
function abcd2(a,b,c,...d){
    console.log(a,b,c,d);
    
    
}
abcd2(1,2,3,4,5,6,7)


// ------------------------------------------------------------------------------------------------------------
// destructuring
var arr5 = [1,2,3,4]
var [b,c, ...d] = arr5
console.log(b,c, d);

var obj = {name: "harsh", age: 24};
var {age} = obj; // 24

var arr6 = [1,2,3]
var [e,,g] = arr6


// ----------------------------------------------------------------------------------------------------------------
// classes

// -----------------------------------------------------------------------------------------------------------------


// promises
// two situations are there with Promises -> either `Resolve`[then] or `Reject`[catch]
// the variable where the promise is saved can only be 3 different states => PENDING, RESOLVE, REJECT

// var ans = new Promise((res, rej) => {
//     if(true){
//         return res();
//     } 
//     else {
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("Resolved!");
    
// })
// .catch(function(){
//     console.log("Rejected!");
    
// })

// User will ask for a number between 0 to 9 and if the number is below 5 resolve, if not reject
// var ans2 = new Promise((res, rej) => {
//     var num = parseInt(prompt("Enter a number between 0 to 9"))
//     if(num < 5){
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// ans2
// .then(function(){
//     console.log(`Resolved!`);
// })
// .catch(function(){
//     console.log(`Rejected!`);
// })

// var p1 = new Promise((res, rej) => {
//     return res("sabse pehle ghar par aao");
// })

// var p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("gate kholo then gate lagao")
//     }) 
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pakao khana khao")
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("now so jao");
//     })
// })

// p4.then(function(data){
//     console.log(data);
// })

// -----------------------------------------------------------------------------------------------------------
// async await
// async await ".then" lagane se bachata hai jo hum Promises mein use karte the
// function func(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// async function func(){
//     let raw = await fetch(`https://randomuser.me/api/`)
//     let data = await raw.json();
//     console.log(data);
// }
// func()


// ----------------------------------------------------------------------------------------------------------------
// try catch
// JavaScript is an interpreted language
console.log("hey");

try{
    console.log(hey);
}
catch(err){
    console.log(err);   
}
console.log("hey");
