#include <bits/stdc++.h>
using namespace std;
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
class Solution
{
    ListNode* getmid(ListNode *head)
    {
        if (head == NULL || head->next == NULL)
            return head;
        ListNode *slow = head;
        ListNode *fast = head->next;
        while (fast->next != NULL)
        {
            slow = slow->next;
            fast = fast->next;
            if (fast->next != NULL)
                fast = fast->next;
        }
        return slow;
    }
    ListNode* mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        ListNode dummy(0);
        ListNode *tail = &dummy;

        while (list1 && list2)
        {
            if (list1->val < list2->val)
            {
                tail->next = list1;
                list1 = list1->next;
            }
            else
            {
                tail->next = list2;
                list2 = list2->next;
            }
            tail = tail->next;
        }
        if (list1)tail->next = list1;
        else if (list2) {tail->next = list2;}

        return dummy.next;
    }

public:
    ListNode* sortList(ListNode *head)
    {
        if (head == NULL or head->next == NULL)
        return head;

        ListNode *mid=getmid(head);
        ListNode *left=head;
        ListNode *right=mid->next;
        mid->next=NULL;

        ListNode *merge_left=sortList(left);
        ListNode *merge_right=sortList(right);

        ListNode *merge_head=mergeTwoLists(merge_left,merge_right);
        return merge_head;

        

    }
};

int main()
{

    return 0;
}