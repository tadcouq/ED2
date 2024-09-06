#include <stdio.h>
int main() {
    float x,y,z,dtb;

    printf("Nhap diem toan: "); scanf("%f", &x);
    printf("Nhap diem ly: "); scanf("%f", &y);
    printf("Nhap diem hoa: "); scanf("%f", &z);

    dtb = (x + y + z) / 3;
    
    printf("Diem trung binh la: %6.2f", dtb);

    return 0;
}