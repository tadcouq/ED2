/**
 * Given a number N. The task is to complete the function convertFive() which replaces all zeros in the number with 5 and returns the number.
 * 
 * Example:
 * Input: N = 1004
 * Output: 1554
 * 
 * If there is no 0, output will remain the same.
 */

class Solution {
  convertFive(n) {
    return parseInt(n.toString().replace(/0/g, '5')); // đổi tất cả các số 0 thành 5
  }
}

let n = 14;
let s = new Solution();

console.log(s.convertFive(n)); 