#include<bits/stdc++.h>
using namespace std;
void Merge_sort(int arr1[],int n,int arr2[],int m,int arr3[]){
    int ptr1=0,ptr2=0;
    int i=0;
    while (ptr1<n and ptr2<m)
    {
        if (arr1[ptr1]<arr2[ptr2] )
        {
          arr3[i]=arr1[ptr1];
          ptr1++;
        }
        else if (arr1[ptr1]>arr2[ptr2])
        {
            arr3[i]=arr2[ptr2];
            ptr2++;
        }
        i++;
    }
        
    while (ptr1<n or ptr2<m)
    {
        if (ptr1<n)
        {
            arr3[i]=arr1[ptr1];
            ptr1++;
        }
        else{
            arr3[i]=arr2[ptr2];
            ptr2++;
        }
        i++;
        
    }
    

    
}
void Merge_sort1(int arr1[], int n, int arr2[], int m, int arr3[]) {
    int ptr1 = 0, ptr2 = 0,i = 0;
    
    for (; ptr1 < n && ptr2 < m; i++) {
        arr3[i] = (arr1[ptr1] < arr2[ptr2]) ? arr1[ptr1++] : arr2[ptr2++];
    }
    
    for (; ptr1 < n || ptr2 < m; i++) {
        arr3[i] = (ptr1 < n) ? arr1[ptr1++] : arr2[ptr2++];
    }
}
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int ptr1=0,ptr2=0;
        for (int i = 0; i <m; i++)
        {
            
        }
        
    }
int main(){
    int arr1[]={1,2,3,0,0,0};
    int arr2[]={2,5,6};
    int n=sizeof(arr1)/sizeof(arr1[0]);
    int m=sizeof(arr2)/sizeof(arr2[0]);
    int arr3[n+m];
    Merge_sort(arr1,n,arr2,m,arr3);
    for (auto &&i : arr3)
    {
        std::cout<<i << " ";
    }
    
    return 0;
}