/*
3.	Viết hàm jumpSearch theo hàm mũ tăng dần, 
Biết: đầu vào là một mảng các số thực và giá trị cần tìm, đầu ra là chỉ số của phần tử nếu tìm thấy, -1 nếu không tìm thấy.
*/

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false; // Phát hiện không sắp xếp
        }
    }
    return true; // Mảng sắp xếp
}

function jumpSearch(arr, x) {
    if (!isSorted(arr)) {                        // Kiểm tra nếu mảng không sắp xếp
        return -1;                               // Trả về -1
    }

    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));        // Bước nhảy = căn bậc 2 của n
    let prev = 0;                               // Chỉ số phần tử trước
    while (arr[Math.min(step, n) - 1] < x) {    // Khi phần tử nhảy nhỏ hơn x, tìm phần tử trước
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {                        // Nếu prev lớn hơn hoặc bằng n
            return -1;
        }
    }
    while (arr[prev] < x) {                     // Nếu phần tử trước nhỏ hơn x
        prev++;
        if (prev === Math.min(step, n)) {       // Nếu prev = step hoặc prev = n
            return -1;
        }
    }
    if (arr[prev] === x) {                      // Nếu phần tử trước bằng x
        return prev;                            // Trả về chỉ số
    }
    return -1;                                  // Ngược lại tất cả các trường hợp trả về -1
};

// Test cases
let arr1 = [0, 12, 1, 3, 4, 5, 6, 7, 8, 9];     // Chưa sắp xếp
let x1 = 5;
let index1 = jumpSearch(arr1, x1);
console.log(index1);                            // Output: -1

let arr2 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 12];     // Đã sắp xếp
let x2 = 5;
let index2 = jumpSearch(arr2, x2);
console.log(index2);                            // Output: 4
