#include <bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;
void SearchMap(vector<int> in, unordered_map<int, int> &Inorder_Index)
{
    for (int i = 0; i < in.size(); i++)
    {
        Inorder_Index[in[i]] = i;
    }
}
int search(vector<int> &in, int key)
{
    for (int i = 0; i < in.size(); i++)
    {
        if (key == in[i])
            return i;
    }
    return -1;
}
TreeNode *solve(vector<int> &pre, vector<int> &in, int &i, int start, int end, unordered_map<int, int> &Inorder_Index)
{
    if (i >= pre.size() or start > end)
    {
        return NULL;
    }
    int x = pre[i];
    TreeNode *node = new TreeNode(x);
    // int pos = search(in, x);
    int pos = Inorder_Index[x];
    i++;
    node->left = solve(pre, in, i, start, pos - 1, Inorder_Index);
    node->right = solve(pre, in, i, pos + 1, end, Inorder_Index);
    return node;
}

TreeNode *buildTree_Inorder_PreorderTraversal(vector<int> &preorder, vector<int> &inorder)
{
    unordered_map<int, int> Inorder_Index;
    SearchMap(inorder, Inorder_Index);
    int i = 0;
    int end = inorder.size() - 1;
    TreeNode *root = solve(preorder, inorder, i, 0, end, Inorder_Index);
    return root;
}
TreeNode* Inorder_PostorderBuild(vector<int> postorder,int i,int start,int end,unordered_map<int, int> Inorder_Index){
    if(i<=0 or start>end)return NULL;

    int x=postorder[i];
    TreeNode* root=new TreeNode(x);
    int position=Inorder_Index[x];
    i--;
    root->right=Inorder_PostorderBuild(postorder,i,start,position-1,Inorder_Index);
    root->left=Inorder_PostorderBuild(postorder,i,position+1,end,Inorder_Index);

    return root;

}
TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder)
{
    unordered_map<int, int> Inorder_Index;
    SearchMap(inorder, Inorder_Index);
    int i = postorder.size()-1;
    int end = inorder.size() - 1;
    TreeNode *root = Inorder_PostorderBuild(postorder, i, 0, end, Inorder_Index);
    return root;
}
int main()
{

    return 0;
}