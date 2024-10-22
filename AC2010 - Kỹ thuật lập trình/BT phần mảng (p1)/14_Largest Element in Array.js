/*
Given an array. The task is to find the largest element in it.

Example:
Input: arr = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
*/

class Solution {
    findLargest(arr) {
        let max = arr[0]; // đặt max = phần tử đầu tiên của mảng
        for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) { // Nếu phần tử i > max thì gán max = phần tử i
            max = arr[i];
        }
        }
        return max; // Trả về max sau khi duyệt hết mảng
    }
}

const arr = [1, 8, 7, 56, 5];
const s = new Solution();
console.log(s.findLargest(arr)); // 90

/*
Một cách ma giáo hơn của e Tùng :v
Math.max(...arr);
console.log(Math.max(...arr));
*/