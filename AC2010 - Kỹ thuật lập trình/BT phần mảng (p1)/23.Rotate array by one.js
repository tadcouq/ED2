/**
 * Given an array arr, rotate the array by one position in clock-wise direction.
 * 
 * Example:
 * Input: arr[] = [1, 2, 3, 4, 5]
 * Output: [5, 1, 2, 3, 4]
 */

class Solution {
    rotate(arr) {
        const last = arr.pop(); // Lấy phần tử cuối cùng
        arr.unshift(last); // Thêm phần tử cuối cùng vào đầu mảng
        return arr; // Trả lại mảng mới sau xoay
    }
}

const arr = [1, 2, 3, 4, 5];
const s = new Solution();
console.log(s.rotate(arr));

