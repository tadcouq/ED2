/*
You are given an integer array arr[]. The task is to find the sum of it.

Example:
Input: arr[] = [1, 2, 3, 4]
Output: 10
Explanation: 1 + 2 + 3 + 4 = 10.

Constraints:
1 <= arr.size <= 10^5
1 <= arr[i] <= 10^4
*/

class Solution {
    sum(arr) {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }
}

const arr = [1, 2, 3, 4];
const sol = new Solution();
console.log((arr)); // Trả arr là gì?
console.log(sol.sum(arr)); // đưa ra đáp án