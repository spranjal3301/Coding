#include<bits/stdc++.h>
using namespace std;
#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    string reorganizeString(string s) {
        int n=s.size();
        string ans="";
        unordered_map<char,int> m;
        priority_queue<pair<int,char>> pq;

        for (auto i : s)m[i]++;

        for (auto i : m)pq.push({i.second,i.first});

        while (pq.size()>1)
        {
            auto top1=pq.top();
            pq.pop();
            auto top2=pq.top();
            pq.pop();

            ans.push_back(top1.second);
            ans.push_back(top2.second);
            
            top1.first--;
            top2.first--;
            if(top1.first>0)pq.push(top1);
            if(top2.first>0)pq.push(top2);
        }

        if(!pq.empty()){

            if(pq.top().first>1)return "";
            else ans.push_back(pq.top().second);
        }

     return ans;
    }
};
int main()
{

    return 0;
}
int main(){
    string s="1100001110111100100";
    cout<<("1101"<"1011");
    return 0;
}