#include <bits/stdc++.h>
using namespace std;
struct Node
{
	int data;
	Node *left;
	Node *right;
};
class Solution
{
	int countNode(Node *tree)
	{
		if (!tree)
			return 0;
		int ans = 1 + countNode(tree->left) + countNode(tree->right);
		return ans;
	}
	bool isCBT(Node *tree, int i, int totalNode)
	{
		if (!tree)
			return true;

		if (i >= totalNode)
			return false;
		else
		{
			bool left = isCBT(tree->left, 2 * i + 1, totalNode);
			bool right = isCBT(tree->right, 2 * i + 2, totalNode);
			return left && right;
		}
	}
	bool isMaxheap(Node *root)
	{
		if (!root->left and !root->right)
			return true;

		if (root->right == NULL)
		{
			return (root->data > root->left->data);
		}
		else
		{
			bool left = isMaxheap(root->left);
			bool right = isMaxheap(root->right);
			return (left && right && (root->data > root->left->data && root->data > root->right->data));
		}
	}

public:
	bool isHeap(struct Node *tree)
	{
		int i = 0;
		int totalNode = countNode(tree);

		return (isCBT(tree, i, totalNode) && isMaxheap(tree));
	}
};
int main()
{

	return 0;
}