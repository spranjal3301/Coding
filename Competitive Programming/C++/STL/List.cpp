//! List 
// An array stores the elements in a contiguous manner in which inserting some element calls for a shift of other elements, which is time taking. 
// But in a list, we can simply change the address the pointer is pointing to

// Some Key points about the list container:
// Doubly-linked list: The list container in C++ implements a doubly-linked list, where each element has pointers to the previous and next elements in the list.
// Dynamic size: Like deque, list containers can dynamically resize to accommodate the number of elements. They manage their own memory and automatically expand or contract as necessary.
// Efficient insertion and deletion: list provides efficient insertion and deletion of elements at any position, including the beginning and end of the list. These operations don't require shifting or reallocation of elements.
// No random access: Unlike vector or deque, list does not support random access using [] operator or random access iterators. Instead, it provides bidirectional iterators.


#include<iostream>
#include<list>
using namespace std;

void display(list<int> &lst){
    list<int> :: iterator it;
    for (it = lst.begin(); it != lst.end(); it++)
    {
        cout<<*it<<" ";
    }
    // for (auto i: lst)
    // {
    //     cout<<i<<" ";
    // }
    
    
}

int main(){
    list<int> list1;  //empty list of 0 length
    list1.push_back(5);
    list1.push_back(7);
    list1.push_back(1);
    list1.push_back(9);
    list1.push_back(12);
    display(list1);
    // list1.pop_back();
    // display(list1);
    // list1.pop_front();
    // display(list1);
    // list1.remove(9);
    // list1.sort();

    list<int> list2(3);  //empty list of length 3
    list<int> :: iterator it = list2.begin();
    *it = 45;
    it++;
    *it = 6;
    it++;
    *it = 9;
    it++;
    display(list2);

/*
push_back() and push_front(): Insert elements at the back or front of the list.
pop_back() and pop_front(): Remove elements from the back or front of the list.
insert(): Insert elements at a specific position in the list.
erase(): Remove elements from a specific position or a range in the list.
size(): Get the number of elements in the list.
empty(): Check if the list is empty.
front() and back(): Access the first and last elements of the list.
begin() and end(): Get iterators pointing to the beginning and end of the list.
*/

    return 0;
}