/*
Given an array arr, swap the kth element from the beginning with the kth element from the end.

Note: 1-based indexing is followed.

Example:
Input: k = 3, arr = [1, 2, 3, 4, 5, 6, 7, 8]
Output: [1, 2, 6, 4, 5, 3, 7, 8]
Explanation: 3rd element from beginning is 3 and 3rd element from end is 6, so we replace 3 & 6.
*/

class Solution {
    swapKth(arr, k) {
        const n = arr.length; // Độ dài của mảng
        const temp = arr[k - 1]; // Lưu giá trị của phần tử thứ k từ đầu
        arr[k - 1] = arr[n - k]; // Gán giá trị của phần tử thứ k từ đầu bằng giá trị của phần tử thứ k từ cuối
        arr[n - k] = temp; // Gán giá trị của phần tử thứ k từ cuối bằng giá trị đã lưu
        return arr;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Cho mảng arr
const k = 3; // Cho k = 3
const solution = new Solution();
console.log(solution.swapKth(arr, k)); // [1, 2, 6, 4, 5, 3, 7, 8]
