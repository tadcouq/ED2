/*
3.	Viết hàm jumpSearch theo hàm mũ tăng dần, 
Biết: đầu vào là một mảng các số thực và giá trị cần tìm, đầu ra là chỉ số của phần tử nếu tìm thấy, -1 nếu không tìm thấy.

Bước nhảy = 2^n, với n bắt đầu từ 0
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
    let step = 1;                                // Bước nhảy ban đầu = 2^0 = 1
    let prev = 0;

    // Tìm phạm vi chứa phần tử x
    while (step < n && arr[step - 1] < x) {
        prev = step;
        step *= 2;                               // Tăng bước nhảy theo 2^n
    }

    // Thu hẹp phạm vi tìm kiếm trong khoảng [prev, min(step, n)]
    let end = Math.min(step, n);
    for (let i = prev; i < end; i++) {
        if (arr[i] === x) {
            return i;                            // Trả về chỉ số nếu tìm thấy
        }
    }

    return -1;                                   // Không tìm thấy
}

// Test cases
let arr1 = [0, 12, 1, 3, 4, 5, 6, 7, 8, 9];     // Chưa sắp xếp
let x1 = 5;
console.log(jumpSearch(arr1, x1));              // Output: -1

let arr2 = [0, 1, 3, 4, 5, 6, 7, 8, 9, 12];     // Đã sắp xếp
let x2 = 5;
console.log(jumpSearch(arr2, x2));              // Output: 4