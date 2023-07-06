#include <stdio.h>

int main(void) {
    int a , b ;

  scanf("%d %d",&a,&b);
    printf("Before swap: a = %d, b = %d\n", a, b);

    a = a + b; // a now contains the sum of a and b
    b = a - b; // b now contains the value of a
    a = a - b; // a now contains the value of b

    printf("After swap: a = %d, b = %d\n", a, b);

// Method 2
int i,j;
  scanf("%d %d",&i,&j);
   printf("Before swap: i = %d, j = %d\n", i, j);
int temp;

    temp=i;
    i=j;
    j=temp;

    return 0;
}
#include<stdio.h>
void swap(int *a, int *b){
int temp;
temp=*a;
*a=*b;
*b=temp;
}
int main(){
    int a,b;
    printf("Enter two number a and b:");
    scanf("%d %d",&a,&b);
    printf("Before swap a=%d  b=%d\n",a,b);
    swap(&a,&b);
    printf("After swap a=%d  b=%d:",a,b);
    return 0;
}