#include <bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;
//! Maximum sum of Non-adjacent nodes
pair<int, int> solve(Node *root)
{
    if (!root)
        return {0, 0};

    pair<int, int> left = solve(root->left);
    pair<int, int> right = solve(root->right);
    pair<int, int> res;
    res.first = root->data + left.second + right.second;
    res.second = max(left.first, left.second) + max(right.first, right.second);
    return res;
}
int getMaxSum(Node *root)
{
    // Add your code here
    pair<int, int> ans = solve(root);
    return max(ans.first, ans.second);
}
int main()
{

    return 0;
}
