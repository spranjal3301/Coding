#include <bits/stdc++.h>
using namespace std;
//! Linked List is a linear data structure, in which elements are not stored at a contiguous location, rather they are linked 
//!using pointers. Linked List forms a series of connected nodes, where each node stores the data and the address of the next node.
// Why linked list data structure needed?
//* Dynamic Data structure:
//* Ease of Insertion/Deletion:
//* Efficient Memory Utilization:
//* Implementation: Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.

// There are mainly three types of linked lists:
//* Single-linked list
//* Double linked list
//* Circular linked list
class Linklist
//! Single-linked list
//! ->[data | next]->
{
public:
    int data;
    Linklist *next;

    Linklist(int data) : data(data), next(NULL)
    {
        // this->data = data;
        // this->next = NULL;
    }
};
void Insert_at_Head(Linklist *&head, int data)
{
    Linklist *temp = new Linklist(data);
    if(head==NULL){
        head=temp;
        // tail=temp 
        return;
    }
    temp->next = head;
    head = temp;
}
void Insert_at_Tail(Linklist *&tail, int data)
{
    Linklist *temp = new Linklist(data);
    if(tail==NULL){
        // head=temp;
        tail=temp;
        return;
    }
    tail->next = temp;
    tail = temp;
}
void Insert_at_Position(Linklist* &head,Linklist* &tail, int position, int data)
{
   
    Linklist *temp_head = head;
    Linklist *temp = new Linklist(data);
    // we already at 1th Node
    for (int i = 1; i < position - 1; i++)
    {
        temp_head = temp_head->next;
    }
    //for last position insertion
    if (temp_head->next==NULL)
    {
        Insert_at_Tail(tail,data);
        return;
    }
    
    temp->next = temp_head->next;
    temp_head->next = temp;
}
void DeleteNode(Linklist* &head,Linklist* &tail, int position){
    Linklist *temp_head = head;
    if (position==1)
    {
        head=head->next;
        temp_head->next=NULL;
        delete temp_head;
        return;
    }
    
    for (int i = 1; i < position-1 ; i++)
    {
        temp_head =temp_head->next;

    }
    //FOR TRY TO DELETE UN-EXISTING NODE
    if (temp_head == NULL || temp_head->next == NULL) {
        cout<<"Invaild Position"<<endl;
        return;
    }
    Linklist *RemovedLocation=temp_head->next;
    if (RemovedLocation->next==NULL)tail=temp_head;
    temp_head->next=RemovedLocation->next;
    
    delete RemovedLocation;
}
int length(Linklist *head){
    int len=0;
    while (head!=NULL)
    {
        len++;
        head=head->next;
    }
    return len;
}
void print(Linklist *head){
    // Don't pass head as reference we only want to print ,do not want to change head
    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
    cout<<endl;
}
void reverse(Linklist *&head,Linklist *&tail){
    Linklist *current=head;
    Linklist *prev=NULL;
    tail=head;
    while (head->next!=NULL)
    {
        head=head->next;
        current->next=prev;
        prev=current;
        current=head;
    }
    current->next=prev;

    //  ListNode *current = head;
    // ListNode *prev = NULL;
    // head = head->next;
    // while (prev != tail)
    // {
    //     current->next = prev;
    //     prev = current;
    //     current = head;
    //     if (head != NULL)
    //         head = head->next;
    // }




    //    ListNode *prev = nullptr, *curr = head;

    //     while (curr != nullptr) {
    //         swap(curr->next, prev);
    //         swap(prev, curr);
    //     }
    // n->c->cn
    // cn c n
    // c  cn n

    // n<-c<-cn
    // cn->c->n
}
Linklist* Recursive_reverse(Linklist *head){
//!Recursive
    if (head==NULL || head->next==NULL)
    {   
        return head;
    }
    Linklist *new_head=Recursive_reverse(head->next);
    (head->next)->next=head;
    head->next=NULL;
    return new_head;
}

int main()
{
    Linklist *head = NULL;
    Linklist *tail = NULL;
    Linklist *node1 = new Linklist(2);
    head = node1;
    tail = node1;
    Insert_at_Head(head, 1);
    Insert_at_Tail(tail, 3);
    Insert_at_Tail(tail, 4);
    Insert_at_Position(head,tail, 5, 5);
    DeleteNode(head,tail,5);
    print(head);
    cout<<length(head);
    reverse(head,tail);
    // tail=head;
    // head=Recursive_reverse(head);
    print(head);
    // cout<<(getmid(head))->data;
    return 0;
}