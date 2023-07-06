#include<stdio.h>
#include<stdlib.h>

int main(){
    int *ptr,n;
    scanf("%d",&n);
    ptr=(int*)malloc(n*sizeof(int)); //6 int allocated
    // use like array
    for (int i = 0; i < 6; i++)
    {
      scanf("%d",&ptr[i]);
    }
    free(ptr);

    ptr=(int*)calloc(n,sizeof(int));
    for (int i = 0; i < 10; i++)
    {
        scanf("%d",&ptr[i]);
    }
    free(ptr);
    ptr=realloc(ptr,10*sizeof(int));

    
    
    return 0;
}