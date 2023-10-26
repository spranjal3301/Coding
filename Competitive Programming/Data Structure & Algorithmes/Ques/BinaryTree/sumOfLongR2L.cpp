#include<bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;
void solve(Node *root, int sum, int noNode, int &maxSum, int &maxNode)
{
    if (!root)
        return;
    if (!root->left and !root->right and noNode >= maxNode)
    {
        if (noNode == maxNode)
            maxSum = max(maxSum, sum);
        else
            maxSum = sum;
        maxNode = noNode;
    }
    sum += root->data;
    solve(root->left, sum, noNode+1, maxSum, maxNode);
    solve(root->right, sum, noNode+1, maxSum, maxNode);
 
}
int sumOfLongRootToLeafPath(Node *root)
{

    int maxSum = 0;
    int maxNode = 0;
    solve(root,0,0,maxSum,maxNode);
    return maxSum;
}

int main(){
    
    return 0;
}