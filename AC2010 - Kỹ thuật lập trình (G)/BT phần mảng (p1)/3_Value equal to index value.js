/*
Given an array arr. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing of the array.

Input: arr[] = [15, 2, 45, 4 , 7]
Output: 2 , 4
Explanation: 
Here, arr[2] = 2 exists here.
and arr[4] = 4 exists here.

Constraints:
1 ≤ arr.size ≤ 10^5
1 ≤ arr[i] ≤ 10^6
*/

class Solution {
    valueEqualToIndex(arr) {
        let res = []; // Khởi tạo mảng rỗng
        for (let i = 0; i < arr.length; i++) { // Duyệt qua từng phần tử của mảng
            if (arr[i] === i + 1) { // Nếu phần tử thứ i bằng với chỉ số i + 1
                res.push(i + 1); // Thêm i + 1 vào mảng res
            }
        }
        return res; // Trả về mảng res sau khi duyệt xong
    }
}

const arr = [15, 2, 45, 4, 7];
const sol = new Solution();
console.log(arr); // Trả arr là gì?
console.log(sol.valueEqualToIndex(arr)); // đưa ra đáp án