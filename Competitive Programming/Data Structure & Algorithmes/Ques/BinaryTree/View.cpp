#include <bits/stdc++.h>
#include "1BinaryTree.cpp"
using namespace std;

void RightView(TreeNode *root, vector<int> &ans, int level)
{
    if (!root)
        return;
    if (level == ans.size())
        ans.push_back(root->val);

    RightView(root->right, ans, level + 1);
    RightView(root->left, ans, level + 1);
}
void leftView(TreeNode *root, vector<int> &ans, int level)
{
    if (!root)
        return;
    if (level == ans.size())
        ans.push_back(root->val);

    leftView(root->right, ans, level + 1);
    leftView(root->left, ans, level + 1);
}
vector<int> topView(Node *root)
{ //! first element in vertical col
    if (!root)
        return {};
    vector<int> ans;
    //! Horizontal , element
    map<int, int> coordinate;
    //! Node , Horizontal , Vertical distance
    queue<pair<Node *, int>> q;

    q.push({root, 0}); //* root (0)
    while (!q.empty())
    {
        pair<Node *, int> front = q.front();
        q.pop();
        Node *temp_front = front.first;
        int horizontal = front.second;

        if (coordinate.find(horizontal) == coordinate.end())
        {
            coordinate[horizontal] = temp_front->data;
        }

        if (temp_front->left)
            q.push({temp_front->left, horizontal - 1});
        if (temp_front->right)
            q.push({temp_front->right, horizontal + 1});
    }
    for (auto &&i : coordinate)
    {
        ans.push_back(i.second);
    }

    return ans;
}
vector<int> bottomView(Node *root)
{ //! last element in vertical col
    if (!root)
        return {};
    vector<int> ans;
    //! Horizontal , element
    map<int, int> coordinate;
    //! Node , Horizontal , Vertical distance
    queue<pair<Node *, int>> q;

    q.push({root, 0}); //* root (0)
    while (!q.empty())
    {
        pair<Node *, int> front = q.front();
        q.pop();
        Node *temp_front = front.first;
        int horizontal = front.second;

        coordinate[horizontal] = temp_front->data;

        if (temp_front->left)
            q.push({temp_front->left, horizontal - 1});
        if (temp_front->right)
            q.push({temp_front->right, horizontal + 1});
    }
    for (auto &&i : coordinate)
    {
        ans.push_back(i.second);
    }

    return ans;
}
vector<vector<int>> verticalTraversal(TreeNode *root)
{
    if (!root)
        return {};
    vector<vector<int>> ans;
    //! Horizontal , Vertical distance, elements
    map<int, map<int, vector<int>>> coordinate;
    //! Node , Horizontal , Vertical distance
    queue<pair<TreeNode *, pair<int, int>>> q;

    q.push({root, {0, 0}}); //* root (0,0)
    while (!q.empty())
    {
        pair<TreeNode *, pair<int, int>> front = q.front();
        q.pop();
        TreeNode *temp_front = front.first;
        int horizontal = front.second.first;
        int vertical = front.second.second;

        coordinate[horizontal][vertical].push_back(temp_front->val);

        if (temp_front->left)
            q.push({temp_front->left, {horizontal - 1, vertical + 1}});
        if (temp_front->right)
            q.push({temp_front->right, {horizontal + 1, vertical + 1}});
    }

    for (auto &&i : coordinate)
    {
        for (auto &j : i.second)
        {
            ans.push_back(j.second);
        }
    }

    return ans;
}

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

int main()
{
    vector<int> a;
    

    return 0;
}