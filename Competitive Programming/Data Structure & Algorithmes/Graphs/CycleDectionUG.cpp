#include<bits/stdc++.h>
using namespace std;
//!Detect cycle in a Undirected graph  
//* For every visited vertex ‘v’, if there is an adjacent ‘u’ such that u is already visited and u is not a parent of v,
//* then there is a cycle in the graph. If we don’t find such an adjacent for any vertex, we say that there is no cycle. 


//! using BFS
class Solution1 {
    bool BFS(int node, vector<int> adj[], vector<int> &parent, vector<bool> &visited) {
        queue<int> q;
        q.push(node);
        visited[node] = true;

        while (!q.empty()) {
            int front = q.front();
            q.pop();

            for (int i : adj[front]) {
                if (!visited[i]) {
                    visited[i] = true;
                    q.push(i);
                    parent[i] = front;
                } else if (parent[front] != i) {
                    return true; //~ Cycle found
                }
            }
        }
        return false;
    }

public:
    // Function to detect cycle in an undirected graph.
    //! Time Complexity: O(V + E) - where V is the number of vertices and E is the number of edges.
    //! Auxiliary Space: O(V) - for visited, parent, and queue.
    bool isCycle(int V, vector<int> adj[]) {
        vector<bool> visited(V, false);
        vector<int> parent(V, -1);

        for (int i = 0; i < V; i++) {//~Traverse throught every vertex if disconneted component found.
            if (!visited[i] && BFS(i, adj, parent, visited)) {
                return true; // Cycle found
            }
        }
        return false; // No cycle found
    }
};

//! using DFS
class Solution2 {
    bool isCyclicDFS(int node, int parent, vector<int> adj[], vector<bool> &visited) {
        visited[node] = true;

        for (int i : adj[node]) {
            if (!visited[i]) {
                if (isCyclicDFS(i, node, adj, visited)) {
                    return true; // Cycle found
                }
            } else if (i != parent) {
                return true; // Cycle found
            }
        }
        return false;
    }

public:
    // Function to detect cycle in an undirected graph using DFS.
    //! Time Complexity: O(V + E) - where V is the number of vertices and E is the number of edges.
    //! Auxiliary Space: O(V) - for visited array.
    bool isCycle(int V, vector<int> adj[]) {
        vector<bool> visited(V, false);

        for (int i = 0; i < V; i++) {
            if (!visited[i] && isCyclicDFS(i, -1, adj, visited)) {
                return true; // Cycle found
            }
        }
        return false; // No cycle found
    }
};

