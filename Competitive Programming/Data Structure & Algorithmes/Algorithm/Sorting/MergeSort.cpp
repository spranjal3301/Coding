#include <bits/stdc++.h>
using namespace std;
void merge(int arr[], int start, int end)
{
    int mid = start + (end - start) / 2;
    int len1 = mid - start + 1;
    int len2 = end - mid;
    int *arr1 = new int[len1];
    int *arr2 = new int[len2];
    int k = start;

    //! Copy values to the new array
    for (int i = 0; i < len1; i++)
    {
        arr1[i] = arr[k++];
    }
    k = mid + 1;
    for (int i = 0; i < len2; i++)
    {
        arr2[i] = arr[k++];
    }

    //! merge two sorted arrays
    k = start;
    int i = 0, j = 0;

    while (len1 > i and len2 > j)
    {
        if (arr1[i] > arr2[j])
        {
            arr[k++] = arr2[j++];
        }
        else
        {
            arr[k++] = arr1[i++];
        }
    }

    while (len1 > i)
    {
        arr[k++] = arr1[i++];
    }
    while (len2 > j)
    {
        arr[k++] = arr2[j++];
    }

    delete[] arr1;
    delete[] arr2;
}
void MergeSort(int arr[], int start, int end)
{
    int mid = start + (end - start) / 2;
    if (start >= end)
    {
        return;
    }

    //! Sort left part
    MergeSort(arr, start, mid);

    //! Sort Right part
    MergeSort(arr, mid + 1, end);

    //! merge Left & Right Part
    merge(arr, start, end);
}
int main()
{
    //! Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays,
    //! sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
    //* Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided
    //* i.e., the array has only one element left (an array with one element is always sorted).
    //* Then the sorted subarrays are merged into one sorted array.
    int arr[] = {1, 2, 3, 4, 5, 2, 3, 3, 4};
    MergeSort(arr, 0, 9);
    for (auto &i : arr)
    {
        cout << i << " ";
    }

    return 0;
}