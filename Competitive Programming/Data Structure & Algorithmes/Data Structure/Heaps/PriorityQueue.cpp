#include<bits/stdc++.h>
#include<queue>
using namespace std;

int main(){
    //! Default Max Heap
    priority_queue<int> maxpq;
    maxpq.push(10);
    maxpq.push(20);
    maxpq.push(30);
    maxpq.push(40);    
    maxpq.push(50);

//! Custom comparator for the priority_queue to sort based on frequency
    //* auto comp = [&](const T & a, const T & b) {
    //*     return a.second > b.second;
    //* };
    
    cout<<maxpq.top()<<endl;
    maxpq.pop();
    cout<<maxpq.top()<<endl;
    cout<<maxpq.size()<<endl;
    cout<<maxpq.empty()<<endl;

    //! Min Heap
    priority_queue<int, vector<int>, greater<int>> minpq;
    minpq.push(10);
    minpq.push(20);
    minpq.push(30);
    minpq.push(40);
    minpq.push(50);

    cout<<minpq.top()<<endl;
    minpq.pop();    
    cout<<minpq.top()<<endl;
    cout<<minpq.size()<<endl;
    cout<<minpq.empty()<<endl;
    return 0;
}