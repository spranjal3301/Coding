#include <bits/stdc++.h>
using namespace std;
int Binary_Search(int arr[], int key, int n)
{

    int start = 0;
    int end = n - 1;
    if (key > arr[end] or key < arr[start])
    {
        return -1;
    }
    while (start <= end)
    {
        int mid = start + (end - start) / 2;
        if (arr[mid] == key)
        {
            return mid;
        }
        else if (arr[mid] > key)
        {
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }
    return -1;
}
int Binary_Search_Recursive(int arr[], int key, int start, int end)
{
    if (start <= end)
    {
        int mid = start + (end - start) / 2;
        if (arr[mid] == key)
        {
            return mid;
        }
        else if (arr[mid] > key)
        {
            return Binary_Search_Recursive(arr, key, start, mid - 1);
        }
        else
        {
            return Binary_Search_Recursive(arr, key, mid + 1, end);
        }
    }
    return -1;
}

int main()
{
    //! Binary search is an efficient algorithm for finding an element in a sorted array.
    //! It works by repeatedly dividing the search space in half until the target element is found or the search space is empty.
    //*Range of ans is search space
    //! By hit and Try you negllect one part and reduce the search space then its binary search Que and Answer is in int
    int arr[] = {5, 7, 7, 8, 8, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort(arr, arr + n);
    std::cout << Binary_Search(arr, 7, n) << std::endl;

    return 0;
}
