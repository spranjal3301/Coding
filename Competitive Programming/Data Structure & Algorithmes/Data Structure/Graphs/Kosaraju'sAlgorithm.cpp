#include<bits/stdc++.h>
using namespace std;
//!Strongly Connected Components
//*for every pair of vertices A and B, there exists a path from A to B and a path from B to A.
//*path from every vertex to every other vertex in that component.
//* It can only be used in a directed graph.

//! Kosaraju's Algorithm
//*use DFS to find strongly connected components
//* idea is, if every node can be reached from a vertex v, and every node can reach v


//* 1. Sort all vertices according to finishing times(DFS stack pop first).
//* 2. Reverse the graph edges.
//* 3. Do a DFS traversal of the reversed graph.
//* 4. Count the number of dfs calls is equal to number of SCCs for visited all nodes.

//!Time Complexity: O(V + E)
//!Space Complexity: O(V + E)
class Solution {
    // Depth First Search function to traverse the graph and fill the stack.
    void dfs(vector<vector<int>>& adjacencyList, vector<bool>& visited, vector<int>& stack, int node) {
        visited[node] = true; // Marking the node as visited.

        // Iterating through all adjacent nodes.
        for (int adjacent : adjacencyList[node]) {
            if (!visited[adjacent]) {
                dfs(adjacencyList, visited, stack, adjacent); // Recursive DFS call for unvisited adjacent nodes.
            }
        }

        stack.push_back(node); // Pushing the current node onto the stack.
    }

public:
    // Function to find the number of strongly connected components in the graph.
    int kosaraju(int numVertices, vector<vector<int>>& adjacencyList) {
        vector<vector<int>> stronglyConnectedComponents; // Vector to store strongly connected components.
        int sccCount = 0; // Counter to keep track of the number of strongly connected components.
        vector<bool> visited(numVertices, false); // Vector to keep track of visited nodes.
        vector<int> dfsStack; // Stack for DFS traversal.

        // First DFS traversal to fill the stack.
        for (int i = 0; i < numVertices; ++i) {
            if (!visited[i]) {
                dfs(adjacencyList, visited, dfsStack, i);
            }
        }

        // Resetting visited array for the second DFS traversal.
        fill(visited.begin(), visited.end(), false);

        int n = adjacencyList.size();
        vector<vector<int>> reversedAdjacencyList(n); // Reversed adjacency list for the second DFS traversal.

        // Reversing the adjacency list.
        for (int i = 0; i < n; ++i) {
            for (int adjacent : adjacencyList[i]) {
                reversedAdjacencyList[adjacent].push_back(i);
            }
        }

        // Second DFS traversal to find strongly connected components.
        for (int i = numVertices - 1; i >= 0; --i) {
            int node = dfsStack[i];
            if (!visited[node]) {
                vector<int> sccComponent; // Vector to store nodes of a strongly connected component.
                sccCount++;
                dfs(reversedAdjacencyList, visited, sccComponent, node); // DFS call to find nodes of the component.
                stronglyConnectedComponents.push_back(sccComponent); // Adding the strongly connected component to the result.
            }
        }

        return sccCount; // Returning the total number of strongly connected components.
    }
};



// Following is Kosaraju’s DFS based simple algorithm that does two DFS traversals of graph: 

// Initialize all vertices as not visited.
// Do a DFS traversal of graph starting from any arbitrary vertex v until all vertices are visited.
// Reverse the graph edges. 
// Mark all vertices as not-visited in reversed graph.
// Do a DFS traversal of reversed graph starting from same vertex v (Same as step 2). If DFS traversal doesn’t visit all vertices, then there are more than 1 strongly connected components.