#include<bits/stdc++.h>
using namespace std;

class AllOne {
    unordered_map<string,list<pair<int,unordered_set<string>>>::iterator> mp;
    list<pair<int,unordered_set<string>>> lst;

public:
    AllOne() {
        
    }
    
    void inc(string key) {
        if(mp.find(key)==mp.end()){    
            if(lst.begin()==lst.end() || lst.begin()->first!=1){
                unordered_set<string> s;
                s.insert(key);
                lst.push_front({1,s});
                mp[key]=lst.begin();
                return;
            }
            lst.begin()->second.insert(key);
            mp[key]=lst.begin();
            return;
        }
        auto it=mp[key];
        auto it1=it;
        it1++;
        if(it1==lst.end() || it1->first!=it->first+1){
            unordered_set<string> s;
            s.insert(key);
            lst.insert(it1,{it->first+1,s});
            mp[key]=--it1;
        }
        else{
            it1->second.insert(key);
            mp[key]=it1;
        }
        it->second.erase(key);
        if(it->second.empty()){
            lst.erase(it);
        }
        
    }
    
    void dec(string key) {
        auto it = mp[key];
        if(it->first==1){
            it->second.erase(key);
            if(it->second.empty()){
                lst.erase(it);
            }
            mp.erase(key);
            return;
        }

        auto it1=it;
        it1--;
        if(it==lst.begin() || it1->first!=it->first-1){
            unordered_set<string> s;
            s.insert(key);
            lst.insert(it,{it->first-1,s});
            mp[key]= --it;
        }
        else{
            it1->second.insert(key);
            mp[key]=it1;
        }
        it->second.erase(key);
        if(it->second.empty()){
            lst.erase(it);
        }
    }
    
    string getMaxKey() {
        if(lst.empty()){
            return "";
        }
        return *(lst.back().second.begin());
    }
    
    string getMinKey() {
        if(lst.empty()){
            return "";
        }
        return *(lst.front().second.begin());
    }
};