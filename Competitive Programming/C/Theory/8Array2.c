//array
// array is collection of similar  elements
#include<stdio.h>

int main(){
    int a[]={2,34,56,5,2};   //static array
    int b[5]; 
    int c[5],*p;
    int n = sizeof(a) / sizeof(a[0]); //length of array
    p=c;  // meaning  p=&c[0]
    for (int i = 0; i < 5; i++)
    {
        scanf("%d",&b[i]); //dynamic array
        scanf("%d",p);
        p++;

    }
    
        printf("\n%d\n",a); // print address of array
     for (int i = 0; i < 5; i++)
    {
        printf("\n%d\n",b[i]); 
        printf("%d\n",c[i]);

    }
    //2D array
    int ary2d[4][3];
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("enter the element %d , %d ",i+1,j+1);
            scanf("%d",&ary2d[i][j]);
        }
        
    }
    

    return 0;
}