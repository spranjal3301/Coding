#include <bits/stdc++.h>
using namespace std;
// Example 1:
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
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