/*
2024/06/21 (c) https://tdcq.me/
Đề bài
Viết một chương trình nhập một chuỗi S và số nguyên n . Chương trình sẽ cắt chuỗi đó theo số nguyên n.
Chú ý: Nếu số ký tự trong chuỗi ít hơn giá trị n, chương trình không thay đổi chuỗi.
Mô tả giá trị đầu vào:
- Dòng đầu tiên là chuỗi S
- Dòng thứ 2 là số nguyên n
Mô tả giá trị đầu ra:
Chuỗi S đã được rút gọn

For example:
Dữ liệu đầu vào	  |Kết quả
Abcde             |Abc
3                 |
*/

#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    int n;
    //Enter a string
    scanf("%s", s);
    //Enter an integer
    scanf("%d", &n);
    if (strlen(s) > n) {
        s[n] = '\0';
    }
    printf("%s\n", s);
    return 0;
}
