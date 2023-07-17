#include <bits/stdc++.h>
using namespace std;
int arr[] = {3, 4, 3, 4, 7, 6, 7};

void display(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}
void swap(int arr[], int a)
{
    arr[a] = arr[a] + arr[a - 1];
    arr[a - 1] = arr[a] - arr[a - 1];
    arr[a] = arr[a] - arr[a - 1];
}
void arr_swap_alternet()
{
    for (int i = 1; i < 6; i += 2)
    {

        swap(arr, i);
    }
    display(arr, 6);
}
int find_unique()
{
    for (int i = 0; i < 7; i++)
    {
        bool x = 1;
        for (int j = 0; j < 7; j++)
        {
            if (i==j)
            {
                continue;
            }
            
            if (arr[i] == arr[j])
            {
                x = 0;
                break;
            }
        }
        if (x == 1)
        {
            return i;
        }
    }
}

void findDuplicate(){
    int arr[10]={1,2,3,4,5,2,6,7,8,9};
    int ans=0;
    for (int i = 0; i < 10; i++)
    {
        ans=ans^arr[i]^i;
            
    }
    cout<<ans;
    }


int main()
{
    // findDuplicate();
    return 0;
}