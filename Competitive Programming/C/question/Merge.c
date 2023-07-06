// Write a program to merge two arrays of size n and m into one (having size n+m)
#include<stdio.h>

int main(){
  int n,m;
  printf("Enter the value of n and m\n");
  scanf("%d%d",&n,&m);
  int arr1[n],arr2[m];
  int arr3[n+m];
  printf("Element of array 1 of size %d\n",n);
  for (int i = 0; i < n; i++)
  {
      scanf("%d",&arr1[i]);
      arr3[i]=arr1[i];
  }
  printf("Element of array 2 of size %d\n",m);
  for (int i = 0; i < m; i++)
  {
      scanf("%d",&arr2[i]);
     arr3[n+i]=arr2[i];
  }
  printf("Merge:");
  for (int i = 0; i < n+m; i++)
  {
    printf("%d ",arr3[i]);
  }
  


  
  return 0;
}