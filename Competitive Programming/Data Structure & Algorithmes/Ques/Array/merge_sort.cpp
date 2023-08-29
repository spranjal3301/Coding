#include <bits/stdc++.h>
using namespace std;
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
void Merge_sort1(int arr1[], int n, int arr2[], int m, int arr3[])
{
    int ptr1 = 0, ptr2 = 0, i = 0;

    for (; ptr1 < n && ptr2 < m; i++)
    {
        arr3[i] = (arr1[ptr1] < arr2[ptr2]) ? arr1[ptr1++] : arr2[ptr2++];
    }

    for (; ptr1 < n || ptr2 < m; i++)
    {
        arr3[i] = (ptr1 < n) ? arr1[ptr1++] : arr2[ptr2++];
    }
}

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