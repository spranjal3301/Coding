#include<bits/stdc++.h>
using namespace std;

//! Bellman-Ford Algorithm
//* Bellman-Ford is a single source shortest path algorithm that determines the shortest path between a given source vertex and every other vertex in a graph it is capable of handling graphs with negative edge weights,


//~ Bellman-Ford is based on “Principle of Relaxation“.
//* It states that for the graph having V vertices, all the edges should be relaxed V-1 times to compute the single source shortest path.

//~why V-1 times?
// In the worst-case scenario, a shortest path between two vertices can have at most V-1 edges,
//  where V is the number of vertices.

//* The algorithm works for  directed graphs(but we can also use it for undirected graphs).
//~ Bellman-Ford is slower than Dijkstra’s algorithm, 

//! Drawback of Bellman Ford’s Algorithm: fail if the graph contains any "negative edge cycle" not a "negative egde weights".
//*  The shortest path cannot be found if there exists a negative cycle in the graph
//* If we continue to go around the negative cycle an infinite number of times, 
//* then the cost of the path will continue to decrease (even though the length of the path is increasing). 

//~ As a result, Bellman-Ford is also capable of detecting negative cycles,which is an important feature.
// *If the N’th relaxation further reduces the shortest distance for any node, it implies that a certain edge with negative weight has been traversed once more.




//@ Time Complexity: O(VE)
//@ Auxiliary Space: O(V)
class Solution {
    const int INF = 1e8; // Define a constant for infinity

public:
    // Bellman-Ford algorithm for single-source shortest paths
    // Returns a vector of distances from the source vertex to all other vertices
    // If a negative cycle is detected, returns {-1}
    vector<int> bellman_ford(int V, vector<vector<int>>& edges, int source) {
        const int E = edges.size(); // Number of edges

        // Initialize distance array with infinity, except for the source vertex
        vector<int> distance(V, INF);
        distance[source] = 0;

        const int V_minus_1 = V - 1; // Precompute V - 1

        // Relax edges V - 1 times
        for (int i = 0; i < V_minus_1; ++i) {

            // Iterate through all edges
            for (const auto& edge : edges) {
                int u = edge[0]; // Source vertex of the edge
                int v = edge[1]; // Destination vertex of the edge
                int wt = edge[2]; // Weight of the edge

                // Relax the edge: Update the distance if a shorter path is found
                if (distance[u] != INF && distance[u] + wt < distance[v])
                    distance[v] = distance[u] + wt;
            }
        }

        //~ Check for negative cycles
        for (const auto& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int wt = edge[2];

            //* If a shorter path is found, a negative cycle exists
            if (distance[u] != INF && distance[u] + wt < distance[v]) {
                //* Negative Cycle Found
                return {-1};
            }
        }

        // Return the vector of distances from the source vertex
        return distance;
    }
};

// Algorithm to Find Negative Cycle in a Directed Weighted Graph Using Bellman-Ford:
// Initialize distance array dist[] for each vertex ‘v‘ as dist[v] = INFINITY.
// Assume any vertex (let’s say ‘0’) as source and assign dist = 0.
// Relax all the edges(u,v,weight) N-1 times as per the below condition:
// dist[v] = minimum(dist[v], distance[u] + weight)
// Now, Relax all the edges one more time i.e. the Nth time and based on the below two cases we can detect the negative cycle:
// Case 1 (Negative cycle exists): For any edge(u, v, weight), if dist[u] + weight < dist[v]
// Case 2 (No Negative cycle) : case 1 fails for all the edges.






