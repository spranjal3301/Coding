#include<bits/stdc++.h>
#include<map>
#include<unordered_map>
using namespace std;
//! What is Hash Table or Hash Map?
//* A hash table (also known as a hash map) is a data structure that stores key-value pairs. 
//* It uses a hash function to map the key to a location in the table, where the value is stored.

//!Hash Function
        //* Hash Code fn :it will generate an address for each key which is given in the hash function.
        //* Hashing/Compression fn : make give address of Hash Code fn is uniqe or prevent Collision.

//! What is Hashing?
//* Hashing refers to the process of generating a fixed-size output from 
//* an input of variable size using the mathematical formulas known as hash functions.
//* This technique determines an index or location for the storage of an item in a data structure.

//! What is Collision?
//* The hashing process generates a small number for a big key,
//* so there is a possibility that two keys could produce the same value.
//* The situation where the newly inserted key maps to an already occupied,
//* and it must be handled using some collision handling technology.

//! There are mainly two methods to handle collision: 
//* Separate Chaining :The idea behind separate chaining is to implement the linked list inside array called a chain.
//* Open Addressing / closed hashing :all elements are stored in the hash table itself. 
//* So at any point, the size of the table must be greater than or equal to the total number of keys 







int main(){
    pair<int,int> p={1,2};
    pair<int,int> p(1,2);
    
    //! unordered_map<Key,Value> um; Key->uniqe
    unordered_map<string,int> um;

    um["pranjal"]=27;

    //!Access 
    // cout<<um["unknown"]; auto make unknown=0
    // cout<<um.at("unknown") error key do-not exist

    //! Key Present or Not 
    // um.count("pranjal"); ->1 
    // um.count("unknown"); ->0 

    //! Delete
    //* um.erase(key) 

    //! Traversal
    for (auto &&i : um)
    {
        string key=i.first;
        int value=i.second;
    }
    //! iterator
    unordered_map<string,int> ::iterator it =um.begin();

    while (it!=um.end())
    {
        string key=it->first;
        int value=it->second;
        it++;
    }
    um.clear();
     
    return 0;
}