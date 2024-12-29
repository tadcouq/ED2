/**
 * Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.
 * 
 * Example:
 * Input: arr[] = [2, 4, 1, 3, 5]
 * Output: 3
 * Explanation: The third largest element in the array [2, 4, 1, 3, 5] is 3.
 */

class Solution {
    thirdLargest(arr) {
        let n = arr.length; // length of the array
        if (n < 3) return -1; // nếu độ dài mảng nhỏ hơn 3 thì trả về -1

        let first = arr[0]; // first, second, third lần lượt là 3 số lớn nhất
        let second = -Infinity;
        let third = -Infinity;

        for (let i = 1; i < n; i++) { // duyệt qua từng phần tử của mảng
            if (arr[i] > first) {    // nếu phần tử thứ i lớn hơn first
                third = second;
                second = first;
                first = arr[i];
            } else if (arr[i] > second) { // nếu phần tử thứ i lớn hơn second
                third = second;
                second = arr[i];
            } else if (arr[i] > third) {  // nếu phần tử thứ i lớn hơn third
                third = arr[i];
            }
        }

        return third === -Infinity ? -1 : third; // nếu third vẫn giữ giá trị ban đầu thì trả về -1, ngược lại trả về third
    }
}

const arr = [2, 4, 1, 3, 5];
const s = new Solution();
console.log(s.thirdLargest(arr)); 
