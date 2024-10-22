/**
 * Given a list of names, display the longest name. If there are multiple names of the longest size, return the first occurring name.
 * 
 * Input: names[]=["Apple", "Mango", "Orange", "Banana"]
 * Output: Orange
 * Explanation: names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 
 */

class Solution {
    longestName(names) {
        let max = names[0];
        for (let i = 1; i < names.length; i++) {
            if (names[i].length > max.length) {
                max = names[i];
            }
        }
        return max;
    }
}

const names = ["Apple", "Mango", "Orange", "Banana"];
const solution = new Solution();
console.log(solution.longestName(names)); // Orange

