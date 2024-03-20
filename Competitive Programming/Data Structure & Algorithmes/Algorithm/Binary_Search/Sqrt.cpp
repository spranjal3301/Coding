#include<bits/stdc++.h>
using namespace std;
int mySqrt(int x)
{
    long long int start = 0, end = x;
    while (start <= end)
    {

        long long int mid = start + (end - start) / 2;
        if ((mid * mid) <= x and ((mid + 1) * (mid + 1)) > x)
        {
            return mid;
        }
        else if ((mid * mid) > x)
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

int main(){
    
    return 0;
}