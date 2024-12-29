/**
 * Given an array of N positive integers where all numbers occur even number of times except one number which occurs odd number of times. Find the exceptional number.
 * 
 * Examples:
 * Test case 1:
 * Input: arr[] = [1, 2, 3, 2, 3, 1, 3]
 * Output: 3
 * 
 * Test case 2:
 * Input: arr[] = [5, 7, 2, 7, 5, 2, 5]
 * Output: 5
 */

class Solution {
    findExceptionalNumber(arr) {
        let result = 0; // tạo biến result để lưu kết quả
        for (let i = 0; i < arr.length; i++) { // duyệt qua từng phần tử của mảng
        result = result ^ arr[i]; // thực hiện phép XOR giữa result và từng phần tử của mảng
        }
        return result; // trả về kết quả
    }
}

let arr = [5, 7, 2, 7, 5, 2, 5];
let s = new Solution();
console.log(s.findExceptionalNumber(arr));
