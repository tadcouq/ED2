/*
2024/06/21 (c) https://tdcq.me/
Đề bài
Viết chương trình cho phép nhập vào 1 mảng số nguyên (tối đa 10 phần tử), in ra màn hình tích của 2 phần tử liên tiếp lớn nhất. Nếu mảng chỉ có 1 phần tử trả về kết quả là 0. Nếu tích lớn nhất là một số âm thì trả về 0.
Mô tả giá trị đầu vào:
- Dòng đầu tiên chứa số nguyên n: số phần tử của mảng (2 <= n <=10)
- Dòng thứ 2 chứa danh sách các số cách nhau khoảng trắng
Mô tả giá trị đầu ra:
Tích 2 phần tử liên tiếp lớn nhất.

For example:
Dữ liệu đầu vào	    |Kết quả đúng
5                   |27
1 9 3 2 6           |
====================|=============                    
4                   |18
-3 -6 2 4           |
====================|=============                            
1                   |0
10                  |
====================|=============         
2                   |45
9 5                 |
====================|=============         
5                   |0
1 -8 2 -3 4         |
====================|=============         
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, i = 0, j = 0, temp = 0;
    int *A;

    scanf("%d", &n);
    if (n < 0 && 10 < n)
    {
        printf("Error");
        return 0;
    }
    A = (int *)malloc(n * sizeof(int));
    for (i = 0; i < n; i++)
    {
        scanf("%d", &A[i]);
    }
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n - 1 - i; j++)
        {   // tại sao lại có -i?
            // vì sau mỗi lần lặp, số cặp cần so sánh lại giảm đi 1, do phần tử cuối cùng đã nằm đúng vị trí
            if (A[j] * A[j + 1] >= temp)
            {
                temp = A[j] * A[j + 1];
            }
        }
    }

    printf("%d ", temp);
}