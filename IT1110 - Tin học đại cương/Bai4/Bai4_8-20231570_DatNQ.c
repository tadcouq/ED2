// 2024/31/05 22:40:40 GMT+7 (c) https://tdcq.me/
#include<stdio.h>
#include<math.h>

// Hàm này nhận vào một số nguyên aa và trả về giai thừa của aa. Nếu aa bằng 0, nó trả về 1.
int factorial(int a){
    int factorial = 1;
    if (a == 0){
        return 1;
    }
    else{
        for (int i =1;i<=a;i++){
            factorial = factorial * i;
        }
        return factorial;
    }
}
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
        S=S+pow(x, i)/factorial(i);
    }
    printf("%lf\n", S);
}
