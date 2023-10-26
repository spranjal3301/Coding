#include <bits/stdc++.h>
#include "BST.cpp"
using namespace std;
void inorder(TreeNode *root, vector<int> &in)
{
    stack<TreeNode *> s;
    TreeNode *current = root;

    while (current || !s.empty())
    {
        while (current)
        {
            s.push(current);
            current = current->left;
        }

        current = s.top();
        s.pop();
        in.push_back(current->val);
        current = current->right;
    }
}
TreeNode *balanceBST(TreeNode *root)
{
    vector<int> in;
    inorder(root, in);
    return buildBalancedBST(in, 0, in.size() - 1);
}

TreeNode *buildBalancedBST(vector<int> &in, int start, int end)
{
    if (start > end)
    {
        return nullptr;
    }

    int mid = start + (end - start) / 2;
    TreeNode *root = new TreeNode(in[mid]);
    root->left = buildBalancedBST(in, start, mid - 1);
    root->right = buildBalancedBST(in, mid + 1, end);

    return root;
}