#include <bits/stdc++.h>
#include "BST.cpp"
using namespace std;
int solve(TreeNode *root, int k, int &i)
{
    if (!root)
        return -1;

    int left = solve(root->left, k, i);
    i++;
    if (left != -1)
    {
        return left;
    }
    if (i == k)
    {
        return root->val;
    }
    return solve(root->right, k, i);
}

int kthSmallest(TreeNode *root, int k)
{
    int i = 0;
    return solve(root, k, i);
}
int main()
{
    cout << (4 % 10);
    return 0;
}

//! Time Complexity: O(H + k), where H is the height of the BST
//! Auxiliary Space: O(H), where H is the height of the BST
// Improved variable naming for better readability
int kthSmallest(TreeNode *root, int k) {
    int count = countNodes(root->left); // Count nodes in the left subtree
    
    if (k <= count) {
        // The kth smallest element is in the left subtree
        return kthSmallest(root->left, k);
    } else if (k == count + 1) {
        // Found the kth smallest element at the current node
        return root->val;
    } else {
        // The kth smallest element is in the right subtree
        return kthSmallest(root->right, k - count - 1);
    }
}

// Helper function to count the number of nodes in a subtree
int countNodes(TreeNode* root) {
    if (!root) {
        return 0;
    }
    
    // In-order traversal to count nodes in the left and right subtrees
    return 1 + countNodes(root->left) + countNodes(root->right);
}
