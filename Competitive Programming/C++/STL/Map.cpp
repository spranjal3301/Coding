//! Map:
// It is a data structure that allows storing key-value pairs, where each key is unique within the map 
// Each key in the map is unique, and the map is typically implemented using a balanced binary search tree or a hash table.
#include<bits/stdc++.h>
#include<iostream>
#include<string>
#include<map>
using namespace std;
/*
Key-value pairs: A map consists of key-value pairs, where each key is associated with a value. The keys are unique, and each key can be associated with only one value.
Sorted order: By default, the elements in a map are sorted based on the keys in ascending order. You can also provide a custom sorting criterion by using a comparison function or a lambda expression.
Fast lookup: Maps provide efficient lookup operations based on the keys. The underlying data structure (typically a binary search tree or a hash table) allows for logarithmic or constant time complexity for these operations.
Insertion and deletion: You can insert key-value pairs into a map using the insert() function. The erase() function allows you to remove elements from the map based on their keys.S
Iterators: Maps support bidirectional iterators, allowing you to traverse the key-value pairs in a map in both forward and backward directions
*/

int main(){
// Map is an associative array
    map<string, int>  marksMap;
    marksMap["Atul"] = 58;
    marksMap["Rohit"] = 57;
    marksMap["Kishlay"] = 78;
    marksMap["Aditya"] = 65;
    marksMap["Sachin"] = 53;
 
    map<string,int> :: iterator iter;
    for (iter = marksMap.begin(); iter != marksMap.end(); iter++)
    {
        cout<<(*iter).first<<" "<<(*iter).second<<"\n";
    }
    marksMap.insert( { {"Rohan", 89}, {"Akshat", 46} } );
    // for(auto var1: marksMap)
    // {
    //     cout<<var1.first<<var1.second<<" ";
    // }
    
    return 0;
}