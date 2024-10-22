/*
Given an array arr[] of positive integers. The task is to return the count of the number of odd and even elements in the array.

Note: Return an array of two elements where the first one in the count of odd & second one is the count of even.

Example:
Input: arr[] = [1, 2, 3, 4, 5]
Output: 3 2
Explanation: There are 3 odd elements (1, 3, 5) and 2 even elements (2 and 4).
*/

class Solution {
    countOddEven(arr) { // arr: mảng đầu vào
        let odd = 0;
        let even = 0;
        for (let i = 0; i < arr.length; i++) { // Duyệt qua từng phần tử của mảng
            if (arr[i] % 2 === 0) { // Nếu phần tử chia hết cho 2 hoặc bằng 0 thì tăng biến even lên 1
                even++;
            } else {
                odd++;
            }
        }
        return [odd, even];
    }
}

const arr = [1, 4, 1, 0, 2];
const s = new Solution();
console.log((arr));
console.log(s.countOddEven(arr)); // Trả đáp án