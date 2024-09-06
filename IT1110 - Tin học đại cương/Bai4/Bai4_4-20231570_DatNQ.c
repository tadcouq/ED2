// 2024/05/05 04:22:22 GMT+7 (c) https://tdcq.me/
// Nhập 2 số nguyên dương a, b bất kỳ, tìm ước số chung lớn nhất và bội sô chung nhỏ nhất của a và b
// Sử dụng vòng lặp while để giải bài toán, kiểm tra input, nếu input không hợp lệ thì kết thúc chương trình và in ra "ERROR"

#include <stdio.h>
#include <stdlib.h>

int find_max(int a, int b)
{
    int max;
    if (a > b)
        max = a;
    else
        max = b;
    return max;
}
void BCNN(int a, int b)
{
    int i = 0;
    for (i = find_max(a, b); i <= (a * b); i++)
    {
        if (i % a == 0 && i % b == 0)
        {
            printf("%d\n", i);
            break;
        }
    }
}
void UCLN(int a, int b)
{
    while (a * b != 0)
    {
        if (a > b)
        {
            a %= b; // a = a % b
        }
        else
        {
            b %= a;
        }
    }
    printf("%d\n", a + b);
}
int main()
{
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > 1000 || a < 0 || b > 1000 || b < 0)
    {
        printf("ERROR");
        exit(0);
    }
    UCLN(a, b);
    BCNN(a, b);
}