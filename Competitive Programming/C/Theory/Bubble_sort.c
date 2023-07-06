// BUBBLE SORT
#include<stdio.h>
void bubble_sort(int arr[],int n){
    int temp;
for (int i = 0; i < n-1; i++)
{
    for (int j = 0; j <n-i-1 ; j++)
    {
        if (arr[j]>arr[j+1])
        {
           temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
        }
        
    }
    
}

}

int main(){
    int n;
    printf("Enter size of array: ");
    scanf("%d",&n);
    int arr[n];
    for (int i = 0; i <n ; i++)
    {
    printf("Enter %d element of array: ",i+1);
    scanf("%d",&arr[i]);
        }

    printf("Array before sorting: ");
    for (int i = 0; i <n ; i++)
    {
    printf("%d ",arr[i]);
    
        }
    bubble_sort(arr,n );

    printf("\nArray after sorting: ");
    for (int i = 0; i <n ; i++)
    {
    printf("%d ",arr[i]);
    
        }

    
   return 0;
}