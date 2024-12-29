/*
Given an array arr. Your task is to find the minimum and maximum elements in the array.
Note: Return an array that contains two elements the first one will be a minimum element and the second will be a maximum of an array.

Example:
Input: arr = [3, 2, 1, 56, 10000, 167]
Output: 1 10000
Explanation: minimum and maximum elements of array are 1 and 10000.
*/

class Solution {
    getMinMax(arr) {
        let min = arr[0]; // đặt min = phần tử đầu tiên của mảng
        let max = arr[0]; // đặt max = phần tử đầu tiên của mảng
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) { // Nếu phần tử i < min thì gán min = phần tử i
                min = arr[i];
            }
            if (arr[i] > max) { // Nếu phần tử i > max thì gán max = phần tử i
                max = arr[i];
            }
        }
        return [min, max]; // Trả về mảng chứa min và max sau khi duyệt hết mảng
    }
}

const arr = [3, 2, 1, 56, 10000, 167];
const s = new Solution();
console.log(s.getMinMax(arr)); 
