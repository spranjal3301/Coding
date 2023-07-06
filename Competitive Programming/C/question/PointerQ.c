// Write a function to compute the following array operations:
// void display_all(int *),
// int display_highest(int *),
// void search(int key, int *p), 
// int search (int key, int *p), 
// void reverse_array(int *p). The function names are the operations to be performed.
#include<stdio.h>
void display_all(int *array, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", array[i]);
  }
  printf("\n");
}
void reverse_array(int *p,int n){
    int temp;
for (int i = 0; i <n/2; i++)
{   temp=p[i];
    p[i]=p[n-1-i];
    p[n-1-i]=temp;
}
}
void reverse_arr_ptr(int *ptr,int n){
    int temp;
    for (int i = 0; i <n/2; i++)
    {
        temp=*(ptr+i);
        *(ptr+i)=*(ptr+n-1-i);
        *(ptr+n-1-i)=temp;

    }
    
}  

int main(){
    int arr[]={1,23,45,67,89,90};
    int n=sizeof(arr)/sizeof(arr[0]);
    display_all(arr,n);
    reverse_array(arr,n);
    display_all(arr,n);
    
    return 0;
}