function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let original = x;
  let reversed = 0;

  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
