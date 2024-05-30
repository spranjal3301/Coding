#include<bits/stdc++.h>
using namespace std;
//!Topological Sort using BFS
class Solution {
public:
    //~ Time Complexity: O(V + E) - V is the number of vertices, E is the number of edges.
    //~ Auxiliary Space: O(V) - space for the indegree vector and the queue.

    vector<int> topoSort(int V, vector<int> adj[]) {
        vector<int> topologicalOrder;  
        vector<int> indegree(V, 0);   // V [0,V)
        queue<int> q;

        //* Calculate indegree for each vertex.
        for (int i = 0; i < V; ++i) {
            for (auto neighbor : adj[i]) {
                indegree[neighbor]++;
            }
        }

        //* Enqueue vertices with 0 indegree.(In DAG always there will be at least one vertex with 0 indegree)
        for (int i = 0; i < V; ++i) {
            if (indegree[i] == 0)
                q.push(i);
        }

        //* Perform BFS.
        while (!q.empty()) {
            int currentVertex = q.front();
            q.pop();

            topologicalOrder.push_back(currentVertex);

            //* Update indegree and enqueue neighbors with 0 indegree.
            for (auto neighbor : adj[currentVertex]) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0)
                    q.push(neighbor);
            }
        }

        return topologicalOrder;
    }
};
// We can go through all possible ordering via backtracking , the algorithm step are as follows : 
// Initialize all vertices as unvisited.
// Now choose vertex which is unvisited and has zero indegree and decrease indegree of all those vertices by 1 (corresponding to removing edges) now add this vertex to result and call the recursive function again and backtrack.
// After returning from function reset values of visited, result and indegree for enumeration of other possibilities.