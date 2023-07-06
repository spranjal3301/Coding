// Insert elements in array and sort
#include<stdio.h>
void bubble_sort(int arr[],int m){
// BUBBLE SORT
    int temp;
for (int i = 0; i < m-1; i++)
{
    for (int j = 0; j <m-i-1 ; j++)
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
    //inserting element in array
    int k;
    printf("Inserting element in array:");
    scanf("%d",&k);
     arr[n]=k;  
     int m=n+1; 

    printf("Array before sorting: ");
    for (int i = 0; i <m ; i++)
    {
    printf("%d ",arr[i]);
    
        }
        
    bubble_sort(arr,m );


    printf("\nArray after sorting: ");
    for (int i = 0; i <m ; i++)
    {
    printf("%d ",arr[i]);
    
        }

    
   return 0;
}