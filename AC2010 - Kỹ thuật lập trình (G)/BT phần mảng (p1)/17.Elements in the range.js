/*
Given an array arr[] containing positive elements. A and B are two numbers defining a range. The task is to check if the array contains all elements in the given range (inclusive).
Note: If the array contains all elements in the given range return true otherwise return false.

Example:
Input: n = 7, A = 2, B = 5, arr[] =  {1, 4, 5, 2, 7, 8, 3}
Output: True
Explanation: It has all elements between range 2-5 i.e 2,3,4,5.
*/

class Solution{
    check_elements(arr, n, A, B){
        let check = new Array(B - A + 1).fill(false); // Create an array of size B - A + 1 and fill it with false
        for(let i = 0; i < n; i++){
            if(arr[i] >= A && arr[i] <= B){
                check[arr[i] - A] = true;
            }
        }
        for(let i = 0; i < B - A + 1; i++){ // Check if all elements are true
            if(check[i] == false){
                return false;
            }
        }
        return true;
    }
}

const arr = [1, 4, 5, 2, 7, 8, 3];
const n = arr.length;
const A = -2;
const B = 11;
const s = new Solution();
console.log(s.check_elements(arr, n, A, B));
