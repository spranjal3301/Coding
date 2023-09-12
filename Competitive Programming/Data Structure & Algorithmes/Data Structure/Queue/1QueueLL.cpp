#include<bits/stdc++.h>
using namespace std;
class Node
{
public:
    int val;
    Node* next;
    Node(int val):val(val),next(NULL) {}
};
class queue_LL{
private:
    Node *front;
    Node *rear;  
public:
    queue_LL():front(NULL),rear(NULL){}
    void enqueue(int data){
        Node* temp=new Node(data); 
        if (rear==NULL)
        {
            front=rear=temp;
        }
        else{
            rear->next=temp;
            rear=temp;
        }
        
    }
    int dequeue(){
        if(front==NULL)return -1;
        else{
            Node* del =front;
            int ans=del->val;
            front=front->next;
            del->next=NULL;
            delete del;
            return ans;
            }
    }
    int Front(){
        if(front==NULL)return -1;
        else return front->val;
    }


};
int main(){
    queue_LL q1;
    q1.enqueue(1);
    q1.enqueue(2);
    q1.enqueue(3);
    q1.enqueue(4);
    cout<<q1.dequeue();
    cout<<q1.dequeue();
    cout<<q1.dequeue();
    cout<<q1.dequeue();
    // cout<<q1.Front();
    return 0;
}