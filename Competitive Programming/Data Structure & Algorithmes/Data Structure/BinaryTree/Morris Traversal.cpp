#include <bits/stdc++.h>
#include "BinaryTree.cpp"
using namespace std;
//! Time Complexity: O(n)
//* If we take a closer look, we can notice that every edge of the tree is traversed at most three times.
//* And in the worst case, the same number of extra edges (as input tree) are created and removed.
//! Auxiliary Space: O(1) 
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6  7
void MorrisTraversal(Node *root) //!Inorder
{
    if (root == NULL)
        return;
    Node *current, *pre;

    current = root;
    while (current != NULL)
    {

        if (current->left == NULL)
        {
            cout << current->data << " ";
            current = current->right;
        }
        else                         
        {

            pre = current->left;
            while (pre->right != NULL && pre->right != current)
                pre = pre->right;

            if (pre->right == NULL)
            {
                pre->right = current;
                current = current->left;
            }
            else
            {
                pre->right = NULL;
                cout << current->data << " ";
                current = current->right;
            }
        }
    }
}
//!--------------------------------------------------------------------
void MorrisTraversal(Node* root)//!Preorder
{
    if (root == NULL)
        return;
 
    stack<Node*> st;
 
    // start from root node (set current node to root node)
    Node* curr = root;
 
    // run till stack is not empty or current is
    // not NULL
    while (!st.empty() || curr != NULL) {
        // Print left children while exist
        // and keep pushing right into the
        // stack.
        while (curr != NULL) {
            cout << curr->data << " ";
 
            if (curr->right)
                st.push(curr->right);
 
            curr = curr->left;
        }
 
        // We reach when curr is NULL, so We
        // take out a right child from stack
        if (st.empty() == false) {
            curr = st.top();
            st.pop();
        }
    }
}
int main()
{
// 1. Initialize current as root 
// 2. While current is not NULL
//    If the current does not have left child
//       a) Print current’s data
//       b) Go to the right, i.e., current = current->right
//    Else
//       a) Find rightmost node in current left subtree OR
//               node whose right child == current.
//          If we found right child == current
//              a) Update the right child as NULL of that node whose right child is current
//              b) Print current’s data
//              c) Go to the right, i.e. current = current->right
//          Else
//              a) Make current as the right child of that rightmost 
//                 node we found; and 
//              b) Go to this left child, i.e., current = current->left

    return 0;
}
