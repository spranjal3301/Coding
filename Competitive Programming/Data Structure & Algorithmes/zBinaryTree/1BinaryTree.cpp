#include<bits/stdc++.h>
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

BinaryTree * BuildTree(BinaryTree* root){
    int data;
    cout<<"Enter the data: "<<endl;
    cin>>data;
    root=new BinaryTree(data);
    if(data==-1)return NULL;

    cout<<"left chile of node : "<<data<<endl;
    root->left=BuildTree(root->left);
    cout<<"right chile of node : "<<data<<endl;
    root->right=BuildTree(root->right);
    return root;
}
//! Tree Traversal algorithms can be classified broadly into two categories:
//! Depth-First Search (DFS) Algorithms
            //? 1.Preorder Traversal (current-left-right)
            //? 2.Inorder Traversal (left-current-right)
            //? 3.Postorder Traversal (left-right-current)
//! Breadth-First Search (BFS) Algorithms

//* Level Order Traversal (Breadth First Search or BFS) of Binary Tree
void LevelOrderTraversal(BinaryTree* root){
    queue<BinaryTree*> q;
    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        BinaryTree* temp=q.front();
        q.pop();

        if (temp==NULL)
        {
            cout<<endl;
            if(!q.empty())q.push(NULL);
        }
        else{
            cout<<temp->data<<" ";
            if (temp->left)q.push(temp->left);
            if (temp->right)q.push(temp->right);
            
        }
    }
    

}
int main(){
   BinaryTree* root=BuildTree(root); 
   LevelOrderTraversal(root);
    return 0;
}