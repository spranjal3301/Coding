#include<bits/stdc++.h>
using namespace std;
//!Shortest Path in Undirected Graph from source to target
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

//! Shortest path in Undirected Graph having unit distance
//*shortest path source to all nodes
//*one source multiple destination

class Solution2{
public:
        vector<int> shortestPath(vector<vector<int>>& edges, int n,int m, int src){
        vector<vector<int>> graph(n) ; 
        for(int i=0 ; i<m ; i++){
            graph[edges[i][0]].push_back(edges[i][1]) ; 
            graph[edges[i][1]].push_back(edges[i][0]) ; 
        }
        vector<int> result(n,-1) , visited(n) ; 
        queue<pair<int,int>> q ; 
        q.push({src,0}) ; 
        result[src]=0 ; 
        visited[src]=1 ; 
        while(!q.empty()){
            int i = q.front().first ;
            int dist = q.front().second ;
            q.pop() ; 
            for(int j=0 ; j<graph[i].size() ; j++){
                if(!visited[graph[i][j]]){
                    visited[graph[i][j]]=1 ; 
                    q.push({graph[i][j],dist+1}) ; 
                    result[graph[i][j]] = dist+1 ; 
                }
            }
        }
        return result ; 
    }


};

