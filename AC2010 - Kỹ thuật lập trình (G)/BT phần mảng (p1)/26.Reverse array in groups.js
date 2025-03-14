/**
 * Given an array arr of positive integers. Reverse every sub-array group of size k.
 * 
 * Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. You shouldn't return any array, modify the given array in place.
 * 
 * Example:
 * Input: k = 3, arr= [1, 2, 3, 4, 5]
 * Output: [3, 2, 1, 5, 4]
 * Explanation: First group consists of elements 1, 2, 3. Second group consists of 4,5.
 */

class Solution {
    reverseSubArray(arr, k) {
        if (k >= arr.length) {
            arr.reverse();
            return;
        }
        for (let i = 0; i < arr.length; i += k) {
            let start = i;
            let end = Math.min(i + k - 1, arr.length - 1);
            while (start < end) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        }
    }
}

const arr = [5, 6 , 8, 9];
const k = 5;
const solution = new Solution();
solution.reverseSubArray(arr, k);
console.log(arr); 

