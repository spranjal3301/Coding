// Write a program to generate a multiplication table of a given number in text format. Make sure that the file is readable and well-formatted.

#include<stdio.h>

int main(){
    int n,a;
    scanf("%d",&n);
    FILE *ptr;
    ptr=fopen("multable.txt","w");
    for (int i = 1; i <=10; i++)
    {
        fprintf(ptr,"%d\n",i*n);
    }
    fclose(ptr);
    ptr=fopen("multable.txt","r");
    for (int i = 1; i <=10; i++)
    {
        fscanf(ptr,"%d\n",&a);
        printf("%d\n",a);
    }
    fclose(ptr);
    

    
    
    return 0;
}