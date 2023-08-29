#include<bits/stdc++.h>
using namespace std;

template<class t=int>
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

template<class t1=int>
class StackNode
{
private:
    ListNode<t1> *head;
    int size;
void Insert(ListNode<t1> *&head, int data)
{
    ListNode<t1> *temp = new ListNode<t1>(data);
    if(head==NULL){
        head=temp;
        // tail=temp 
        return;
    }
    temp->next = head;
    head = temp;
}
void Delete(ListNode<t1>* &head){
    if (head == NULL) {
        return; // Nothing to delete
    }
    ListNode<t1> *temp_head = head;
       head=head->next;
       temp_head->next=NULL;
       delete temp_head;
    
}
public:
    StackNode() : size(0), head(NULL){}
    void push(int element)
    {
        size++;
        Insert(head,element);

    }
    void pop()
    {
        if (size==0)
        {
            cout << "StackUnderflow" << endl;
        }else{
             size--;
            Delete(head);
        }   
       
    }
    int top() { return head->val; }
    bool isEmpty()
    {
        if (size == 0)
            return true;
        else
            return false;
    }
};
int main(){
    StackNode<int> s1;
    s1.push(2);
    s1.push(7);
    s1.push(3);
    s1.push(4);
    cout<<s1.top();
    s1.pop();
    cout<<s1.top();
    return 0;
}