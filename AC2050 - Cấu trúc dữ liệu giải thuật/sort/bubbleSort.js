// Nguyen Quoc Dat 20231570 | (c) 2024 https://tdcq.me/
// Bubble Sort từ lớn đến bé, nếu a[j] < a[j+1] thì đổi chỗ line 17 và 30, còn lại cấu trúc giữ nguyên

function swap(a, i, j) {
  let t;
  t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function sortBubbleSimple(a) {
  let i, j, n = a.length;

  for (i = n; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      countCmp++;
      if (a[j] < a[j + 1]) {            // chỉnh sửa điều kiện từ line 16 -> 19, thêm {} để đảm bảo câu lệnh thực thi đúng
        countSwap++;
        swap(a, j, j + 1);
      }              
    }
  }
}

function sortBubbleSimpleV2(a) {
  let i, j, n = a.length, sorted = false;

  for (i = n; !sorted && i > 0; i--) {
    sorted = true;                      // <===
    for (j = 0; j < i - 1; j++) {
      if (a[j] < a[j + 1]) {            // chỉnh sửa điều kiện
        swap(a, j, j + 1);
        sorted = false;                 // <===
      }
    }
  }
}

let a = [5, 4, 3, 2, 1, 0];
console.log("Before sort:", a);

let countCmp = 0, countSwap = 0;
sortBubbleSimple(a);
console.log("After bubbleSimple(a):", a);
console.log("countCmp = ", countCmp, "countSwap =", countSwap);


let b = [5, 1, 6, 2, 4, 3];
console.log("Before Sort:",b);
sortBubbleSimpleV2(b);
console.log("After bubleSimpleV2(a):", b);
