#include<bits/stdc++.h>
#include"1BinaryTree.cpp"
using namespace std;
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root) return nullptr;
    
    // If either p or q is found, return the current node as a potential LCA.
    if (root == p || root == q) return root;

    // Recursively search for p and q in the left and right subtrees.
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);

    // If both p and q are found in different subtrees, this node is the LCA.
    if (left && right) return root;

    // If only one of p or q is found, return it (the other one is not present).
    return left ? left : right;
}
int main(){
    
    return 0;
}