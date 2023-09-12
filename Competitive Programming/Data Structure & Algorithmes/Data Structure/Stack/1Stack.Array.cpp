#include <bits/stdc++.h>
using namespace std;
class Stack_array
{
private:
    int *arr;
    int i;
    int size;

public:
    Stack_array(int size) : size(size), i(-1)
    {
        arr = new int[size];
    }
    void push(int element)
    {
        if (i < size - 1)
        {
            i++;
            arr[i] = element; 
        }
        else
        {
            cout << "StackOverflow" << endl;
        }
    }
    void pop()
    {
        if (i >= 0)
        {
            i--;
        }
        else
            cout << "StackUnderflow" << endl;
    }

    int top() { return arr[i]; }

    bool isEmpty()
    {
        if (i == -1)
            return true;
        else
            return false;
    }
};
void insertAtBottom(stack<int> &St, int X)
{
    if (St.empty())
    {
        St.push(X);
        return ;
    }
    int k = St.top();
    St.pop();
    insertAtBottom(St, X);
    St.push(k);
    return;
}
void Reverse(stack<int> &St){
    if(St.empty()){
        return ;
    }
    int k=St.top();
    St.pop();
    Reverse(St);
    insertAtBottom(St,k);
    return;
        }
void insertSort(stack<int> &St, int X)
{
    if (St.empty() or X>=St.top())
    {
        St.push(X);
        return ;
    }
    int k = St.top();
    St.pop();
    insertSort(St, X);
    St.push(k);
    return;
}
void sort(stack<int> &s)
{
   //Your code here
   if(s.empty()){
       return;
   }
   int k=s.top();
   s.pop();
   sort(s);
   insertSort(s,k); 
}

int main()
{
    //! STL Stack
    stack<int> s;
    cout << s.top();
    s.push(1);
    s.push(2);
    s.push(3);
    s.pop();
    bool e = s.empty();

    //! Array Stack
    Stack_array st1(5);
    st1.push(1);
    st1.push(2);
    st1.push(3);
    st1.push(4);
    st1.pop();
    return 0;
}