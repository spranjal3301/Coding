#include<bits/stdc++.h>
using namespace std;
int Binary_Search(int arr[],int key,int n){

    int start=0;
    int end=n-1;
    while (start<=end)
    {
        int mid=(start+end)/2;
        if (arr[mid]==key)
        {
            return mid;
        }
        else if (arr[mid]>key)
        {
            end=mid-1;
        }
        else 
        {
            start=mid+1;
        }
           
        
    }
            return -1;
    
}
int Binary_Search_Optimize(int arr[],int key){
    int n=9;
    int start=0;
    int end=n-1;
    int mid= start+(end-start)/2; //for not overflow int (start + end)
    if (key>arr[end] or key<arr[start])
    {
        return -1;
    }
    
    while (start<=end)
    {
        if (arr[mid]==key)
        {
            return mid;
        }
        else if (arr[start]==key)
        {
            return start;
        }
        else if (arr[end]==key)
        {
            return end;
        }
        else if (arr[mid]>key)
        {
            end=mid-1;
        }
        else if (arr[mid]<key)
        {
            start=mid+1;
        }

        mid= start+(end-start)/2;  
        
    }
    return -1;
    
}

int main(){
//! Binary search is an efficient algorithm for finding an element in a sorted array.
//! It works by repeatedly dividing the search space in half until the target element is found or the search space is empty.
//*Range of ans is search space
//!By hit and Try you negllect one part and reduce the search space then its binary search Que and Answer is in int
    int arr[]={5,7,7,8,8,10};
    int n=sizeof(arr)/sizeof(arr[0]);
    sort(arr,arr+n);
    std::cout << Binary_Search(arr,7,n) << std::endl;
    
    return 0;
}

  int Book_Allocation(int arr[], int n, int k) {
      long long int start = 0, end = 0;
    for (int i = 0; i < n; i++) {
        end += arr[i];
    }
    
    long long int  ans = -1; // Initialize ans with a specific value
      if(k>n){
        return ans;
    }
    while (start <= end) {
       long long int  mid = start + (end - start) / 2;
        int count = 1, page = 0;
        
        for (int i = 0; i < n; i++) {
            if (arr[i] > mid) {
                count = k + 1; // Break if any book size exceeds mid
                break;
            }
            
            if (page + arr[i] > mid) {
                count++;
                page = arr[i];
            } else {
                page += arr[i];
            }
            
            if (count > k) {
                break;
            }
        }
        
        if (count <= k) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return ans;
}
    int mySqrt(int x) {
        long long int start=0,end=x;
        while (start<=end)
        {
            
            long long int mid= start+(end-start)/2;
            if ((mid*mid)<=x and ((mid+1)*(mid+1))>x)
            {
                return mid;

            }
            else if ((mid*mid)>x)
            {
                end=mid-1;
            }
            else{
                start=mid+1;
            }
            
        }
        return -1;
        
    }
 



