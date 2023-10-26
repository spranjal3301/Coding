#include <bits/stdc++.h>
using namespace std;
struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode() : val(0), left(nullptr), right(nullptr) {}
     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
    };
int mod = 1e9 + 7;
void solve(TreeNode *root, int targetSum, vector<int> path, int &count)
{
    if (!root)
        return;

    path.push_back(root->val);
    solve(root->left, targetSum, path, count);
    solve(root->right, targetSum, path, count);

    int sum = 0;
    for (int i = path.size() - 1; i >= 0; i--)
    {
        sum += path[i];
        if (sum == targetSum)
            count++;
        sum = sum % mod;
    }
    path.pop_back();
}

int pathSum(TreeNode *root, int targetSum)
{
    vector<int> path;
    int count = 0;
    solve(root, targetSum, path, count);
    return count;
}
int main()
{

    return 0;
}