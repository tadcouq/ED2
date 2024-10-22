/**
 * Given an array arr, the task  is to find whether the arr is palindrome or not. If the arr is palindrome then return true else return false.
 * An array is said to be palindrome if its reverse array matches the original array. 
 * 
 * Example:
 * Input: arr = [1, 2, 3, 2, 1]
 * Output: true
 * 
 */

class Solution {
    isPalindrome(arr) {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[start] !== arr[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}

let arr = [1, 2, 3, 2, 1];
let s = new Solution();
console.log(s.isPalindrome(arr)); 

