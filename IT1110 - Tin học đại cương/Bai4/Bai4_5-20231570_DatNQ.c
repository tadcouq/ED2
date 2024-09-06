// 2024/05/05 04:30:11 GMT+7 (c) https://tdcq.me/
/*
Lập chương trình thực hiện các công việc sau:
1. Nhập 3 số thực a,b,c bất kì.
2. Giải và biện luận phương trình bậc 2:
            ax^2+bx+c=0
Tính cả trường hợp với a=0 và trường hợp nghiệm phức

Mô tả giá trị đầu vào:
    Số thực a
    Số thực b
    Số thực c
Mô tả giá trị đầu ra:
    Kết quả
For example:

Dữ liệu đầu vào	    Kết quả
2               |   1.000000
-3              |   0.500000
1               |

*/

#include <stdio.h>
#include <math.h>
#include <stdlib.h>
int main()
{

    float a, b, c;
    scanf("%f%f%f", &a, &b, &c);
    float d;
    d = b * b - 4 * a * c;
    if (a == 0)
    {
        if ((b == 0) && (c == 0))
            printf("Phuong trinh vo so nghiem");
        else if ((b == 0) && (c != 0))
            printf("Phuong trinh vo nghiem");
        else
            printf("%lf", -c / b);
    }
    else
    {
        if (d == 0)
        {
            printf("%f", -b / (2 * a));
        }
        if (d > 0)
        {
            printf("%f\n", (-b + sqrt(d)) / (2 * a));
            printf("%f\n", (-b - sqrt(d)) / (2 * a));
        }
        if (d < 0)
        {
            printf("%f+%.6fi\n", (-b) / (2 * a), (float)sqrt(-d) / (2 * a));
            printf("%f-%.6fi\n", (-b) / (2 * a), (float)sqrt(-d) / (2 * a));
        }
        return 0;
    }
}
