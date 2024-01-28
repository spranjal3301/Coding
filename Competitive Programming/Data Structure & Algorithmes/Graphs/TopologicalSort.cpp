#include<bits/stdc++.h>
using namespace std;
//! Topological sorting
//* Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v,
//*  vertex u comes before v in the ordering.
//* Note: Topological Sorting for a graph is not possible if the graph is not a DAG
//~ Time Complexity: O(V+E).simply DFS with an extra stack.So time complexity is the same as DFS
//~ Auxiliary space: O(V). The extra space is needed for the stack
//*Intution: Path of DFS will be in topological order
class Solution
{   void dfs(int V,vector<int> adj[],unordered_map<int,bool> &visited,stack<int> &s){
    
    visited[V]=true;
    
    for(auto i:adj[V]){
        if(!visited[i])dfs(i,adj,visited,s);
    }
    
    s.push(V);
    
}
	public:
	//Function to return list containing vertices in Topological order. 
	vector<int> topoSort(int V, vector<int> adj[]) 
	{
	    vector<int> ans;
	    unordered_map<int,bool> visited;
	    stack<int> s;
	    
	    for(int i=0;i<V;i++){
	        if(!visited[i])dfs(i,adj,visited,s);
	    }
	    
	    while(!s.empty()){
	        ans.push_back(s.top());
	        s.pop();
	    }
	    return ans;
	}
};


