#include<stdio.h>
#include<math.h>
#include<stdlib.h>
double element(double x, int n){
    if(n==1) return 1+x;
    else return pow(x, n)/n;
}
int main(){
    int n, i=0; 
    double S=0, x;
    scanf("%lf", &x);
    scanf("%d", &n);
    if(n<1||x<0){
        printf("Error");
        exit(0);
    }
    for(i=1;i<=n;i++){
        S=S+element(x, i);
    }
    printf("%.4lf", S);
    return 0;
}