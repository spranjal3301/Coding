#include <stdio.h>

int main()
{
    // int = integer float = real char = variable
    int a = 7;
    int x = 20;
    int y = 20 + 7;
    float b = 8.5;
    char c = 'u';
    int j,n;
    j=sizeof(n);
    char i;
    read:
    putchar('d\n');
    i=getchar();
    printf(" i is %c",i);
    goto read;
    /* FORMAT SPACEFIRE: %d=integer %f=real values %c=charcters */
    printf("a is %d \n", a);
    // \n for next line
    printf("b is %f\n", b);
    printf("c is %c\n", c);
    printf("sum of a and x is %d\n", a + x);
    printf("y is %d\n", y);
    return 0;
}