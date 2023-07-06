//RECURSION:
//Write a program to calculate the factorial of a given number using recursion.
#include<stdio.h>
int factorial(int x); //function prototype

int main(){
    int x ;
    printf("FACTORIAL OF \n ");
    scanf("%d",&x);
    printf("FACTORIAL IS %d",factorial(x)); //function call
    return 0;
}
int factorial(int x){ // function definition 
    if (x==1 || x==0) // base condition
    {
    return 1;  
    }
    else
    {
    return x*factorial(x-1); //recursion
    }   
}

// Write a program to calculate the factorial of a given number using for loop.7!=1 × 2 × 3 × 4 × 5 × 6 × 7. 
#include <stdio.h>
int main(){
    int i,n,f=1;
    printf("factorial  of \n ");
    scanf("%d",&n);
    for ( i = 1; i <=n; i++) //for loop
    { 
       f*=i;
    }
     printf("factorial is %d \n",f);
     return 0;
}
