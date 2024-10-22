/**
 * Given two arrays arr1 and arr2 of equal size, the task is to find whether the given arrays are equal. 
 * Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.
 * Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal..
 * 
 * Example:
 * Input: arr1[] = [1, 2, 5, 4, 0], arr2[] = [2, 4, 5, 0, 1]
 * Output: true
 * Explanation: Both the array can be rearranged to [0,1,2,4,5]
 */

class Solution {
    check(arr1, arr2) {
        // check độ dài của 2 mảng, lệch = alex
        if (arr1.length !== arr2.length) {
            return false;
        }

        // Sort 2 mảng
        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => a - b);

        // So sánh từng phần tử của 2 mảng sau sort
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true; // 2 mảng giống nhau
    }
}

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];
const s = new Solution();
console.log(s.check(arr1, arr2)); // true


