/*
1.	Sử dụng JavaScript để cài đặt hàm (function) để giải quyết bài toán tìm kiếm bằng giải thuật Move-to-Front.
Đầu vào của hàm là mảng các đối tượng thuộc lớp sinh viên Student, việc tìm kiếm được thực hiện trên thuộc tính mssv thuộc kiểu string.
Hàm trả về: chỉ số của phần tử trước khi move-to-front nếu tìm thấy, ngược lại trả về -1.
*/

// Đọc file JSON
const fs = require('fs');
const filename = './dataStudent.json';

function readJsonFile(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

// Hàm tìm kiếm Move-to-Front
function mtfSearch(aSV, mssv) {
    let index = -1;                         // Trả về -1 nếu không tìm thấy
    for (let i = 0; i < aSV.length; i++) {  // Duyệt mảng sinh viên
        if (aSV[i].id === mssv) {           // Nếu tìm thấy mssv
            index = i;                      // Lưu lại chỉ số
            if (i > 0) {                    // Di chuyển phần tử lên đầu mảng
                let temp = aSV[i];
                aSV.splice(i, 1);
                aSV.unshift(temp);
            }
            break;                          // Thoát khỏi vòng lặp
        }
    }
    return index;                           // Trả về chỉ số  
};

let aSV = readJsonFile(filename);
let mssv = "00000092";
let index = mtfSearch(aSV, mssv);

console.log("Giá trị trước khi MTF:", index);
console.log("Danh sách sinh viên sau khi MTF:", aSV);

// Giới hạn lại danh sách sinh viên chỉ hiện 5 sinh viên đầu tiên tính từ index sau khi MTF
let limit = 5;
let result = aSV.slice(0, limit);
console.log("Danh sách sinh viên sau khi giới hạn:", result);
