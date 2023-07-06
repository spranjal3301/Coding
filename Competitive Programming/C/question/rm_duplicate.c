// Write a program to remove the duplicate entries from an array
#include<stdio.h>
void display(int arr[], int n){
    // Code for Traversal
    for (int i=0;i<n ;i++)
     {
        printf("%d ", arr[i]);
    
     }
     printf("\n");
}
void delete(int arr[],int size,int index){
    for (int i = index; i < size-1; i++)
    {
        arr[i]=arr[i+1];
    }
    
}

int main(){
    int arr[]={1,1,2,2,3,3,4,5,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    for (int i = 0; i <n ; i++)
    {
       for (int j = i+1; j < n; j++)
       {
         if (arr[i]==arr[j])
         {
            delete(arr,n,j);
            n-=1;
         }
         
       }
       
    }
    
    
    display(arr,n);
    
    return 0;
}