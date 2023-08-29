#include <bits/stdc++.h>
using namespace std;
void solve(int n, int k, vector<vector<int>> &a, vector<int> output, int i)
{
    if (output.size() == k)
    {
        a.push_back(output);
        return;
    }
    if (i > n or output.size() + (n - i + 1) < k)
    {
        return;
    }
    output.push_back(i);
    solve(n, k, a, output, i + 1);
    output.pop_back();

    solve(n, k, a, output, i + 1);
}
vector<vector<int>> combine(int n, int k)
{
    vector<vector<int>> ans;
    vector<int> output;
    int i = 1;
    solve(n, k, ans, output, i);
    return ans;
}
int main()
{

    return 0;
}