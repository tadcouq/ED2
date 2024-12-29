/**
 * Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.
 * 
 * Examples:
 * Test case 1:
 * Input: arr[] = [111, 222, 333, 444, 555]
 * Output: true
 * Explanation: All the elements of the array are palindrome. (arr[0] = 111)
 * 
 * Test case 2:
 * arr[] = [121, 131, 20]
 * Output: false
 * Explanation: The elements of the array are not palindrome. (arr[2] = 20)
 * 
 */

class Solution {
  isPalindromicArray(arr) {
    return arr.every((num) => {
      return num === parseInt(num.toString().split('').reverse().join(''));
    });
  }
}

let arr = [121, 131, 365];
let s = new Solution();
console.log(s.isPalindromicArray(arr));
