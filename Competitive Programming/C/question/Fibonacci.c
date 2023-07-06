// Write a function which displays the sum of Fibonacci series up to n. int fib(n)
// Using Recursion
#include<stdio.h>
int fib(int n){
    int nth;
    if (n==1)
    {return 0;}
    else if(n==2)
    {return 1;}
    nth=fib(n-1)+fib(n-2);
    return nth;
    }

int main(){
    int n,sum=0;
    printf("Sum of Fibonacci series up to : ");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++) //it not working for bigger number
    {sum+=fib(i); }
    printf("Sum is %d",sum);
    return 0;
}

// Write a program using recursion to calculate the nth element of the Fibonacci series.
//  Fibonacci series=addtion of two previous number is next number 0,1, 1, 2, 3, 5, 8, 13, 21...
#include<stdio.h>
int fib(int n){
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
int main(){
    int n,x;
    printf("which element in  fibonacci series\n");
    scanf("%d",&n);
    x=fib(n);
    printf("%d\n",x);   
    return 0;
}

//fib series upto n
#include<stdio.h>

int main(){
    int n=10;
    int a=1,b=1;
    printf("1 1 ");
    for (int i = 0; i <n-2; i++)
    {
    int t=0;
       t=a+b;
       b=a;
       a=t; 
    printf("%d ",t);
    }
    
    return 0;
}

//why not working
// #include <stdio.h>

// int fib(int n) {
//   int i, a = 0, b = 1, c, sum = 0;
//   if (n <= 0) return 0;
//   for (i = 1; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     sum += c;
//   }
//   return sum;
// }

// int main() {
//   int n;
//   printf("Enter the number of terms: ");
//   scanf("%d", &n);
//   printf("Sum of Fibonacci series up to %d terms: %d\n", n, fib(n));
//   return 0;
// }






