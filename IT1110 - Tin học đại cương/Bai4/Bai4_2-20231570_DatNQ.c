// 2024/05/05 04:10:01 GMT+7 (c) https://tdcq.me/
// Số nguyên tố là số nguyên dương lớn hơn 1 và chỉ chia hết cho 1 và chính nó
// Nhập vào số nguyên dương n, kiểm tra xem n có phải số nguyên tố hay không

#include <stdio.h>
#include <math.h>

int main()
{
    int n;
    scanf("%d", &n);
    if (n == 2){
        printf("La so nguyen to");
    }
    else if (n < 2 || n%2 == 0){  //Loại những số <2 và chia hết cho 2
        printf("Khong phai so nguyen to");
    }
    else if (n > 2 && n%2 != 0 ){ //Những số >2 và k chia hết cho 2
        int i, count=2;
        for (i = 2; i <= sqrt(n); i++){
            if (n % i == 0){
                count++;
            }
        }
        if(count==2){
            printf("La so nguyen to");
        }
        else{
            printf("Khong phai so nguyen to");
        }
    }
}
