/**
 * Given an array arr of even size, the task is to find a minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half.
 * 
 * Example:
 * Input: arr = [1, 5, 3, 2]
 * Output: 1
 * 
 * Input: arr = [1, 2, 1, 2, 1, 3]
 * Output: 2
 * 
 */

class Solution {
    minValueToBalance(arr) {
        let sum1 = arr.slice(0, arr.length / 2).reduce((a, b) => a + b, 0);
        let sum2 = arr.slice(arr.length / 2).reduce((a, b) => a + b, 0);
        return Math.abs(sum1 - sum2);
    }
}

let arr = [1, 2, 1, 2, 1, 3];
let s = new Solution();

console.log(s.minValueToBalance(arr)); 