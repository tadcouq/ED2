/*
2024/06/21 (c) https://tdcq.me/
Đề bài
Viết chương trình cho phép nhập vào 1 mảng số nguyên (tối đa 10 phần tử), in ra màn hình tổng của 2 phần tử liên tiếp lớn nhất. Nếu mảng chỉ có 1 phần tử trả về kết quả là 0. Nếu tổng lớn nhất là một số âm thì trả về 0.

Mô tả giá trị đầu vào:
- Dòng đầu tiên chứa số nguyên n: số phần tử của mảng (2 <= n <=10)
- Dòng thứ 2 chứa danh sách các số cách nhau khoảng trắng
Mô tả giá trị đầu ra:
Tổng 2 phần tử liên tiếp lớn nhất.

For example:
Dữ liệu đầu vào	    |Kết quả
5                   |12
1 9 3 2 6           |

Cách làm : Ý tưởng tương tự bài 5.4, có điều bài 5.4 hỏi tích, bài này hỏi tổng
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, i = 0, j = 0, temp = 0;
    int *arr;

    scanf("%d", &n);
    if (2 <= n && 10 >= n)
    {
        arr = (int *)malloc(n * sizeof(int));
        for (i = 0; i < n; i++)
        {
            scanf("%d", &arr[i]);
        }
        for (i = 0; i < n; i++)
        {
            for (j = 0; j < n - 1 - i; j++)
            { // tại sao lại có -i?
                // vì sau mỗi lần lặp, số cặp cần so sánh lại giảm đi 1, do phần tử cuối cùng đã nằm đúng vị trí
                // đây là bubble sort
                if (arr[j] + arr[j + 1] >= temp)
                {
                    temp = arr[j] + arr[j + 1];
                }
            }
        }
        if (temp < 0)
        {
            printf("0");
            return 0;
        }

        printf("%d ", temp);
    }
    else if (n == 1)
    {
        printf("0");
        return 0;
    }
}
