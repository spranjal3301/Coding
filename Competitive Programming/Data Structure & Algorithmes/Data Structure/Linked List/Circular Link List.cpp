#include<bits/stdc++.h>
using namespace std;
class Linklist
//! Single-linked list
//! ->[data | next]->
//! |______________|
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
int main(){
    Linklist *node1=new Linklist(27);
    node1->next=node1;
    forward_list<int> head; //!Single-linked list;
    list<int> Doubly_ll;//!Doubly-linked list;
    
    return 0;
}