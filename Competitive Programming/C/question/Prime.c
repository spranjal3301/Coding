//prime check 
#include <stdio.h>

int main()
{
    int n, i, p = 1;
    printf("enter number\n");
    scanf("%d", &n);
    for (i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            p = 0;
            break;
        }
    }
    if (p == 0 || n == 2)
    {
        printf("not prime");
    }
    else
    {
        printf("prime");
    }

    return 0;
}

// print prime no upto n
#include <stdio.h>

int main()
{
  int n, i, p = 1;
  printf("enter number\n");
  scanf("%d", &n);
  for (i = 2; i < n; i++) // number of prime no printf
  {
    for (int j = 2; j < i; j++) //print 
    {
      if (i % j == 0){p = 0;break;}
      else{p = 1;}
    }
    if (p == 1)
    {
      printf("%d\n", i);
    }
  }

  return 0;
}

// prime factor of a number
#include<stdio.h>

int main(){

    int n,c,k;
    scanf("%d",&n);
for (int i = 2; i <= n; i++)
{
    k=0;
   if (n%i==0)
   {
    k=1;
    printf("%d\n",i);
    n=n/i;
    i=1;
   }    
    }  
    return 0;
}

// Greatest comman factor
#include<stdio.h>

int main(){
    int n,m,c,x;
    scanf("%d%d",&n,&m);
    c=n;
    if (n>m){c=m;}
    
    for (int i = 1; i < c; i++)
    {
        if (n%i==0 && m%i==0)
        {
         x=i;
        }
        
    }
    printf("%d",x);
    
    return 0;
}