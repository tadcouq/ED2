// 2024/23/05 20:09:07 GMT+7 (c) https://tdcq.me/
// Viết chương trình nhập số nguyên n và số thực x tính giá trị biểu thức Z = (2x+sqrt(n))/13

#include <stdio.h>
#include <math.h>

void cal(int n, float x) {
    float Z = (2*x + sqrt(n))/13;
    printf("Gia tri cua Z la: %.2f\n", Z);
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