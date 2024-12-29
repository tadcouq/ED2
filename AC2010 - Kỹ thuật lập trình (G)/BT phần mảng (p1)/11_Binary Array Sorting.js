/*
Given a binary array arr of size n. The task is to arrange the array in increasing order.
Note: The binary array consists of only 0  and 1.

Example:
Input: 
n = 5
arr = 1 0 1 1 0
Output: 
0 0 1 1 1
Explanation: 
After arranging the elements in increasing order, elements will be as 0 0 1 1 1.
*/

class Solution {
    binSort(n, arr) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] === 0) {
                count++;
            }
        }
        for (let i = 0; i < count; i++) {
            arr[i] = 0;
        }
        for (let i = count; i < n; i++) {
            arr[i] = 1;
        }
        return arr;
    }
}

const n = 5;
const arr = [1, 0, 1, 1, 0];
const solution = new Solution();
console.log(solution.binSort(n, arr)); 

