#include <bits/stdc++.h>
#include "BST.cpp"
using namespace std;
TreeNode *solve(vector<int> &po, int mini, int maxi, int &i)
{
    if (i >= po.size())
        return NULL;

    if (po[i] < mini || po[i] > maxi)
        return NULL;
    TreeNode *root = new TreeNode(po[i]);
    i++;
    root->left = solve(po, mini, root->val, i);
    root->right = solve(po, root->val, maxi, i);
    return root;
}
TreeNode *bstFromPreorder(vector<int> &preorder)
{
    int i = 0;
    return solve(preorder, INT_MIN, INT_MAX, i);
}
int main()
{

    return 0;
}