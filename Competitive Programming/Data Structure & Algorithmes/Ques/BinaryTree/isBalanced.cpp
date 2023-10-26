#include<bits/stdc++.h>
#include"1BinaryTree.cpp"
using namespace std;
int HeightofTree(TreeNode* root) {
    if(root==NULL)return 0;
    
    int leftHeight=HeightofTree(root->left);
    int RightHeight=HeightofTree(root->right);
    int ans=max(leftHeight,RightHeight)+1;
    return ans;
}

bool isBalanced(TreeNode* root) {
    if(root==NULL)return 1;  
    bool lh=isBalanced(root->left);
    bool Rh=isBalanced(root->right);
    int diff=HeightofTree(root->left)-HeightofTree(root->right);
    
    if(lh && Rh &&diff<=1 and diff>=-1)return true;
    return false;
    } 


//! Function to check if a binary tree is balanced and compute its height.
pair<bool, int> isBalancedHeight(TreeNode* root) {
    // Base case: an empty tree is balanced with a height of 0.
    if (root == nullptr) {
        return {true, 0};
    }

    // Recursively check the left and right subtrees.
    std::pair<bool, int> left = isBalancedHeight(root->left);
    std::pair<bool, int> right = isBalancedHeight(root->right);

    bool isLeftBalanced = left.first;
    bool isRightBalanced = right.first;
    int leftHeight = left.second;
    int rightHeight = right.second;

    // Calculate the height difference between the left and right subtrees.
    int heightDifference = leftHeight - rightHeight;

    pair<bool, int> result;

    // Check if the current tree is balanced and update the height.
    if (isLeftBalanced && isRightBalanced && heightDifference >= -1 && heightDifference <= 1) {
        result.first = true;
    } else {
        result.first = false;
    }
    result.second = std::max(leftHeight, rightHeight) + 1;

    return result;
}


int main(){
    
    return 0;
}