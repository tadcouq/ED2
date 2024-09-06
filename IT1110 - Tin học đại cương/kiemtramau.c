/*
Viết 1 chương trình yêu cầu người dùng nhập các giá trị x và n tính biểu thức sau
S = 1 - x + (x^2)/2! - (x^3)/3! + ... + (-1)^n * (x^n)/n!

Chú ý:
- Hiển thị kết quả với 4 chữ số thập phân
- Sử dụng hàm pow(x, y) trong thư viện math.h để tính x^y
- Sử dụng hàm factorial(n) để tính n!
- Nếu n < 1 hoặc x < 0 in ra "Error"

Mô tả giá trị đầu vào: số dương x và số nguyên dương n

Mô tả giá trị đầu ra: giá trị của biểu thức S

For example:
|===================|===================|
|Dữ liệu đầu vào    |Kết quả            |
|===================|===================|
|1 1                |0.0000             |
*/

#include <stdio.h>
#include <math.h>

int factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int x, n;
    scanf("%d %d", &x, &n);
    if (n < 1 || x < 0) {
        printf("Error");
        return 0;
    }
    double S = 0;
    for (int i = 0; i <= n; i++) {
        S += pow(-1, i) * pow(x, i) / factorial(i);
    }
    printf("%.4lf", S);
    return 0;
}