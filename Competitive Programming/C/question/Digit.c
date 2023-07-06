#include<stdio.h>

int main(){
    int n,sum=0,a;
    scanf("%d",&n);
    int c=0;
    //no. of digits in number
    for (int i = n; i>0; c++)
    {i=i/10;}
    for (int i = 0; i <c; i++)
    {
        a=n%10;
        sum+=a;
        n=n/10;
    }
    
    printf("%d",sum);
    
    
    return 0;
}

//reverse digits
#include <stdio.h>

int main(){
 int n=1234,c=0;
int p,r=0;
   for (int i = n; i>0; c++)
    {i=i/10;}
    for (int i = 0; i <c; i++)
    {
       
        p=n%10;
        r=(r*10)+p;
        
        n=n/10;
    }
    
    printf("%d",r);
    return 0;
}