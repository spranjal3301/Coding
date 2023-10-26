#include <bits/stdc++.h>
using namespace std;
vector<int> rotate(int n, int d)
{
    // code here.
    d = d % 16;
    int left = ((n << d) | (n >> (16 - d))) & ((1 << 16) - 1);
    int right = ((n >> d) | (n << (16 - d))) & ((1 << 16) - 1);
    return {left, right};
}
int main()
{

    return 0;
}