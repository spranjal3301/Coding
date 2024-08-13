#include <bits/stdc++.h>
using namespace std;

//! Selection Sort: 
//`a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning.
void SelectionSort(vector<int> &arr){
    for (int i = 0; i < arr.size() - 1; i++){
        int min = i;
        for (int j = i + 1; j < arr.size(); j++){
            if (arr[min] > arr[j])
                min = j;
        }
        swap(arr[min], arr[i]);
    }
}

void Recursive_SelectionSort(int arr[], int size){
    if (size == 0 or size == 1)
    {
        return;
    }
    int min = 0;

    for (int i = 1; i < size; i++)
    {
        if (arr[min] > arr[i])
        {
            min = i;
        }
    }
    swap(arr[0], arr[min]);
    Recursive_SelectionSort(arr + 1, size - 1);
}

int main()
{
    int arr[] = {4, 5, 65, 12, 3, 4};
    int size = 6;
    Recursive_SelectionSort(arr, size);
    for (int i : arr)
    {
        cout << i << " ";
    }


    // Key Points:
    // Selection Sort has a time complexity of O(n^2) in all cases, where n is the number of elements in the array.
    // It is an in-place sorting algorithm as it only requires a constant amount of additional memory space.
    // Selection Sort is not stable, which means it may change the relative order of elements with equal values.
    // It is generally not suitable for large datasets due to its slower performance compared to more efficient algorithms like QuickSort or MergeSort.
    return 0;
}