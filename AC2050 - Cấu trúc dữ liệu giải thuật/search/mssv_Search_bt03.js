/*
3.	Viết hàm jumpSearch theo hàm mũ tăng dần, 
Biết: đầu vào là một mảng các số thực và giá trị cần tìm, đầu ra là chỉ số của phần tử nếu tìm thấy, -1 nếu không tìm thấy.
*/

function jumpSearch(arr, x) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));        // Bước nhảy = căn bậc 2 của n
    let prev = 0;                               // Chỉ số phần tử trước
    while (arr[Math.min(step, n) - 1] < x) {    // Nếu phần tử cuối nhỏ hơn x
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

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 10;
let index = jumpSearch(arr, x);
console.log(index);