#include<bits/stdc++.h>
using namespace std;
 struct ListNode {
     int val;
     ListNode *next;
     ListNode(int x) : val(x), next(NULL) {}
 };


//!floyd cycle detection alogorithm: 
ListNode* getmid(ListNode* head){
    if (head==NULL || head->next==NULL)return head;
    //!floyd cycle detection alogorithm: also use to find LL is cyclic or not 
    ListNode *slow=head; 
    ListNode *fast=head->next;
    while (fast!=NULL)
    {
        fast=fast->next;
        if (fast!=NULL)fast=fast->next;
        slow=slow->next;
    }
    return slow;
}




class Solution {
private:
//!floyd cycle detection alogorithm: 
    ListNode *isCycle(ListNode *head) {
        ListNode *slow=head;
        ListNode *fast=head;
        while(fast!=NULL){
            slow=slow->next;
            fast=fast->next;
            if(fast!=NULL)fast=fast->next;
            if(fast==slow and fast!=NULL){
                return fast;
            }
        }
        return NULL;
    }
public:
    ListNode *detectCycle(ListNode *head) {
        if(head==NULL or head->next==NULL){
            return NULL;
        }
        // if(head->next==head)return head;
        ListNode *slow=head;
        ListNode *fast=isCycle(head);
        if(fast==NULL){
            return fast;
        }
        while(fast!=slow){
            fast=fast->next;
            slow=slow->next;
        }
        return fast;
    }
};
