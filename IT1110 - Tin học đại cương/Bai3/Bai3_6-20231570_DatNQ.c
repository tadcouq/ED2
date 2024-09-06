// 2024/04/05 20:22:07 GMT+7 (c) https://tdcq.me/
#include<stdio.h>
#include <math.h>
double power(double x, int x1, double y, int y1){
    double f;
    f=pow(x, x1)*pow(y, y1);
    return f;
}
int main(){
    double x, y, F;
    scanf("%lf", &x);
    scanf("%lf", &y);
    F=power(x, 0, y, 6)+
    power(x, 1, y, 5)+
    power(x, 2, y, 4)+
    power(x, 3, y, 3)+
    power(x, 4, y, 2)+
    power(x, 5, y, 1)+
    power(x, 6, y, 0);
    printf("%.6lf", F);
}
