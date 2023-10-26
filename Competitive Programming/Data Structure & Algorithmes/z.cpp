#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x = 6;
    int y = 1;
    int N = 49;
    if ((x | y) * (x ^ y) == N)
    {
        std::cout << x << " " << y << std::endl;
    }
    return 0;
}