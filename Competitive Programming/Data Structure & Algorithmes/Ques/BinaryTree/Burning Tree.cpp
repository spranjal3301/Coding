#include <bits/stdc++.h>
using namespace std;
struct Node
{
    int data;
    Node *left;
    Node *right;

    Node(int val)
    {
        data = val;
        left = right = NULL;
    }
};

class Solution
{
private:
    void ChildtoParent(Node *root, unordered_map<Node *, Node *> &parent)
    {
        if (!root)
            return;

        queue<Node *> q;
        q.push(root);
        parent[root] = nullptr;

        while (!q.empty())
        {
            Node *front = q.front();
            q.pop();

            if (front->left)
            {
                q.push(front->left);
                parent[front->left] = front;
            }
            if (front->right)
            {
                q.push(front->right);
                parent[front->right] = front;
            }
        }
    }
    Node* findTargetNode(Node* root,int target){
        if(!root)return NULL;

        if(root->data==target)return root;
        Node* left=findTargetNode(root->left,target);
        Node* right=findTargetNode(root->right,target);

        if(left)return left;
        if(right)return right;

        return NULL;   
    }
public:
    int minTime(Node *root, int target)
    {   
        int time=0;
        if(!root->left and !root->right)return time;

        unordered_map<Node *, Node *> parent;
        ChildtoParent(root, parent);
        Node* tNode=findTargetNode(root,target);
        if(!tNode)return time;

        unordered_map<Node*,bool> burnedNode;
        queue<Node*> q;
        q.push(tNode);
        q.push(NULL);
        burnedNode[tNode]=true;
        

        while(!q.empty()){
            bool burn=false;
            Node* front=q.front();
            q.pop();

           if(front){
            if (front->left && !burnedNode[front->left])
            {
                q.push(front->left);
                burnedNode[front->left]=true;
                burn=true;
            }
            if (front->right && !burnedNode[front->right])
            {
                q.push(front->right);
                burnedNode[front->right]=true;
                burn=true;
            }
            if (parent[front] && !burnedNode[parent[front]])
            {
                q.push(parent[front]);
                burnedNode[parent[front]]=true;  
                burn=true;
            }  
           }
           else{
                time++;
                if(!q.empty())q.push(NULL);
           }

        }
        return time-1;//exclude target node time
    }
};
int main()
{

    return 0;
}