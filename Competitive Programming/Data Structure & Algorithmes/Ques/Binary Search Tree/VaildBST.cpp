#include<bits/stdc++.h>
#include "BST.cpp"
using namespace std;
bool isValidBST(TreeNode* root, TreeNode* minNode = nullptr, TreeNode* maxNode = nullptr) {
    // Base case: An empty tree is a valid BST.
    if (!root) return true;

    // Check if the current node's value is within the valid range.
    if ((minNode && root->val <= minNode->val) || (maxNode && root->val >= maxNode->val)) {
        return false;
    }

    // Recursively check the left and right subtrees with updated range.
    return isValidBST(root->left, minNode, root) && isValidBST(root->right, root, maxNode);
}

int main(){
    
    return 0;
}