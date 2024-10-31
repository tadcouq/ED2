// Nguyen Quoc Dat 20231570 | (c) 2024 https://tdcq.me/
// Thay đổi điều kiện tại line 15 và 26 để sort giảm dần, chỉnh sửa thêm sau line 33

function swap(a, i, j) {
  let t;
  t = a[i];
  a[i] = a[j];
  a[j] = t;
}

function sortSelectSimple(a) {
  let i, j, n=a.length;
  for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (a[i] < a[j])                      // Thay đổi '<' -> sort giảm dần  
        swap(a, i, j);
    }
  }
}


function sortSelectBetter(a) {
  let i, j, n=a.length, mi;
  for (i = 0; i < n - 1; i++) {
    for (mi = i, j = i + 1; j < n; j++) {
      if (a[j] > a[mi]) mi = j;           // __________ '>' để sort giảm dần
    }
    if (mi != i)
      swap(a, i, mi);    
  }
}

// ======================================

let a = [5, 1, 6, 2, 4, 3];
console.log(a);

sortSelectSimple(a);
console.log(a)

function sortSelectBetter(b, maxLoops) {  // Thêm maxLoops để chặn lặp vô hạn
  let i, j, n = b.length, mi, loops = 0;
  for (i = 0; i < n - 1 && loops < maxLoops; i++) {
    for (mi = i, j = i + 1; j < n && loops < maxLoops; j++, loops++) {
      if (b[j] > b[mi]) mi = j;           // '>' để sort giảm dần
    }
    if (mi != i)
      swap(b, i, mi);
  }
}

let b = [5, 1, 6, 2, 4, 3];
console.log(b);

sortSelectBetter(b, 3);
console.log(b);
