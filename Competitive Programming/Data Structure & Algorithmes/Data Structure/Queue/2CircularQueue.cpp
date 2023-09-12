#include<bits/stdc++.h>
using namespace std;
class CircularQueue
{
private:
    int *arr;
    int front;
    int rear;
    int size;
public:
    CircularQueue(int size):size(size) {
        arr=new int[size];
        front=rear=-1;
    }
    ~CircularQueue() {delete[] arr;}
    bool isEmpty(){
        if(rear==-1)return true;
        else return false; 
    }
    void enqueue(int data){
        if ((rear==size-1 and front==0)or (rear==(front-1)))
        {
           cout<<"Queue is Full"<<endl;
        }
        else if(rear==-1){
            rear=front=0;
            arr[rear]=data;

        }
        else if(rear==size-1 and front!=0){
            rear=0;
            arr[rear]=data;
        }
        else{
            rear++;
            arr[rear]=data;
        }
        
    }
    int dequeue(){
        if(front==-1){
            return -1;
        }

        int ans=arr[front];
        arr[front]=-1;

        if(rear==front){
           front=rear=-1;
        }
        else if(front==size-1){
            front=0;
        }
        else{
            front++;
        }
        return ans;
    }
    int Front(){
        if(front==-1)return -1;
        else return arr[front];
    }
};
int main(){
    CircularQueue q1(4);
    q1.enqueue(3);
    q1.enqueue(12);
    q1.enqueue(6);
    q1.enqueue(2);
    cout<<q1.dequeue();
    cout<<q1.dequeue();
    cout<<q1.dequeue();
    q1.enqueue(3);
    q1.enqueue(3);
    q1.enqueue(3);
    // cout<<q1.dequeue();
    // cout<<q1.dequeue();
    // cout<<q1.dequeue();
    

    return 0;
}