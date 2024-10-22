/**
 * Given an array of car numbers car[], an array of penalties fine[], and an integer value date. The task is to find the total fine which will be collected on the given date. The fine is collected from odd-numbered cars on even dates and vice versa.
 * 
 * Example:
 * Input : date = 12 car = [2375, 7682, 2325, 2352] fine = [250, 500, 350, 200]
 * Output : 600
 */

class Solution {
    totalFine(date, car, fine) {
        let total = 0; 
        for (let i = 0; i < car.length; i++) {
            if ((date % 2 === 0 && car[i] % 2 !== 0) || (date % 2 !== 0 && car[i] % 2 === 0)) { // nếu ngày chẵn thì thu phạt xe lẻ và ngược lại
                total += fine[i]; // cộng phạt
            }
        }
        return total;
    }
}

let date = 12; 
let car = [2375, 7682, 2325, 2352];
let fine = [250, 500, 350, 200];
let s = new Solution();

console.log(s.totalFine(date, car, fine));
