#include <bits/stdc++.h>
using namespace std;
//! Heaps
//* A Heap is a special Tree-based Data Structure in which the tree is a complete binary tree.

//! Perfect Binary Tree vs Complete Binary Tree:
//* A binary tree of height ‘h’ having the maximum number of nodes is a perfect binary tree.
//* A complete binary tree is a special type of binary tree where all the levels of the tree are
//*filled completely except the lowest level nodes which are filled from as left as possible.
//! Perfect Binary Tree
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6  7
//! Complete Binary Tree
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6

//! Types of heaps:
//* Max-Heap:
//? Value of the Parent node must be the greatest among all its child nodes
//* Min-Heap:
//? Value of the Parent node must be the smallest among all its child nodes

//! Implementation of Heaps:
//* Heaps can be implemented using arrays or vectors:
//* Start with index 1 : NULL,1,2,3,4,5,6
//? For a node at index ‘i’:
//? Left child will be at: 2i
//? Right child will be at: 2i+1
//? Parent node will be at: floor((i/2)
//? leaf nodes: (n/2)+1 to n
//! Insertion Time Complexity: O(log N)
//! Deletion Root Time Complexity: O(log N)
//! Heapify: Time Complexity: O(log N)
//! getMax: Time Complexity: O(1)
//! Heapify:It is the process to rearrange the elements to given Index i maintain the property of heap data structure.


//* Start with index 0 : 1,2,3,4,5,6 
//? For a node at index ‘i’: 
//? Left child will be at: 2i+1 
//? Right child will be at: 2i+2 
//? Parent node will be at: floor(((i-1)/2) 
//? leaf nodes: (n/2) to n.

class maxHeap
{
private:
    vector<int> v;

public:
    maxHeap()
    {
        v.push_back(-1);
    }
    void push(int data)
    {
        v.push_back(data);
        int index = v.size() - 1;
        int parent = index / 2;
        while (index > 1 && v[parent] < v[index])
        {
            swap(v[parent], v[index]);
            index = parent;
            parent = parent / 2;
        }
    }
    void heapify(int index)
    {
        int left = 2 * index;
        int right = 2 * index + 1;
        int maxIndex = index;
        if (left < v.size() && v[left] > v[maxIndex])
        {
            maxIndex = left;
        }
        if (right < v.size() && v[right] > v[maxIndex])
        {
            maxIndex = right;
        }
        if (maxIndex != index)
        {
            swap(v[maxIndex], v[index]);
            heapify(maxIndex);
        }
    }
    void deleteRoot()
    {
        if (v.size() == 1)
            return;
        int last = v.size() - 1;
        swap(v[1], v[last]);
        v.pop_back();
        heapify(1);
    }
    void display()
    {
        for (int i = 1; i < v.size(); i++)
        {
            cout << v[i] << " ";
        }
        cout << endl;
    }
};

void heapify(int arr[], int n, int i) {
    int maxi = i;
    while (true) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[maxi])
            maxi = left;

        if (right < n && arr[right] > arr[maxi])
            maxi = right;

        if (maxi == i)
            break;

         swap(arr[maxi], arr[i]);
        i = maxi;
    }
}
int main()
{
    maxHeap h;
    h.push(10);
    h.push(20);
    h.push(30);
    h.push(40);
    h.push(50);
    h.display();

    return 0;
}