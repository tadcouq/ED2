/**
 * Given an array, arr[] of positive elements, and an integer k, the task is to left-rotate the array k indexes.
 * Note: Rotate the array even if the k is greater than the size of the array. In these cases after every full array rotation, the array comes the same as the original array.
 * 
 * Example:
 * Input: arr = [1, 2, 3, 4, 5], k = 2
 * Output: [3, 4, 5, 1, 2]
 */

class Solution {
    rotate(arr, k) {
        const n = arr.length;
        k = k % n;
        const result = [];
        for (let i = k; i < n; i++) {
        result.push(arr[i]);
        }
        for (let i = 0; i < k; i++) {
        result.push(arr[i]);
        }
        return result;
    }
}

const s = new Solution();
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(s.rotate(arr, k));



