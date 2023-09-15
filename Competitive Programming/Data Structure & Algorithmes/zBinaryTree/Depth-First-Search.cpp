#include<bits/stdc++.h>
#include"1BinaryTree.cpp"
using namespace std;
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6  7
//! Depth-First Search (DFS) Algorithms
//* Time Complexity: O(N)
//* Auxiliary Space: O(log N)
            //? 1.Preorder Traversal (current(print)-left-right)NLR
            //? 2.Inorder Traversal (left-current-right)LNR
            //? 3.Postorder Traversal (left-right-current)LRN


// 1 2 4 -1 -1 5 -1 -1 3 6 -1 -1 7 -1 -1
BinaryTree * BuildTree(BinaryTree* root){
    int data;
    cout<<"Enter the data: "<<endl;
    cin>>data;
    if(data==-1)return NULL;
    root=new BinaryTree(data);

    cout<<"left child of node : "<<data<<endl;
    root->left=BuildTree(root->left);
    cout<<"right child of node : "<<data<<endl;
    root->right=BuildTree(root->right);
    return root;
}
//! Current(print)->Left->Right
// 1 2 4 5 3 6 7
void PreorderTraversal(BinaryTree* root){
    if (root==NULL)
    {
        return;
    }
    cout<<root->data<<" ";
    PreorderTraversal(root->left);
    PreorderTraversal(root->right);
}

//! Left->Current(print)->Right
// 4 2 5 1 6 3 7
void InorderTraversal(BinaryTree* root){
    if (root==NULL)
    {
        return;
    }
    InorderTraversal(root->left);
    cout<<root->data<<" ";
    InorderTraversal(root->right);
}

//! Left->Right->Current(Print)
// 4 5 2 6 7 3 1
void PostorderTraversal(BinaryTree* root){
    if (root==NULL)return;
    
    PostorderTraversal(root->left);
    PostorderTraversal(root->right);
    cout<<root->data<<" ";
}

int countNodes(BinaryTree* root) {
    if(!root)return 0;
    int count=1;
    count+=countNodes(root->left);
    count+=countNodes(root->right);
    return count;
}

int countLeaves(BinaryTree* root){
  if(root == NULL) return 0;
  
  if(root -> left == NULL && root -> right == NULL)return 1;
  int leftC = countLeaves(root -> left);
  int rightC = countLeaves(root -> right);
  
  return leftC + rightC;
}

int HeightofTree(BinaryTree* root) {
    if(root==NULL)return 0;
    
    int leftHeight=HeightofTree(root->left);
    int RightHeight=HeightofTree(root->right);
    int ans=max(leftHeight,RightHeight)+1;
    return ans;
}
int diameterOfBinaryTree(BinaryTree* root) {
    if(root==NULL)return 0;

    int leftsubtree=diameterOfBinaryTree(root->left);
    int rightsubtree=diameterOfBinaryTree(root->right);
    int both=HeightofTree(root->left)+HeightofTree(root->right)+1;

    int ans=max(both,max(leftsubtree,rightsubtree));
    return ans;

    }
pair<int,int> diameterOptimize(BinaryTree* root) {
    if(root==NULL)return {0,0};
    
    pair<int,int> left=diameterOptimize(root->left);
    pair<int,int> right=diameterOptimize(root->right);
    
    int leftsubtree=left.first;
    int rightsubtree=right.first;
    int both=left.second+right.second;
   
   pair<int,int> ans;
    ans.first=max(both,max(leftsubtree,rightsubtree));
    ans.second=max(left.second,right.second)+1;
    return ans;
    }


int main(){
    BinaryTree *root=BuildTree(root);
    PreorderTraversal(root);
    cout<<endl;
    InorderTraversal(root);
    cout<<endl;
    PostorderTraversal(root);
    return 0;
}