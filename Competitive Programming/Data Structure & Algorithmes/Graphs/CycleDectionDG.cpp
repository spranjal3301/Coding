#include<bits/stdc++.h>
using namespace std;

//!Detect cycle in a directed graph DFS
class Solution {
    bool DFS(int V,vector<int> adj[],unordered_map<int ,bool> &visited,unordered_map<int, bool> &dfsStack){
        
        visited[V]=true;
        dfsStack[V]=true;
        
        for(auto i:adj[V]){
            if(!visited[i] && DFS(i,adj,visited,dfsStack))return true;
            if(visited[i] && dfsStack[i])return true;
        }
        dfsStack[V]=false;
        return false;
    }
    
  public:
    
    bool isCyclic(int V, vector<int> adj[]) {
        unordered_map<int, bool> visited;
        unordered_map<int ,bool> dfsStack;
        
        for(int i=0;i<V;i++){
            if(!visited[i] && DFS(i,adj,visited,dfsStack)) return true;
        }
        return false;
    }
};
//!Detect cycle in a directed graph BFS
//~Topological Sort is Exist for DAG.
//~if(Topological Sort not exist)
//~     its mean that Graph have Cycle

class Solution {
public:
    //~ Time Complexity: O(V + E) - V is the number of vertices, E is the number of edges.
    //~ Auxiliary Space: O(V) - space for the indegree vector and the queue.

// Function to detect cycle in a directed graph.
    bool isCyclic(int V, vector<int> adj[]) {
        int count=0;
        vector<int> indegree(V, 0);   // V [0,V)
        queue<int> q;

        //* Calculate indegree for each vertex.
        for (int i = 0; i < V; ++i) {
            for (auto neighbor : adj[i]) {
                indegree[neighbor]++;
            }
        }

        //* Enqueue vertices with 0 indegree.
        for (int i = 0; i < V; ++i) {
            if (indegree[i] == 0)
                q.push(i);
        }

        //* Perform BFS.
        while (!q.empty()) {
            int currentVertex = q.front();
            q.pop();

            count++;

            //* Update indegree and enqueue neighbors with 0 indegree.
            for (auto neighbor : adj[currentVertex]) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0)
                    q.push(neighbor);
            }
        }

        return !(count==V);//~In valid Topological Sort count==no. of vertex
    }
};