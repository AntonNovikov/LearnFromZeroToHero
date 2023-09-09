Reverse Integer
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
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [-231, 231 - 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// This solution is shared from APAS. The highest rated coding interview algorithm learning APP on Android! Download it from here: https://goo.gl/YXD3m2
/** 
 * Last digit is zero, output? 
 * Reversed might overflow? 1000000003 
 */ 
public int reverse(int x) { 
  long out = 0; // result might overflow 
  while (x != 0) { 
    out = out * 10 + x % 10; // append last digit of x 
    x = x / 10; // remove last digit 
  } 
  if (out > Integer.MAX_VALUE || out < Integer.MIN_VALUE) return 0; 
  return (int) out; 
}