/**
 * Reverse Integer (easy)
Given a 32-bit signed integer, reverse digits of an integer.
Example 1: Input: 123
Output: 321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [-231, 231 - 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

function reverseInteger(x) {
  const sign = Math.sign(x); // Get the sign of the integer
  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  ); // Reverse the absolute value of the integer

  // Check if the reversed integer is within the 32-bit range
  if (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) {
    return 0; // Return 0 if the reversed integer overflows
  }

  return reversed * sign; // Multiply the reversed integer by the sign to restore the original sign
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21

// let out = 0;
//   while (x != 0) {
//     out = out * 10 + x % 10; // append last digit of x
//     x = x / 10; // remove last digit
//   }
