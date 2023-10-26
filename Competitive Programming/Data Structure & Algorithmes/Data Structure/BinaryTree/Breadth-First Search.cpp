#include<bits/stdc++.h>
#include"BinaryTree.cpp"
using namespace std;
//! Breadth-First Search (BFS) Algorithms/ Level Order Traversal
//! Time Complexity: O(N) where N is the number of nodes in the binary tree.
//! Auxiliary Space: O(N)
// Level Order Traversal work
//*M01: finding the height of the tree and traversing each level and printing the nodes of that level
//*M02: Efficiently using a queue.
//*     1
//*    / \
//*   2   3
//*  / \ / \
//* 4  5 6  7
// 1 2 3 4 5 6 7
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
//! Reverse Level Order Traversal
// 4 5 6 7 2 3 1
// Instead of printing a node, we push the node to stack
// Right subtree is visited before left subtree
void ReverseLevelOrderTraversal(BinaryTree* root){
    queue<BinaryTree*> q;
    stack<BinaryTree*> s;
    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        BinaryTree* temp=q.front();
        q.pop();

        if (temp==NULL)
        {
            s.push(NULL);
            if(!q.empty())q.push(NULL);
        }
        else{
            s.push(temp);
            if (temp->right)q.push(temp->right);
            if (temp->left)q.push(temp->left);
            
        }
    }

    while (!s.empty())
    {
        if(s.top()==NULL){
            cout<<endl;
            s.pop();
        }
        else{
            cout<<s.top()->data<<" ";
            s.pop();
        } 
    }
    
}

//! 1 2 3 4 5 6 7 -1 -1 -1 -1 -1 -1 -1 -1
void BuildLevelOrderTree( BinaryTree* &root){
    queue<BinaryTree*> q;
    int data;
    cout<<"Enter the data: "<<endl;
    cin>>data;
    root=new BinaryTree(data);
    q.push(root);

    while (!q.empty())
    {
        BinaryTree* temp=q.front();
        q.pop();

        int ldata;
        cout<<"Enter the left data of: "<<temp->data<<endl;
        cin>>ldata;
        if (ldata!=-1)
        {
            temp->left=new BinaryTree(ldata);
            q.push(temp->left);
        }

        int Rdata;
        cout<<"Enter the Right data of: "<<temp->data<<endl;
        cin>>Rdata;
        if (Rdata!=-1)
        {
            temp->right=new BinaryTree(Rdata);
            q.push(temp->right);
        }      
    }   
}
vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
    if (!root) return {};

    vector<vector<int>> ans;
    vector<int> level;
    queue<TreeNode*> q;
    bool reverseLevel = false; // Flag to reverse the order

    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();
        level.resize(levelSize);

        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();

            int index = reverseLevel ? levelSize - i - 1 : i;
            level[index] = node->val;

            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }

        ans.push_back(level);
        reverseLevel = !reverseLevel;
    }

    return ans;
}
    
int main(){
// BinaryTree* root=BuildTree(root); 
    BinaryTree* root=NULL;
   BuildLevelOrderTree(root); 
   LevelOrderTraversal(root);
   ReverseLevelOrderTraversal(root);
   
   
    return 0;
}