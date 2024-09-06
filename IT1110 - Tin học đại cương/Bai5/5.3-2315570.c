/*
2024/06/21 (c) https://tdcq.me/
Đề bài:
Nhập mảng 𝑛 số nguyên bất kỳ từ bàn phím. Sắp xếp dãy số theo thứ tự tăng dần và đưa kết quả ra màn hình (Mỗi phần tử cách nhau một dấu cách).
Mô tả giá trị đầu vào:
- Dòng đầu tiên cho biết số phần tử mảng 𝑛.
- Dòng thứ 2 chứa giá trị của 𝑛 phần tử mảng, mỗi phần tử cách nhau một dấu cách.
Mô tả giá trị đầu ra:
Các phần tử in ra thành 1 dòng, cách nhau 1 dấu cách. 
For example:
Dữ liệu đầu vào	    |Kết quả
5                   |1 2 3 4 5
1 4 3 5 2           |
*/

#include <stdio.h>
#include <stdlib.h>
#define MAX 1000

int main() {
    int n;
    int *A;
    scanf("%d", &n);
    A = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &A[i]);
    }
    for (int i = 0; i < n - 1; i++) {
        //vì sau mỗi lần lặp, số cặp cần so sánh lại giảm đi 1, do phần tử cuối cùng đã nằm đúng vị trí
        for (int j = i + 1; j < n; j++) {
            if (A[i] > A[j]) {
                int temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++) {
        printf("%d ", A[i]);
    }
    free(A);
    return 0;
}