// 2024/04/05 20:01:27 GMT+7 (c) https://tdcq.me/

#include <stdio.h>
#include <math.h>

int main(){
    double x, y;
    scanf("%lf%lf", &x, &y);
    printf("%lf\n%lf\n%lf", pow(x,2) + pow(y,2), pow(x+y,2), pow(x-y,2));
    return 0;
}
