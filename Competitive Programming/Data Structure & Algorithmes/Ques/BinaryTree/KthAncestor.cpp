#include <bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;
Node *solve(Node *root, int &k, int node)
{
    if (!root)
        return NULL;

    if (root->data == node)
    {
        return root;
    }
    Node *left = solve(root->left, k, node);
    Node *right = solve(root->right, k, node);

    if (left and !right)
    {
        k--;
        if (k <= 0)
        {
            k = INT_MAX;
            return root;
        }
        return left;
    }

    if (!left and right)
    {
        k--;
        if (k <= 0)
        {
            k = INT_MAX;
            return root;
        }
        return right;
    }
    return NULL;
}
int kthAncestor(Node *root, int k, int node)
{

    Node *ans = solve(root, k, node);

    if (!ans or ans->data == node)
    {
        return -1;
    }

    return ans->data;
}
int main()
{

    return 0;
}