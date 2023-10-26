#include<bits/stdc++.h>
using namespace std;
bool isSameTree(TreeNode* p, TreeNode* q) {
    if(!p and !q)return true;
    if(!p or !q)return false;
    bool l=isSameTree(p->left,q->left);
    bool r=isSameTree(p->right,q->right);
    if(l && r && p->val==q->val)return true;
    return false;
    }
int main(){
    
    return 0;
}