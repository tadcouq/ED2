// 2024/23/05 20:13:12 GMT+7 (c) https://tdcq.me/
// Viết chương trình nhập số nguyên n và số thực x tính giá trị biểu thức K = (x^2 + x + 1)^n + (x^2 - x + 1)^n . Có sử dụng hàm pow()

#include <stdio.h>
#include <math.h>

void cal(int n, float x) {
    float K = pow(x*x + x + 1, n) + pow(x*x - x + 1, n);
    printf("Gia tri cua K la: %.2f\n", K);
}

int main() {
    int n;
    float x;

    printf("Nhap so nguyen n: ");
    scanf("%d", &n);
    printf("Nhap so thuc x: ");
    scanf("%f", &x);

    cal(n, x);

    return 0;
}