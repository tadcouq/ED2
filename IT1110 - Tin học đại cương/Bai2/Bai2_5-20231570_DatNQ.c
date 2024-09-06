#include <stdio.h>
int main() {
    int a,b,c;
    float tong;
    
    printf("Nhap a: "); scanf("%d", &a);
    printf("Nhap b: "); scanf("%d", &b);
    printf("Nhap c: "); scanf("%d", &c);

    tong = a + b + c;

    printf("Tong cua 3 so la: %f", tong);
    pringf("Trung binh cua 3 so la: %f", tong/3);

    return 0;
}