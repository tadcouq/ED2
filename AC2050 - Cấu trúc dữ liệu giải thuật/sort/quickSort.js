// Nguyen Quoc Dat 20231570 | (c) 2024 https://tdcq.me/
// Thay đổi code tại line 28, 41, 42, 46 - 49, bỏ bớt 1 function qsPartitionHoare lặp trong source code vì chưa hiểu rõ ý định cải thiện

function swap(a, i, j) {
   let t;
   t = a[i];
   a[i] = a[j];
   a[j] = t;
}

function sortQuickRange(a, l, r) {
   if (l < r) {
       const pi = qsPartitionHoare(a, l, r);
       sortQuickRange(a, l, pi - 1);
       sortQuickRange(a, pi + 1, r);
   }
}

function sortQuick(a) {
   sortQuickRange(a, 0, a.length - 1);
}

function qsPartitionLomuto(a, l, r) {
   const pivot = a[r];
   let i, j;

   for (i = l, j = l; j < r; j++) {
       if (a[j] > pivot)                     // Thay đổi '>' -> sort giảm dần
           swap(a, i++, j);
   }

   swap(a, i, r);
   return i;
}

function qsPartitionHoare(a, l, r) {
   const pivot = a[r];
   let i, j;

   for (i = l, j = r - 1; i < j;) {
       for (; a[i] > pivot && i < j; i++);   // Thay đổi '>'
       for (; a[j] <= pivot && i < j; j--);  // vẫn là thay đổi điều kiện '<='
       swap(a, i, j);
   }

   if (a[r] < a[i]) return r;                // _________________________ '<'
   swap(a, i, r);
   return i;
}

let a = [6, 7, 10, 11, 9, 5, 8];
console.log("=== Before:", a, "\n");

sortQuick(a);

console.log("=== After:",a,"\n");
