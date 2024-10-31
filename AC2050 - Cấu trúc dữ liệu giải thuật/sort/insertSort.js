// Nguyen Quoc Dat 20231570 | (c) 2024 https://tdcq.me/
// Thay đổi tại line 14 và line 23

function swap(a, i, j) {
  let t;
  t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function sortInsertionSimple(a) {
  let i, j, n = a.length;
  for (i = 1; i < n; i++) {
    for (j = i; j > 0 && a[j] > a[j - 1]; j--)          // chỉnh sửa điều kiện a[j] > a[j - 1]
      swap(a, j, j - 1);
  }
}

function sortInsertionBetter(a) {
  let i, j, n = a.length, t;
  for (i = 1; i < n; i++) {
    t = a[i];
    for (j = i; j > 0 && t > a[j - 1]; j--)             // chỉnh sửa điều kiện t > a[j - 1] 
      a[j] = a[j - 1];
    a[j] = t;
  }
}

// ==================================

let b = a = [5, 1, 6, 2, 4, 3];
console.log(a);

sortInsertionSimple(a);
console.log(a)

sortInsertionBetter(b);
console.log(b)