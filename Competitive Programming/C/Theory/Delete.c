#include<stdio.h>
void display(int arr[], int n){
    // Code for Traversal
    for (int i=0;i<n ;i++)
     {
        printf("%d ", arr[i]);
    
     }
     printf("\n");
}
void delete(int arr[], int size, int index){
     for (int i = index; i<size; i++) 
    {
       arr[i] = arr[i+1];
     }
     }

int main(){
    
     int arr[100] = {7, 8, 12, 27, 88};
     int size = 5,index=2;
     display(arr, size);
     delete(arr, size, index);
      size -=1;
     display(arr, size);

   

    return 0;
}