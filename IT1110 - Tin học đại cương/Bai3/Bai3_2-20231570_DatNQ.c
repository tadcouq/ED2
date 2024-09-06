// 2024/04/05 19:55:39 GMT+7 (c) https://tdcq.me/
#include<stdio.h>
#define pi 3.14159

int main(){
    double r;
    scanf("%lf", &r);
    if (r > 0) printf("%lf\n%lf", 2*r*pi, r*r*pi); 
    else printf("ERROR");
    return 0;
}
