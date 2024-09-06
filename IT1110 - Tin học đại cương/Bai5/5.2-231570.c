/*
2024/06/20 (c) https://tdcq.me/
Đề bài:
Nhập mảng số nguyên từ bàn phím. Tính trung bình cộng các số âm, tổng các số dương và đưa kết quả ra màn hình.
Mô tả giá trị đầu vào:
- Dòng đầu tiên cho biết số phần tử mảng 𝑛.
- Dòng thứ 2 chứa giá trị của n phần tử mảng, các phần tử cách nhau một dấu cách.

Mô tả giá trị đầu ra:
Một dòng gồm 2 giá trị cách nhau 1 dấu cách:
- Giá trị trung bình cộng các số âm. nếu mảng chỉ toàn số âm, in ra màn hình Mảng không có số dương.
- Tổng các số dương, nếu mảng chỉ toàn số dương in ra màn hình Mảng không có số âm.

For example:
|===================|=================================|
|Dữ liệu đầu vào    |Kết quả                          |
|===================|=================================|
|2                  |-492.000000 295.000000           |
|295 -492           |                                 |
|===================|=================================|
|5                  |Mang khong co so am 15.000000    |
|1 2 3 4 5          |                                 |
|===================|=================================|
|2                  |-1.000000 Mang khong co so duong |
|-1 -1              |                                 |
|===================|=================================|

Sử dụng hàm malloc trong C, cấp phát bộ nhớ cho mảng bằng hàm này
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
    float sum = 0;
    int count = 0;
    int sumPositive = 0;
    int countPositive = 0;
    for (int i = 0; i < n; i++) {
        if (A[i] < 0) {
            sum += A[i];
            count++;
        } else if (A[i] > 0) {
            sumPositive += A[i];
            countPositive++;
        }
    }
    if (count == 0) {
        printf("Mang khong co so am %.6f", sumPositive / countPositive);
    } else if (countPositive == 0) {
        printf("%.6f Mang khong co so duong", sum / count);
    } else {
        printf("%.6f %.6f", sum / count, sumPositive);
    }
    free(A);
    return 0;
}