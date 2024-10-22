/*
Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m, where both arrays may contain duplicate elements. 
The task is to determine whether array a2 is a subset of array a1. It's important to note that both arrays can be sorted or unsorted. 
Additionally, each occurrence of a duplicate element within an array is considered as a separate element of the set.

Example:
Input:
a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
a2[] = {11, 3, 7, 1, 7}
Output: Yes
Explanation: a2[] is a subset of a1[]
*/

class Solution {
    isSubset( a1, a2, n, m) {
        let map = new Map(); // Tạo map để lưu trữ các phần tử của mảng a1
        for(let i = 0; i < n; i++) { // Duyệt qua mảng a1
            if(map.has(a1[i])) { // Nếu map đã chứa phần tử a1[i] thì tăng giá trị của phần tử đó lên 1
                map.set(a1[i], map.get(a1[i]) + 1); // Tăng giá trị của phần tử a1[i] lên 1
            } else {
                map.set(a1[i], 1); // Nếu map chưa chứa phần tử a1[i] thì thêm phần tử đó vào map với giá trị là 1
            }
        }
        for(let i = 0; i < m; i++) { // Duyệt qua mảng a2
            if(map.has(a2[i])) { // Nếu map chứa phần tử a2[i]
                if(map.get(a2[i]) === 0) { // Nếu giá trị của phần tử a2[i] trong map bằng 0 thì trả về "No"
                    return "No";
                } else { 
                    map.set(a2[i], map.get(a2[i]) - 1); // Giảm giá trị của phần tử a2[i] đi 1
                }
            } else {
                return "No"; // Nếu map không chứa phần tử a2[i] thì trả về "No"
            }
        }
        return "Yes"; // Nếu không có trường hợp nào trả về "No" thì trả về "Yes"s
    }
}

const a1 = [11, 7, 1, 13, 21, 3, 7, 3];
const a2 = [11, 3, 7, 1, 7];
const n = a1.length;
const m = a2.length;
const solution = new Solution();
console.log(solution.isSubset(a1, a2, n, m)); // Trả kqua
