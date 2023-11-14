#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

//!Bucket sort
//*Bucket sort is a sorting technique that involves dividing elements into various groups, or buckets.
//*These buckets are formed by uniformly distributing the elements.
//*Once the elements are divided into buckets, they can be sorted using any other sorting algorithm.
//! Time Complexity: O(n+k)
//! Auxiliary Space: O(n+k)
void bucketSort(float arr[], int n,int k)
{
 
    // 1) Create n empty buckets
    vector<float> b[k];
    int maxi=*max_element(arr,arr+n);
 
    // 2) Put array elements
    // in different buckets
    for (int i = 0; i < n; i++) {
 
        // Index in bucket
        int bi = k * arr[i];
        //~ int bi=(k*arr[i])/maxi;
        b[bi].push_back(arr[i]);
    }
 
    // 3) Sort individual buckets
    for (int i = 0; i < k; i++)
        sort(b[i].begin(), b[i].end());
 
    // 4) Concatenate all buckets into arr[]
    int index = 0;
    for (int i = 0; i < k; i++)
        for (int j = 0; j < b[i].size(); j++)
            arr[index++] = b[i][j];
}
 

int main()
{
    float arr[]
        = { 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 };
    int n = sizeof(arr) / sizeof(arr[0]);
    bucketSort(arr, n,5);
 
    cout << "Sorted array is \n";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}