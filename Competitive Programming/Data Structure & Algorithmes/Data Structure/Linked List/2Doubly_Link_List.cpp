#include<bits/stdc++.h>
using namespace std;
class DoublyLinkList{
    public:
        //! -><-[prev |data| next]-><-
        int data;
        DoublyLinkList *prev; 
        DoublyLinkList *next;
    DoublyLinkList(int data):data(data),prev(NULL),next(NULL){}
};
void Insert_at_Head(DoublyLinkList* &head, int data)
{
    DoublyLinkList *temp = new DoublyLinkList(data);
    temp->next = head;
    head->prev =temp;
    head = temp;
}
void Insert_at_Tail(DoublyLinkList* &tail, int data)
{
    DoublyLinkList *temp = new DoublyLinkList(data);
    tail->next =temp;
    temp->prev =tail;
    tail=temp;
}
void Insert_at_Position(DoublyLinkList* &head,DoublyLinkList* &tail, int position, int data)
{
    //for 1st position insertion
    if (position == 1)
    {
        Insert_at_Head(head, data);
        return;
    }
    DoublyLinkList *temp_head = head;
    DoublyLinkList *temp = new DoublyLinkList(data);
    // we already at 1th Node
    for (int i = 1; i < position - 1; i++)
    {
        if (temp_head == NULL || temp_head->next == NULL) {
        cout<<"Invaild Position"<<endl;
        return;
        }
        temp_head = temp_head->next;
    }
    //for last position insertion
    if (temp_head->next==NULL)
    {
        Insert_at_Tail(tail,data);
        return;
    }
    
    temp->next = temp_head->next;
    (temp_head->next)->prev=temp;
    temp_head->next=temp;
    temp->prev=temp;
}
void DeleteNode(DoublyLinkList* &head,DoublyLinkList* &tail, int position){
    DoublyLinkList *temp_head = head;
    if (position==1)
    {
        head=head->next;
        head->prev=NULL;
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
    DoublyLinkList *RemovedLocation=temp_head->next;
    if (RemovedLocation->next==NULL){
        tail=temp_head;
        RemovedLocation->prev=NULL;
        temp_head->next=NULL;
        delete RemovedLocation;
        return;
    }
    temp_head->next=RemovedLocation->next;
    (RemovedLocation->next)->prev=temp_head;

    RemovedLocation->next=NULL;
    RemovedLocation->prev=NULL;
    delete RemovedLocation;
}
void print(DoublyLinkList *head){
    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
    cout<<endl;
}
int main(){
    DoublyLinkList *node1=new DoublyLinkList(27);
    DoublyLinkList *head=node1;
    DoublyLinkList *tail=node1;
    Insert_at_Head(head,40);
    Insert_at_Tail(tail,40);
    Insert_at_Position(head,tail,3,12);
    print(head);
    DeleteNode(head,tail,4);
    print(head);
    return 0;
}