#include <bits/stdc++.h>
using namespace std;
//! Counting Sort
//* Counting Sort is a non-comparison-based sorting algorithm that works well when there is limited range of input values.
//* efficient when the range of input values(k) < number of elements (n).
//! Time Complexity:Worst-case: O(N+K).
                //! Average-case: O(N+K).
                //! Best-case: O(N+K).
//! Auxiliary Space: O(N+K)
//* Stable Algorithm

//~ Naive Implemetation
void CountSort(int arr[], int n, int k)
{
    int count[k] = {0};
    int mini = *min_element(arr, arr + n);      

    for (int i = 0; i < n; i++)
    {
        count[arr[i] - mini]++;
    }

    int index=0;
    for (int i = 0; i <k; i++)
    {
        for (int j = 0; j < count[i]; j++)
        {
            arr[index]=i+mini;
            index++;
        }
        
    }
    
}

//~Genral purpose Implemetation
void CountSort(int arr[],int n,int k){
    int count[k]={0}; //? k=[0 ,k) 0 to k-1

    for (int i = 0; i < n; i++)
            count[arr[i]]++;
    
    for (int i = 1; i <k; i++)
            count[i]=count[i-1]+count[i]; //?Prefix Sum {1,2,3}->{1,3,6} (Now it Stores How many element less than or equal before ith index )
    
    int output[n];
    for (int i = n-1; i >=0; i--)
    {
        output[count[arr[i]]-1]=arr[i]; //? Place to element at right place in Sorted Array based on there countArray
        count[arr[i]]--; //? Decrease the Count because we Already place 1 element at its right position
    }

    for (int i = 0; i <n; i++)
            arr[i]=output[i];

}

int main()
{
    int arr[]={1,4,4,1,0};
    CountSort(arr,5,5);
    for (auto &&i :arr)
    {
        cout<<i<<" ";
        
    }
    

    return 0;
}