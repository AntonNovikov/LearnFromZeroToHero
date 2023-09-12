public class PalindromeNumber {
    public static boolean isPalindrome(int x) {
        // Handle negative numbers
        if (x < 0) {
            return false;
        }
        int original = x;
        int reversed = 0;

        while (x != 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }
        return original == reversed;
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(isPalindrome(121));  // Output: true
        System.out.println(isPalindrome(-121)); // Output: false
        System.out.println(isPalindrome(10));   // Output: false
    }
}


// This solution is shared from APAS. The highest rated coding interview algorithm learning APP on Android! Download it from here: https://goo.gl/YXD3m2
// public class PalindromeNumber2 {
//     public bool IsPalindrome(int x) {
//         // Special cases:
//         // As discussed above, when x < 0, x is not a palindrome.
//         // Also if the last digit of the number is 0, in order to be a palindrome,
//         // the first digit of the number also needs to be 0.
//         // Only 0 satisfy this property.
//         if(x < 0 || (x % 10 == 0 && x != 0)) {
//             return false;
//         }

//         int revertedNumber = 0;
//         while(x > revertedNumber) {
//             revertedNumber = revertedNumber * 10 + x % 10;
//             x /= 10;
//         }

//         // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
//         // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
//         // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
//         return x == revertedNumber || x == revertedNumber/10;
//     }
// }