#include<bits/stdc++.h>
// #include "BFS.cpp"
using namespace std;
//! A binary tree is a tree data structure in which each node can have at most two children,
//!  which are referred to as the left child and the right child.
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6  7
//! 1 2 4 -1 -1 5 -1 -1 3 6 -1 -1 7 -1 -1
class BinaryTree{
public:
    int data;
    BinaryTree* left;
    BinaryTree* right;

    BinaryTree(int data):data(data),left(NULL),right(NULL){}

};
struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode() : val(0), left(nullptr), right(nullptr) {}
     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
    };

BinaryTree * BuildTree(BinaryTree* root){
    int data;
    cout<<"Enter the data: "<<endl;
    cin>>data;
    root=new BinaryTree(data);
    if(data==-1)return NULL;

    cout<<"left child of node : "<<data<<endl;
    root->left=BuildTree(root->left);
    cout<<"right child of node : "<<data<<endl;
    root->right=BuildTree(root->right);
    return root;
}

// int main(){
//    BinaryTree* root=BuildTree(root); 
//     return 0;
// }