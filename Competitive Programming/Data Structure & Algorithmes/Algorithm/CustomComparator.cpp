#include<bits/stdc++.h>
using namespace std;

//! Custom Comparator
//swap in false condition
//  ascending order(a < b)

//!M01
bool custCmp(pair<int, int> a, pair<int, int> b){
    if(a.first == b.first){
        return a.second > b.second;//*sort in descending order(a > b) on the basis of second
    }
    return a.first < b.first;//*sort in ascending order(a < b) on the basis of first
}

//!M02
class MyComparator {
public:
    bool operator()(int a, int b) const {
        // Custom comparison logic goes here
        return a > b; // Example: Sort integers in descending order
    }
};

class MyClass {
//!M03
   static bool custCmp(pair<int, int> a, pair<int, int> b){
    if(a.first == b.first){
        return a.second > b.second;
    }
    return a.first < b.first;
}
public:
    void someFunction() {
        //!M04
        auto myComparator = [](int a, int b) {
            return a > b; // Custom comparison logic
        };

        std::set<int, decltype(myComparator)> mySet(myComparator);
        mySet.insert(3);
        mySet.insert(1);
        mySet.insert(5);
        
        for (int num : mySet) {
            std::cout << num << " ";
        }
        std::cout << std::endl;
    }
};



int main(){

    vector<pair<int, int>> v={{1,2},{1,4},{1,6}};
    // vector<pair<int, int>> v={{1,2},{2,2},{3,2}};
    sort(v.begin(), v.end(), custCmp);  

    for(auto it : v){
        cout << it.first << " " << it.second << endl;
    } 

     set<int, MyComparator> mySet;


    return 0;
}


class Solution {
public:
    unordered_map<char,int> mp;

    static bool cmp(char a, char b, unordered_map<char, int>& mp) {
        return mp[a] > mp[b];
    }

    string frequencySort(string s) {
        int n = s.size();

        for(auto &c : s)
            mp[c]++;

        sort(s.begin(), s.end(), [&](char a, char b) { return cmp(a, b, mp); });   

        return s;
    }
};



//- function inside function

int main(){
    int a = 10;

    //!  C++14 syntax for lambda expressions
    auto add = [&](int b) {
        return a + b;
    };

    //! C++11 syntax for lambda expressions
    //- function<ReturnType(parameterTypes)>
     function<void(int, int)> dfs = [&](int node, int parent) {
        // Do something
    };

    auto dfs = [&](int node, int parent) -> void {
    // ...
    };

    cout << add(5) << endl;
    return 0;
}