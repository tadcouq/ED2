/**
 * As we know, Ishaan has a love for chocolates.
 * He has bought a huge chocolate bar that contains N chocolate squares.
 * Each of the squares has a tastiness level which is denoted by an array A[].
 * 
 * Ishaan can eat the first or the last square of the chocolate at once.
 * Ishaan has a sister who loves chocolates too and she demands the last chocolate square.
 * Now, Ishaan being greedy eats the more tasty square first.
 * Determine the tastiness level of the square which his sister gets.
 * 
 * Example:
 * Input: arr[] = {5, 3, 1, 6, 2}
 * Output: 1
 */

class Solution {
    IsshanSisterChocolate(arr) {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[start] > arr[end]) {
                start++;
            } else {
                end--;
            }
        }
        return arr[start];
    }
}

let s = new Solution();
let arr = [5, 3, 1, 6, 2];

console.log(s.IsshanSisterChocolate(arr));