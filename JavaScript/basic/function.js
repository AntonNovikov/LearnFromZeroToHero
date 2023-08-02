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

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
for (let i = 0; i <= 5; i++) {
  console.log(i, factorial(i));
}

let counter = 0;
function repeater(char) {
  counter++;
  if (counter === 5) {
    counter = 0;
    return char;
  }
  return char + repeater(char);
}
console.log(repeater("x"));
console.log(repeater("ax3"));
