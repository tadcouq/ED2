/*
Given an array arr of distinct elements, the task is to return an array of all elements except the two greatest elements in sorted order.

Example:
Input: arr[] = [2, 8, 7, 1, 5]
Output: [1, 2, 5] 
Explanation: Here we return an array contains 1 , 2, 5 and we leave two greatest elements 7 & 8. 
*/

class Solution {
    findElements(arr) {
        arr.sort((a, b) => a - b);
        return arr.slice(0, arr.length - 2);
    }
}

const arr = [2, 8, 7, 1, 5];
const solution = new Solution();
console.log(solution.findElements(arr)); // [1, 2, 5]

