/**
 * Given an array arr[]. The task is to rotate the array by d elements where d ≤ arr.size.
 * 
 * Example:
 * input: arr = [1, 2, 3, 4, 5, 6, 7], d = 2
 * output: [3, 4, 5, 6, 7, 1, 2]
 */

class Solution {
    rotateArray(arr, d) {
        let n = arr.length; 
        let temp = arr.slice(0, d); // tạo mảng temp chứa d phần tử đầu tiên
        arr = arr.slice(d, n).concat(temp); // cắt d phần tử đầu tiên, nối với mảng temp
        return arr; // trả về mảng mới
    }
}

const s = new Solution();
const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
console.log(s.rotateArray(arr, d)); 

