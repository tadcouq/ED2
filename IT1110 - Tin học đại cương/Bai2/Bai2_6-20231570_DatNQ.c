#include <stdio.h>
int main() {
    int x,y;
    float tong,hieu,tich,thuong;
    
    scanf("%d", &x);
    scanf("%d", &y);

    tong = x + y;
    hieu = x - y;
    tich = x * y;
    thuong = (float)x / y;

    printf("Tong: %6.2f\n", tong);
    printf("Hieu: %6.2f\n", hieu);
    printf("Tich: %6.2f\n", tich);
    printf("Thuong: %6.2f\n", thuong);
    return 0;
}