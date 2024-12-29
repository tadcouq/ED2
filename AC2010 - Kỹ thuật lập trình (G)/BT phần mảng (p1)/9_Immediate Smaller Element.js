/*
Given an integer array arr of size n. For each element in the array, check whether the right adjacent element (on the next immediate position) of the array is smaller. If next element is smaller, update the current index to that element. If not, then  -1.

Note : You need to make changes in the array itself.

Examples:

Input: n = 5, arr[] = {4, 2, 1, 5, 3}
Output: 2 1 -1 3 -1
Explanation: Array elements are 4, 2, 1, 5, 3. Next to 4 is 2 which is smaller, so we print 2. Next of 2 is 1 which is smaller,so we print 1. Next of 1 is 5 which is greater, so we print -1. Next of 5 is 3 which is smaller, so we print 3.  Note that for last element, output is always  going to be -1 because there is no element on right.

*/

class Solution {
    immediateSmaller(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
            } else {
                arr[i] = -1;
            }
        }
        arr[n - 1] = -1;
        return arr;
    }
}

const arr = [4, 2, 1, 5, 3];
const n = arr.length;

const solution = new Solution();
console.log(solution.immediateSmaller(arr, n)); // [2, 1, -1, 3, -1]
