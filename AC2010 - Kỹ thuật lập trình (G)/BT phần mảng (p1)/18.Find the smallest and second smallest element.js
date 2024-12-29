/**
 * Given an array, arr of integers, your task is to return the smallest and second smallest element in the array. If the smallest and second smallest do not exist, return -1.
 * 
 * Examples:
 * Input: arr[] = [2, 4, 3, 5, 6]
 * Output: 2 3 
 * Explanation: 2 and 3 are respectively the smallest and second smallest elements in the array.
 */

class Solution {
    minAnd2ndMin(arr, n) {
        let first = Number.MAX_VALUE;
        let second = Number.MAX_VALUE;
        for (let i = 0; i < n; i++) {
            if (arr[i] < first) {
                second = first;
                first = arr[i];
            } else if (arr[i] < second && arr[i] != first) {
                second = arr[i];
            }
        }
        if (second == Number.MAX_VALUE) {
            return -1;
        }
        return [first, second];
    }
}

const arr = [2, 4, 3, 5, 6];
const n = arr.length;
const s = new Solution();
console.log(s.minAnd2ndMin(arr, n));
