
#include <stdio.h>
int main()
{
    float a,b,tong; 

    printf("Nguyen Quoc Dat - 20231570\n");
    printf("Nhap a: "); 
    scanf("%f",&a); 
    printf("Nhap b: "); 
    scanf("%f",&b); 

    tong=a+b; 
    printf("tong=%f\n",tong);
    printf("%.lf + %.lf = %.lf",a,b,tong); 
    
    return 0;
}
