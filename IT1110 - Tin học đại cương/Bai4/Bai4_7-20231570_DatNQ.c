// 2024/23/05 21:40:40 GMT+7 (c) https://tdcq.me/
// lười viết lại đề quá, ựa

#include<stdio.h>
#include<math.h>

int main(){
    double S=0, x;
    int n, i;
    
    scanf("%d", &n);
    scanf("%lf", &x);
    if(n<0){
        printf("Error");
        return 0;
    }
    for(i=0;i<=n;i++){
        S=S+pow(-1, i)*pow(x, i);
    }
    printf("%lf\n", S);
}