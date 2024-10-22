/*
You are given an array arr. You need to print elements of arr in alternate order (starting from index 0).

Example:
Input: arr[] = [1, 2, 3, 4]
Output: 1 3

Constraints:
1 <=  arr.size <= 10^5
1 <= arr[i] <= 10^5
*/

// Solution trả kết quả theo dạng từng số

/*
class Solution {
    print(arr) {
        for (let i = 0; i < arr.length; i += 2) {
            console.log(arr[i]);
        }
    }
}
*/


// Solution trả kết quả theo dạng mảng

class Solution {
    print(arr) {
        let res = [];
        for (let i = 0; i < arr.length; i += 2) {
            res.push(arr[i]);
        }
        return res;
    }
}

const arr = [1, 2, 3, 4];
const sol = new Solution();
console.log(arr);
console.log(sol.print(arr)); // đưa ra đáp án