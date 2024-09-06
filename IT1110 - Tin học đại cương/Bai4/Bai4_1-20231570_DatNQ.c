// 2024/05/05 04:03:19 GMT+7 (c) https://tdcq.me/
// Nhập vào số nguyên (n >= 0) && n < 8 bất kỳ, tính giai thừa của n
// Tính giai thừa, nếu dữ liệu đầu vào n > 8 thì trả kết quả ERROR

#include <stdio.h>

int gt(int n)
{
    int i = 1, gt = 1;
    for (i = 1; i <= n; i++)
    {
        gt = gt * i;
    }
    return gt;
}
int main()
{
    int n;
    scanf("%d", &n);
    if (0 < n && n < 8)
    {
        printf("%d", gt(n));
    }
    else if (n == 0)
    {
        printf("1");
    }
    else
    {
        printf("ERROR");
    }
    return 0;
}