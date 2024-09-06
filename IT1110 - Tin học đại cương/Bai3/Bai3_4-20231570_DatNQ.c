// 2024/04/05 20:07:19 GMT+7 (c) https://tdcq.me/
#include <stdio.h>

// Với 3 input là giá chưa thuế, cân nặng cần mua, phần trăm thuế, có thể đưa về code đơn giản ko cần math.h

int  main(){
    // input giá k thuế; thuế, cân nặng
    // output tổng giá trị sau thuế
    double gkt, th, cn; 
    scanf("%lf", &gkt);
    scanf("%lf", &cn);
    scanf("%lf", &th);
    printf("%lf", gkt*cn+(gkt*cn)*th/100);
}
