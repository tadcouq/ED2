// 2024/23/05 20:20:12 GMT+7 (c) https://tdcq.me/
// Viết chương trình nhập số nguyên n và số thực x tính giá trị biểu thức T = 1/2*(x*n) + 2*32x^3 . Có sử dụng hàm pow()

#include <stdio.h>
#include <math.h>

void cal(int n, float x) {
    float T = 1/2*(x*n) + 2*32*pow(x, 3);
    printf("Gia tri cua T la: %.2f\n", T);
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
