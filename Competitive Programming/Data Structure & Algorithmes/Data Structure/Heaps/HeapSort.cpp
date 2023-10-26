#include<bits/stdc++.h>
using namespace std;
//! HeapSort
//! Time Complexity: O(N * Log(N)).
//! Auxiliary Space: O(1).

// Helper function to maintain the heap property
void heapify(int array[], int size, int rootIndex) {
    int largest = rootIndex;
    int leftChild = 2 * rootIndex + 1;
    int rightChild = 2 * rootIndex + 2;

    // Check if left child is larger than the root
    if (leftChild < size && array[leftChild] > array[largest])
        largest = leftChild;

    // Check if right child is larger than the largest so far
    if (rightChild < size && array[rightChild] > array[largest])
        largest = rightChild;

    // If the largest element is not the root, swap them and continue to heapify
    if (largest != rootIndex) {
        swap(array[rootIndex], array[largest]);
        heapify(array, size, largest);
    }
}

// Function to build a max-heap from an array
void buildMaxHeap(int array[], int size) {
    // Start from the last non-leaf node and heapify each node in reverse order
    for (int i = size / 2 - 1; i >= 0; i--) {
        heapify(array, size, i);
    }
}

// Function to perform heap sort on an array
void heapSort(int array[], int size) {
    // Build a max-heap from the input array
    buildMaxHeap(array, size); 

    // Extract elements one by one from the heap
    for (int i = size - 1; i > 0; i--) {
        // Move the current root (maximum) element to the end of the array
        swap(array[0], array[i]);
        // Reduce the heap size and heapify the root element
        heapify(array, i, 0);
    }
}

int main(){

    return 0;
}