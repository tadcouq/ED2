// Nguyen Quoc Dat 20231570 | (c) 2024 https://tdcq.me/
// Đổi điều kiện mergeSort từ lớn -> bé. Thay đổi code tại line 22, 37 và sau 43

function sortMergePart(a, l, r) {
  const m = Math.floor((l + r) / 2);
  if (m > l) sortMergePart(a, l, m);
  if (m + 1 < r) sortMergePart(a, m + 1, r);
  mergeParts_aux(a, l, m, r);// <---
}

function sortMerge(a, n) {
  sortMergePart(a, 0, n - 1);
}

function mergeParts_aux(a, l, m, r) {
  const pn = m - l + 1, qn = r - m;
  const p = a.slice(l, l + pn);
  const q = a.slice(m + 1, m + 1 + qn);

  for (let i = 0, j = 0; i < pn || j < qn;) {
    if ((i == pn) || (j < qn && p[i] < q[j])) {            // Đổi điều kiện so sánh
      a[l + i + j] = q[j];
      j++;
    }
    else {
      a[l + i + j] = p[i];
      i++;
    }
  }
}

function mergeParts_inPlace(a, l, m, r) {
  let i, t;
  for (; m < r; m++) {
    t = a[m + 1]; 
    for (i = m; i >= l && a[i] < t; i--)                   // Thay đổi điều kiện
      a[i + 1] = a[i];
    a[i + 1] = t;
  }
}


// ======================================

let a = [5, 1, 6, 2, 4, 3];  // Bỏ b = a đi vì sau khi a sort xong thì b sẽ bị thay đổi => kết quả b không thể hiện rõ
console.log(a);

sortMerge(a, a.length);
console.log(a)

function sortSelectBetter(b, l, r, maxLoops) {          
  let loopCount = 0;
  
  for (let i = l; i < r; i++) {
    let maxIdx = i;
    for (let j = i + 1; j <= r; j++) {
      if (b[j] > b[maxIdx]) {
        maxIdx = j;
      }
      loopCount++;
      if (loopCount >= maxLoops) return; 
    }
    
    if (maxIdx !== i) {
      swap(b, i, maxIdx);
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let b = [5, 1, 12, 2, 4, 3];
console.log(b);
sortSelectBetter(b, 0, b.length - 1, 6); 
console.log(b);
