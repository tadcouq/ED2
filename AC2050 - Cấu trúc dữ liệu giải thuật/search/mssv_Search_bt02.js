/*
2.	Tương tự bài 1, hãy viết hàm giải quyết bài toán tìm kiếm thông tin sinh viên theo mssv bằng giải thuật đổi chỗ (transpose). 
Hàm trả về chỉ số của phần tử tìm được sau khi đổi chỗ nếu tìm thấy, ngược lại nếu không tim thấy trả về -1. 
Biết mssv thuộc kiểu chuỗi.
*/

const fs = require('fs');
const filename = './dataStudent.json';

function readJsonFile(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

function transposeSearch(aSV, mssv) {
    let index = -1;                         // Trả về -1 nếu không tìm thấy
    for (let i = 0; i < aSV.length; i++) {  // Duyệt mảng sinh viên
        if (aSV[i].id === mssv) {           // Nếu tìm thấy mssv
            index = i;                      // Lưu lại chỉ số
            if (i > 0) {                    // Di chuyển phần tử lên trên phần tử trước đó
                let temp = aSV[i];
                aSV[i] = aSV[i - 1];
                aSV[i - 1] = temp;
            }
            break;                          // Thoát khỏi vòng lặp
        }
    }
    return index;                           // Trả về chỉ số  
};

let aSV = readJsonFile(filename);
let mssv = "00000082";
let index = transposeSearch(aSV, mssv);

console.log("Giá trị trước khi Transpose:", index);
console.log("Giá trị sau khi Transpose:", index - 1);

// Giới hạn lại danh sách sinh viên chỉ hiện 5 sinh viên tính từ index sau khi Transpose
let limit = 5;
let result = aSV.slice(index - 1, index - 1 + limit);
console.log("Danh sách sinh viên sau khi giới hạn:", result);