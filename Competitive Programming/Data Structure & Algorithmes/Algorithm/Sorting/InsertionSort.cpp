#include<bits/stdc++.h>
using namespace std;
void InsertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];    // Select the current element to be inserted into the sorted part
        int j = i - 1;       // Set the index of the last element in the sorted part

        // Compare the current element with the elements in the sorted part and shift larger elements to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];   // Shift elements to the right
            j--;
        }

        arr[j + 1] = key;   // Insert the current element in its correct position within the sorted part
    }
}



void Recursive_InsertionSort(int arr[], int n){
    // Base case: If the array has only one element or empty, it is already sorted
    if (n <= 1) {
        return;
    }

    // Sort the first (n-1) elements
    Recursive_InsertionSort(arr, n - 1);

    // Insert the last element into the sorted subarray
    int last = arr[n - 1];
    int j = n - 2;

    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = last;
    return;
    
}


int main(){
// Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
// It starts with an initially empty left portion (sorted part) and gradually inserts elements from the unsorted part into their correct position within the sorted part.
// The algorithm iterates through the array, comparing each element to the elements in the sorted part and inserting it in the correct position by shifting larger elements to the right.
// Insertion Sort is considered efficient for small datasets or partially sorted arrays but can become inefficient for large or inversely sorted datasets.
     int arr[] = {4, 5, 65, 12, 3, 4};
    int size = 6;
    Recursive_InsertionSort(arr, size);       
    for (int i : arr)
    {
        cout << i << " ";
    }
    return 0;
}