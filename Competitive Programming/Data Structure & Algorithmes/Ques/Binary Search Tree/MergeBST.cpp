#include <bits/stdc++.h>
#include "BST.cpp"
using namespace std;
//*1 Convert BST into Sorted Linklist
//*2 Merge Two Sorted Linklist
//*3 Sorted Linklist to BST
void ConvertBSTintoSortedDLL(TreeNode* root,TreeNode* &head){
    if(!root)return;

    ConvertBSTintoSortedDLL(root->right,head);
    root->right=head;
    if(!head)head->left=root;
    head=root;
    ConvertBSTintoSortedDLL(root->left,head);
}
TreeNode* MergetwoLL(TreeNode* head1,TreeNode* head2){
    TreeNode *head=NULL;
    TreeNode* tail=NULL;

    while (head1 && head2)
    {
      if(head1->val < head2->val){
        if (!head)
        {
            head=head1;
            tail=head1;
            head1=head1->right;
        }
        else
        {
            tail->right=head1;
            head1->left=tail;
            tail=head1;
            head1=head1->right;
        }   
      }
      else{
        if (!head)
        {
            head=head2;
            tail=head2;
            head2=head2->right;
        }
        else
        {
            tail->right=head2;
            head2->left=tail;
            tail=head2;
            head2=head2->right;
        } 
      }
    }

    while (head1 or head2)
    {
       if(head1){
            tail->right=head1;
            head1->left=tail;
            tail=head1;
            head1=head1->right;
      }
      else{
            tail->right=head2;
            head2->left=tail;
            tail=head2;
            head2=head2->right;

      } 
    }
    return head;
    
}
int lengthLL(TreeNode* head){
    int n=0;
    while (head)
    {
        head=head->right;
        n++;
    }
    return n;
    
}
TreeNode* SortedLinklisttoBST(TreeNode* &head,int n){
    if(n<=0 or head)return NULL;

    TreeNode* left=SortedLinklisttoBST(head,n/2);

    TreeNode* root=head;
    root->left=left;
    root->right=SortedLinklisttoBST(head,n-n/2-1);
    return root;
}
TreeNode *TwoMerge(TreeNode * &trees1,TreeNode * &trees2)
{
    TreeNode* head1=NULL;
    TreeNode* head2=NULL;
    ConvertBSTintoSortedDLL(trees1,head1);
    ConvertBSTintoSortedDLL(trees2,head2);
    head1->left=NULL;
    head2->left=NULL;

    TreeNode* head= MergetwoLL(head1,head2);
    
    int n=lengthLL(head);
    TreeNode* root= SortedLinklisttoBST(head,n);

    return root;

}
int main()
{

    return 0;
}