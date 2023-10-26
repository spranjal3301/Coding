#include <bits/stdc++.h>
using namespace std;
struct Node
{
    int data;
    Node *next;

    Node(int x)
    {
        data = x;
        next = NULL;
    }
};
//! Expected Time Complexity: O(nk Logk)
//! Expected Auxiliary Space: O(k)
class mini
{
public:
    Node* current_head; // current head
    int arr; // which linklist
    int val; // value of minmum element

    mini(int arr, Node* current_head):arr(arr),current_head(current_head)
    {
        val=current_head->data;
    }
};
class myComp
{
public:
    bool operator()(mini *a, mini *b)
    {
        return a->val > b->val;
    }
};
Node *mergeKLists(Node *arr[], int K)
{
    priority_queue<mini *, vector<mini *>, myComp> pq;

    for (int i = 0; i < K; i++)
    {
        mini *first = new mini(i,arr[i]);
        pq.push(first);
    }
    Node* dummy=new Node(-1);
    Node* head=dummy;
    Node* tail=head;

    while (!pq.empty())
    {
        mini *m = pq.top();
        pq.pop();
        tail->next=m->current_head;
        tail=tail->next;
       
        int i = m->arr;
        
        if (m->current_head->next!=NULL)
        {
            mini *next = new mini(i,m->current_head->next);
            pq.push(next);
        }
    }

    return head->next;
}
int main()
{

    return 0;
}