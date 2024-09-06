#include <stdio.h>
#include <math.h>

// Kiểm tra tam giác và tính diện tích
void checkTriangle(int a, int b, int c) {
    if (a + b > c && b + c > a && a + c > b) {
        // Kiểm tra loại tam giác
        if (a == b && b == c)
            printf("Day la tam giac deu.\n");
        else if (a == b || b == c || a == c)
            printf("Day la tam giac can.\n");
        else if (a * a + b * b == c * c || b * b + c * c == a * a || a * a + c * c == b * b)
            printf("Day la tam giac vuong.\n");
        else
            printf("Day la tam giac thuong.\n");
        
        // Tính diện tích tam giác
        float p = (float)(a + b + c) / 2; // Nửa chu vi
        float dientich = sqrt(p * (p - a) * (p - b) * (p - c)); // Diện tích từ công thức Heron
        printf("Dien tich cua tam giac la: %f\n", dientich);
    } else {
        printf("Ba so a, b, c khong tao thanh mot tam giac.\n");
    }
}

int main() {
    int a, b, c;

    printf("Nhap vao ba so nguyen a, b, c: ");
    scanf("%d %d %d", &a, &b, &c);

    checkTriangle(a, b, c);

    return 0;
}
