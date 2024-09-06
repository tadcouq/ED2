/*
2024/06/20 (c) https://tdcq.me/

Đề bài:
Nhập mảng n số nguyên từ bàn phím, in ra màn hình các giá trị từ cuối đến giá trị đầu, sau đó tính tổng các phần tử của mảng.
Chú ý:
Nếu n <= 0 in "Error"

    Mô tả giá trị đầu vào:
Dòng đầu tiên chứa số nguyên dương n và là độ dài của mảng đầu vào.
Dòng thứ hai chứa n số nguyên.

    Mô tả giá trị đầu ra:
Dòng đầu tiên là các phần tử của mảng được in theo thứ tự đảo ngược.
Dòng đầu ra thứ hai là tổng các phần tử của mảng

For example:

Dữ liệu đầu vào	    |Kết quả
5                   |5 4 3 2 1
1 2 3 4 5           |15
*/

#include <stdio.h>
#include <stdlib.h>


int main()
{
    int n, i = 0;
    int *A, *B;
    scanf("%d", &n);
    if (n < 0)
    {
        printf("Error");
        return 0;
    }
    A = (int*)malloc(n * sizeof(int));
    B = (int*)malloc(n * sizeof(int));
    for (i = 0; i < n; i++)
    {
        scanf("%d", &A[i]);
    }
    
    for(i=0;i<=n-1;i++){
        B[i]=A[n-1-i];
    }
    for(i=0;i<n;i++){
        printf("%d ", B[i]);
    }
    int S=0;
    for(i=0;i<n;i++){
        S=S+A[i];
    }
    printf("\n%d", S);
    free(A);
    free(B);
}
