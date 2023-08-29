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
void reverse(ListNode *head, ListNode *tail)
{
    ListNode *current = head;
    ListNode *prev = NULL;
    head = head->next;
    while (prev != tail)
    {
        current->next = prev;
        prev = current;
        current = head;
        if (head != NULL)
            head = head->next;
    }
}

ListNode *reverseKGroup(ListNode *head, int k)
{

    if (head == NULL || head->next == NULL || k == 1)
    {
        return head;
    }

    ListNode *start = head;
    ListNode *end = head;
    int i = k - 1;

    while (i--)
    {
        end = end->next;
        if (end == NULL)
        {
            return head;
        }
    }
    ListNode *new_head = reverseKGroup(end->next, k);
    reverse(start, end);
    start->next = new_head;
    return end;
}

ListNode *reverseBetween(ListNode *head, int left, int right)
{
    if (left == right || !head || !head->next)
        return head;

    ListNode *dummy = new ListNode(0);
    dummy->next = head;
    ListNode *prev = dummy;

    // Move prev to the node before the left-th node
    for (int i = 1; i < left; ++i)
        prev = prev->next;

    ListNode *start = prev->next; // Left-th node
    ListNode *end = start;

    // Move end to the right-th node
    for (int i = left; i < right; ++i)
        end = end->next;

    ListNode *after_end = end->next; // Node after the right-th node

    // Break the chain
    prev->next = nullptr;
    end->next = nullptr;

    // Reverse the sublist
    reverse(start, nullptr);

    // Reconnect the reversed sublist
    prev->next = end;
    start->next = after_end;

    ListNode *new_head = dummy->next;
    delete dummy;
    return new_head;
}
int main()
{

    return 0;
}