#include<bits/stdc++.h>
using namespace std;

//!Tarjan's Algorithm
//*use find Strongly Connected Components or Bridges in Graph. 

//* Disc:(discovery time) This is the time when a node is visited 1st time while DFS traversal. 
//* low[u] indicates the earliest visit possible time (the vertex with minimum discovery time)
//*if low[u] > disc[v]{
    //? then they is only one path between u and v that is a bridge
    //?No back edge 
//*}


//* Case1 (Tree Edge): If node v is not visited already, then after the DFS of v is complete, a minimum of low[u] and low[v] will be updated to low[u]. 
// low[u] = min(low[u], low[v]); 
//* Case 2 (Back Edge): When child v is already visited, then a minimum of low[u] and Disc[v] will be updated to low[u]. 
// low[u] = min(low[u], disc[v]); 


//! Bridges in Graph:
//* A bridge is an edge whose removal disconnects the graph or break into multiple components.


//!Time Complexity: O(V + E)
//!Space Complexity: O(V)
class TarjansAlgorithm {
    int step = 1;

    void dfs(vector<int> adj[], vector<bool> &visited, vector<int> &disc, vector<int> &low, vector<vector<int>>& bridges, int node, int parent) {
        visited[node] = true;
        disc[node] = low[node] = step;
        step++;

        for (auto child : adj[node]) {
            if (child == parent)
                continue; // Skip if the child is the parent

            if (!visited[child]) {
                // If the child is not visited, perform DFS on it
                dfs(adj, visited, disc, low, bridges, child, node);
                low[node] = min(low[node], low[child]);

                if (low[child] > disc[node]) {
                    // If there is no back edge from the child to an ancestor of node,
                    // then the edge (node, child) is a bridge
                    bridges.push_back({node, child});
                }
            } else {
                //~Back Edge
                // If the child is already visited, update the low value of node
                low[node] = min(low[node], disc[child]);
            }
        }
    }

public:
    vector<vector<int>> findBridges(int n, vector<int> adj[]) {
        vector<bool> visited(n, false);
        vector<int> disc(n), low(n);
        vector<vector<int>> bridges;

        dfs(adj, visited, disc, low, bridges, 0, -1); // Start DFS from node 0 with no parent
        return bridges;
    }
};

