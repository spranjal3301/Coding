#include <stdio.h>

int main()
{
/*Code 1
    int a = 0;

while (a<21)
    {
    if (a>9)
    {
    printf("%d \n",a);
} a++;
}
    */


 /*Code2
    int i=0,n;
    printf("value of n is \n");
    scanf("%d",&n);

do
     {
    printf("%d \n",i);
    i++;
    } while (i<=n);
     */

// Code 3
    int n;
    printf("value of n is \n");
    scanf("%d", &n);

for (int i = n; i <= n && i>0 ; i--) // (i <= n && i>0) this is also replace by only i ,  i=0 program stop
    {
    if (i==20) 
        {
    continue; // continue will skip the loop and recontinue
        }
    printf("%d \n", i);
 
    if (i==10)
        {
    break;  // break will stop the loop
        }
     }

    return 0;
}