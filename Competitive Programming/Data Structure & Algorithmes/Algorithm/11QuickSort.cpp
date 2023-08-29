#include <bits/stdc++.h>
using namespace std;
int Partition(int arr[], int start, int end)
{
    int Pivot_element = arr[start];
    int count_left = 0;
    for (int i = start + 1; i <= end; i++)
    {
        if (Pivot_element >= arr[i])
        {
            count_left++;
        }
    }
    int Pivot_Index = start + count_left;
    //*Place Pivot element in right place in Sort array
    swap(arr[start], arr[Pivot_Index]);

    //* (left part < Pivot Element < Right part)
    int i = start;
    int j = end;

    while (i < Pivot_Index and j > Pivot_Index)
    {
        while (Pivot_element >= arr[i])
        {
            i++;
        }
        while (Pivot_element < arr[j])
        {
            j--;
        }
        //! Important
        if (i < Pivot_Index and j > Pivot_Index)
        {
            swap(arr[i++], arr[j++]); 
        }
    }
    return Pivot_Index;
}
void QuickSort(int arr[], int start, int end)
{
    if (start >= end)
    {
        return;
    }
    //! Place Pivot element in right place in Sort array
    //! (left part < Pivot Element < Right part)
    int Pivot_Index = Partition(arr, start, end);

    //! Sort left Part of Pivot element
    QuickSort(arr, start, Pivot_Index - 1);

    //! Sort Right Part of Pivot element
    QuickSort(arr, Pivot_Index + 1, end);
}
int main()
{
    int arr[] = {1, 2, 3, 4, 5, 2, 3, 3, 4};
    QuickSort(arr, 0, 9);
    for (auto &i : arr)
    {
        cout << i << " ";
    }
    return 0;
}