/*
Given an array arr containing non-negative integers. Count and return an array ans where ans[i] denotes the number of smaller elements on right side of arr[i].

Input: arr[] = [12, 1, 2, 3, 0, 11, 4]
Output: [6, 1, 1, 1, 0, 1, 0]
Explanation: There are 6 smaller elements right after 12. There is 1 smaller element right after 1. And so on.

Constraints:
1 ≤ arr.size() ≤ 10^6
0 ≤ arr[i]  ≤ 10^8
*/

class Solution {
    countSmallerElements(arr) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            let count = 0;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    count++;
                }
            }
            res.push(count);
        }
        return res;
    }
}

const arr = [ 12, 1, 2, 3, 0, 11, 4 ];
const sol = new Solution();
console.log(arr);
console.log(sol.countSmallerElements(arr)); // đưa ra đáp án