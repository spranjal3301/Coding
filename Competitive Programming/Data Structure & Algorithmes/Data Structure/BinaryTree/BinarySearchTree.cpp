#include <bits/stdc++.h>
using namespace std;
//! A Binary Search Tree (BST) is a special type of binary tree in which the left child of a node has a value less than the node’s value and the right child has a value greater than the node’s value.
//* Inorder traversal: In case of binary search trees (BST) is Sorted.
class BST
{
public:
    int data;
    BST *left;
    BST *right;

    BST() : data(-1), left(NULL), right(NULL) {}
    BST(int data) : data(data), left(NULL), right(NULL) {}
};
struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode() : val(0), left(nullptr), right(nullptr) {}
     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 };
struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};

//!----------------------------------------------

void Insert(BST *&root, int data)
{
    //! Time Complexity: O(logN)/O(H) where N is the number of nodes of the BST
    //! Auxiliary Space: O(1)
    if (!root)
    {
        root = new BST(data);
        return;
    }

    if (data >= root->data)
    {
        Insert(root->right, data);
    }
    else
    {
        Insert(root->left, data);
    }
}
void Build_BST(BST *&root)
{
    int data;
    cout << "Enter BST Data:" << endl;
    cin >> data;

    while (data != -1)
    {
        Insert(root, data);
        cin >> data;
    }
}
void LevelOrderTraversal(BST *root)
{
    queue<BST *> q;
    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        BST *temp = q.front();
        q.pop();

        if (temp == NULL)
        {
            cout << endl;
            if (!q.empty())
                q.push(NULL);
        }
        else
        {
            cout << temp->data << " ";
            if (temp->left)
                q.push(temp->left);
            if (temp->right)
                q.push(temp->right);
        }
    }
}
BST *searchBST(BST *root, int val)
{
    //! Recursive and Looping

    if (!root)
        return NULL;

    if (root->data == val)
    {
        return root;
    }
    else if (root->data > val)
    {
        return searchBST(root->left, val);
    }
    else
    {
        return searchBST(root->right, val);
    }

    //  while (root != NULL && root->val != target) {

    //     if (root->val > target)
    //         root = root->left;

    //     else
    //         root = root->right;
    // }
    // return root;
}

BST *minValue(BST *root)
{
    while (root->left)
    {
        root = root->left;
    }
    return root;
}
BST *maxValue(BST *root)
{
    while (root->right)
    {
        root = root->right;
    }
    return root;
}

BST *deleteNode(BST *root, int key)
{
    if (!root)
        return root;

    if (root->data == key)
    {
        //! case1 0 Child
        if (!root->left and !root->right)
        {
            delete root;
            return NULL;
        }

        //! case2 1 Child
        if (root->left and !root->right)
        {
            BST *temp = root->left;
            delete root;
            return temp;
        }
        else if (!root->left and root->right)
        {
            BST *temp = root->right;
            delete root;
            return temp;
        }

        //! case3 2 Child
        if (root->left and root->right)
        {
            //*Value which is lesser than all right greater than all left (option1 select from left ,option2 select from right)
            int mini = minValue(root->right)->data; //or maxValue(root->left)
            root->data = mini;
            root->right = deleteNode(root->right, mini);
            return root;
        }
    }
    else if (root->data > key)
    {
        root->left = deleteNode(root->left, key);
        return root;
    }
    else
    {
        root->right = deleteNode(root->right, key);
        return root;
    }
    return NULL;
}
int main()
{
    BST *root = NULL;
    Build_BST(root);
    LevelOrderTraversal(root);
    return 0;
}