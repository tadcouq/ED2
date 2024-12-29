/**
 * You are given an array of integers, your task is to divide the array into two sub-arrays (left and right) containing half of the array elements. Find the sum of the subarrays and then return the multiply of both the subarrays.
 *
 * Note: If the length of the array is odd then the right half will contain one element more than the left half.
 * Examples :
 * Input : arr = [1, 2, 3, 4]
 * Output : 21
 * Explanation: Sum up an array from index 0 to 1 = 3, Sum up an array from index 2 to 3 = 7. Their multiplication is 21.
 */

class Solution {
    multiply(arr) {
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < arr.length / 2; i++) { // chia mảng thành 2 phần
            sum1 += arr[i]; // sum1 = cộng các số tại mảng 1 lại với nhau
        }

        for (let i = arr.length / 2; i < arr.length; i++) {
            sum2 += arr[i]; // tương tự với mảng 2
        }

        return sum1 * sum2; // trả về tích của 2 số
    }
}

const arr = [1, 2, 3, 4];
const solution = new Solution();
console.log(solution.multiply(arr)); 
