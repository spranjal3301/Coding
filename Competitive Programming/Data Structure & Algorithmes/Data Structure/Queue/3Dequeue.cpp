#include<bits/stdc++.h>
using namespace std;
class Deque
{
private:
    int *arr;
    int front;
    int rear;
    int size;
public:
    Deque(int size):size(size) {
        arr=new int[size];
        front=rear=-1;
    }
    ~Deque() {delete[] arr;}
    void push_front(int data){
        if((front==0 and rear==size-1) or(rear==front-1)){
             cout<<"Queue is Full"<<endl;
        }
        else if(front==-1){ rear=front=0;}
        else if(front==0){front=size-1;}
        else{front--;}
        arr[front]=data;
    }
    int pop_front(){
        if(front==-1){return -1;}

        int ans=arr[front];
        arr[front]=-1;
        if(rear==front){front=rear=-1;}
        else if(front==size-1){front=0;}
        else{front++;}
        return ans;
    
    }
    void push_back(int data){
          if ((rear==size-1 and front==0)or (rear==(front-1)))
        {
           cout<<"Queue is Full"<<endl;
        }
        else if(rear==-1){rear=front=0;}
        else if(rear==size-1 and front!=0){rear=0;}
        else{rear++;}
        arr[rear]=data;
    }
    int pop_back(){
        if(rear==-1)return -1;

        int ans=arr[rear];
        arr[rear]=-1;
        if(rear==front)front=rear=-1;
        else if(rear==0)rear=size-1;
        else rear--;
        return ans;
    }
    
};
int main(){
    Deque d1(4);
    d1.push_front(2);
    d1.push_front(3);
    d1.push_front(5);
    d1.push_back(1);
    cout<<d1.pop_back();
    cout<<d1.pop_front();
    return 0;
}