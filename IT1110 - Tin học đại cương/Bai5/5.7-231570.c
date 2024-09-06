/*
2024/06/28 (c) https://tdcq.me/

Viết chương trình thực hiện công việc sau:
- Nhập vào từ bàn phím một câu tiêu đề bất kỳ
- Chuẩn hoá xâu đã nhập bằng cách xoá các dấu cách thừa ở đầu, cuối, giữa để đảm bảo chỉ có 1 dấu cách phân tách giữa các từ
- Đưa tiêu đề được chuẩn hoá ra màn hình

Mô tả giá trị
|     Input    | Output  |
|--------------|---------|
| h   ell   o  | h ell o |
*/

#include <stdio.h>
#include <string.h>

int main() {
    char title[100];
    fgets(title, 100, stdin);
    title[strlen(title) - 1] = '\0';

    int i = 0;
    while (title[i] == ' ') {
        i++;
    }
    int j = strlen(title) - 1;
    while (title[j] == ' ') {
        j--;
    }

    int k = 0;
    while (i <= j) {
        if (title[i] == ' ' && title[i + 1] == ' ') {
            i++;
        }
        title[k++] = title[i++];
    }
    title[k] = '\0';

    printf("%s", title);

    return 0;
}