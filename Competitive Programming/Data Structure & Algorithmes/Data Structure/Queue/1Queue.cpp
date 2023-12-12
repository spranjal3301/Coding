#include<bits/stdc++.h>
using namespace std;
//!Queue is just a Line people(FIFO)
//! A queue is a linear data structure that is open at both ends and the operations are performed
//! in First In First Out (FIFO) order.
//* We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.
//delete/pop/enqueue->front
//insert/push/dequeue->back
class queue_arr
{
private:
    int *arr;
    int front;
    int rear;
    int size;
public:
    queue_arr(int size):size(size) {
        arr=new int[size];
        front=0;
        rear=0;
    }
    bool isEmpty(){
        if(rear==front)return true;
        else return false; 
    }
    void enqueue(int data){
        if (rear==size)
        {
           cout<<"Queue is Full"<<endl;
        }
        else{
            arr[rear]=data;
            rear++;
        }
        
    }
    int dequeue(){
        if(front==rear){
            return -1;
        }
        else{
            int ans=arr[front];
            arr[front]=-1;
            front++;
            if (front==rear)
            {
                front=0;
                rear=0;   
            }
            return ans;
        }
    }
    int Front(){
        if(front==rear)return -1;
        else return arr[front];
    }
    
};
queue<int> reverse(queue<int> &q)
{
    //   if(q.empty()){
    //       return q;
    //   }
    //   int e=q.front();
    //   q.pop();
    //   reverse(q);
    //   q.push(e);
    //   return q;

    stack<int> r;
    while (!q.empty()) {
        r.push(q.front());
        q.pop();
    }
    while (!r.empty()) {
        q.push(r.top());
        r.pop();
    }
    return q;  
    }

int main(){
    queue<int> q1;
    // q1.push(1);
    // q1.push(2);
    // q1.push(3);
    // q1.push(4);
    // q1.pop();
    // cout<<q1.front();
    // cout<< q1.back();

    // deque<int> d1;
    // d1.push_back(1);
    // d1.pop_back();
    // d1.push_front(2);
    // d1.pop_front();

    queue_arr q2(10);
    q2.enqueue(1);
    q2.enqueue(2);
    q2.enqueue(3);
    q2.enqueue(4);
    cout<<q2.dequeue();
    cout<<q2.Front();
    cout<<q2.isEmpty();
    

    return 0;
}