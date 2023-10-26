#include <bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;

void flatten(TreeNode *root)
{
    TreeNode *curr = root;
    while (curr)
    {

        if (curr->left)
        {
            TreeNode *pred = curr->left;
            while (pred->right)
            {
                pred = pred->right;
            }
            pred->right = curr->right;
            curr->right = curr->left;
            curr->left = NULL;
        }
        curr = curr->right;
    }
}
int main()
{

    return 0;
}