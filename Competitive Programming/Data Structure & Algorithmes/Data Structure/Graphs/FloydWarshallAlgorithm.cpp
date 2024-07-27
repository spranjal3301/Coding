#include<bits/stdc++.h>
using namespace std;
//!Floyd Warshall Algorithm
//*Multi source shortest path alogorithm that dectect negative cycle as well.
//* only for directed graph but we can convert UG-->DG.
//* It follows Dynamic Programming approach to check every possible path going via
// *every possible node in order to calculate shortest distance between every pair of nodes.
//*The idea behind floyd warshall algorithm is to treat each and every vertex from 1 to N as an intermediate node one by one.


//*shortestPathMatrix[][] where shortestPathMatrix[i][j] represents the shortest path between vertices i and j.

//! Time Complexity: O(V^3)
//! Auxiliary Space: O(V^2)
void FloydWarshall(vector<vector<int>>& adjacencyMatrix) {
    int numVertices = adjacencyMatrix.size();
    
    // Iterate through intermediate vertices
    for(int intermediate = 0; intermediate < numVertices; intermediate++) {
        
        // Iterate through all pairs of vertices (i, j)
        for(int source = 0; source < numVertices; source++) {
            for(int destination = 0; destination < numVertices; destination++) {
                
                // If there's a path from source to intermediate and from intermediate to destination
                if(adjacencyMatrix[source][intermediate] != -1 && adjacencyMatrix[intermediate][destination] != -1) {
                    
                    // If there's no direct path from source to destination, or if the indirect path is shorter
                    if(adjacencyMatrix[source][destination] == -1)
                        adjacencyMatrix[source][destination] = adjacencyMatrix[source][intermediate] + adjacencyMatrix[intermediate][destination];
                    else
                        adjacencyMatrix[source][destination] = min(adjacencyMatrix[source][destination],
                                        adjacencyMatrix[source][intermediate] + adjacencyMatrix[intermediate][destination]);
                }
            }
        }
    }

    //~negative cycle detection
    for(int source = 0; source < numVertices; source++) {
        if(adjacencyMatrix[source][source] < 0) {
            cout << "Negative cycle detected!" << endl;
            return;
        }
    }
}


//~ Pseudo-Code of Floyd Warshall Algorithm :
// For k = 0 to n – 1
// For i = 0 to n – 1
// For j = 0 to n – 1
// Distance[i, j] = min(Distance[i, j], Distance[i, k] + Distance[k, j])

// where i = source Node, j = Destination Node, k = Intermediate Node
