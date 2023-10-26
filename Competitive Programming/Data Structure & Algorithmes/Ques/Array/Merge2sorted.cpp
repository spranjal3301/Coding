#include <bits/stdc++.h>
using namespace std;

//!M01
//! Time complexity of O(klog(k))
//! Auxiliary space complexity of O(1)
void merge1(vector<int> &nums1, int m, vector<int> &nums2, int n)
{   int j=0;
    for (int i = 0; i <nums1.size(); i++)
    {
       
        if (nums1[i]==0)
        {
            nums1[i]=nums2[j];
            j++;
        }
        
    }
    sort(nums1.begin(),nums1.end());
    
}

//!M02
//! Time complexity of O(n+m)
//! Auxiliary space complexity of O(m+n)
void Merge_sort(int arr1[], int n, int arr2[], int m, int arr3[])
{
    int ptr1 = 0, ptr2 = 0;
    int i = 0;
    while (ptr1 < n and ptr2 < m)
    {
        if (arr1[ptr1] < arr2[ptr2])
        {
            arr3[i] = arr1[ptr1];
            ptr1++;
        }
        else if (arr1[ptr1] > arr2[ptr2])
        {
            arr3[i] = arr2[ptr2];
            ptr2++;
        }
        i++;
    }

    while (ptr1 < n or ptr2 < m)
    {
        if (ptr1 < n)
        {
            arr3[i] = arr1[ptr1];
            ptr1++;
        }
        else
        {
            arr3[i] = arr2[ptr2];
            ptr2++;
        }
        i++;
    }
}


//!Merge Two Sorted Array wihtout extra space; 
//! Time complexity of O(m + n)
//! Auxiliary space complexity of O(1)
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int ptr1 = m - 1;
    int ptr2 = n - 1;
    int mergedPtr = m + n - 1;

    while (ptr1 >= 0 && ptr2 >= 0) {
        if (nums1[ptr1] >= nums2[ptr2]) {
            nums1[mergedPtr] = nums1[ptr1];
            ptr1--;
        } else {
            nums1[mergedPtr] = nums2[ptr2];
            ptr2--;
        }
        mergedPtr--;
    }

    while (ptr2 >= 0) {
        nums1[mergedPtr] = nums2[ptr2];
        ptr2--;
        mergedPtr--;
    }
}

int main()
{
    int arr1[] = {1, 2, 3, 0, 0, 0};
    int arr2[] = {2, 5, 6};
    int n = sizeof(arr1) / sizeof(arr1[0]);
    int m = sizeof(arr2) / sizeof(arr2[0]);
    int arr3[n + m];
    // Merge_sort(arr1, n, arr2, m, arr3);
    // for (auto &&i : arr3)
    // {
    //     std::cout << i << " ";
    // }

    vector<int> num1 = {1, 2, 3, 0, 0, 0};
    vector<int> num2 = {2, 5, 6};
    merge1(num1, 3, num2, 3);
    for (auto &&i : num1)
    {
        std::cout << i << " ";
    }

        return 0;
}