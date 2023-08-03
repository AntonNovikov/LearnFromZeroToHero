// // процедура
// function sum2(a, b) {
//   console.log(a + b);
// }

// // function declaration
// function name(a, b) {
//   return;
// }

// // function expression
// const sum = (function (a, b) {
//   return a + b;
// })(
//   // IIFE
//   function (a, b) {
//     return a + b;
//   }
// )(2, 4);

// // arrow function
// const sumArrow = (a, b) => a + b;

// scope

// return

// yield

//  prompt("Text Here");
// var stringVar = prompt("Text Here");
// var intVar = parseInt(prompt("Text Here"));

// alert("Alert Text Here");

// isNaN(varHere); //Returns true or false.

// confirm("Message Text Here"); // true or false
// var answerVar = confirm("Message Text Here");

// function name ( empty or ?parameters ) { empty statement return}
// name (empty ?argumetns)

// recursion

// function recurse(){
//     return recurse()
//  break;
// }

// function factorial(n) {
//   return n === 0 ? 1 : n * factorial(n - 1);
// }
// for (let i = 0; i <= 5; i++) {
//   console.log(i, factorial(i));
// }

// let counter = 0;
// function repeater(char) {
//   counter++;
//   if (counter === 5) {
//     counter = 0;
//     return char;
//   }
//   return char + repeater(char);
// }
// console.log(repeater("x"));
// console.log(repeater("ax3"));

// synchrone
console.log("I'm first");
console.log("I'm second");
console.log("I'm third");

// async
console.log("I'm first");
setTimeout(() => console.log("I have to be second, but i'm third"), 0);
console.log("I thought I'm last but now I'm second");

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    throw new Error("failer");
  } catch (error) {
    console.error(error.message);
  }
} // возращает Promise

getUsers().then(console.log);
console.log("first");
console.log("second");
// const getUsers = async () => {}
