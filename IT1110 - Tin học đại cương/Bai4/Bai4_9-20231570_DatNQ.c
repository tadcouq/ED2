// 2024/31/05 22:45:32 GMT+7 (c) https://tdcq.me/
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
    double S = 0, x;
    int n, i = 1;

    scanf("%lf", &x);
    scanf("%d", &n);
    if (n < 1 || x < 0)
    {
        printf("Error");
        exit(0);
    }
    for (i = 1; i <= n; i++)
        {
            S = sqrt(x + S);
        }
    
    printf("%.4lf", S);
    return 0;
}