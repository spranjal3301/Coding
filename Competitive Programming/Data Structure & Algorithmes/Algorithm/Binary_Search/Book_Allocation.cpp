#include<bits/stdc++.h>
using namespace std;
int Book_Allocation(int arr[], int n, int k)
{
    long long int start = 0, end = 0;
    for (int i = 0; i < n; i++)
    {
        end += arr[i];
    }

    long long int ans = -1; // Initialize ans with a specific value
    if (k > n)
    {
        return ans;
    }
    while (start <= end)
    {
        long long int mid = start + (end - start) / 2;
        int count = 1, page = 0;

        for (int i = 0; i < n; i++)
        {
            if (arr[i] > mid)
            {
                count = k + 1; // Break if any book size exceeds mid
                break;
            }

            if (page + arr[i] > mid)
            {
                count++;
                page = arr[i];
            }
            else
            {
                page += arr[i];
            }

            if (count > k)
            {
                break;
            }
        }

        if (count <= k)
        {
            ans = mid;
            end = mid - 1;
        }
        else
        {
            start = mid + 1;
        }
    }

    return ans;
}
int main(){
    
    return 0;
}