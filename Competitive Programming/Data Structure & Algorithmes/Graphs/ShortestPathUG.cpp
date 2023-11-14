#include<bits/stdc++.h>
using namespace std;
//! Shortest path in Undirected Graph having unit distance
class Solution {
public:
    vector<int> ShortestPath(vector<vector<int>>& adj, int source, int target) {

       unordered_map<int,bool> visited;
       unordered_map<int,int> parent;
       queue<int> q;

       q.push(source);
       visited[source]=true;

       while(!q.empty()){
            int front=q.front();
            q.pop();

            for(auto i:adj[front]){
                if(!visited[i]){
                    visited[i]=true;
                    parent[i]=front;
                    q.push(i);
                }
            }
       }
    //~Shortest Path
        vector<int> ans;
        int curr=target;
        ans.push_back(curr);

        while(curr!=source){
            curr=parent[curr];
            ans.push_back(curr);
        }
        reverse(ans.begin(),ans.end());

        return ans;
    }
};
