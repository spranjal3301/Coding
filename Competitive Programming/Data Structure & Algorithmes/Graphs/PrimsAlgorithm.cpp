#include<bits/stdc++.h>
using namespace std;
//! Prim’s algorithm
//* Prim's Algorithm is a greedy algorithm that is used to find the minimum spanning tree from a graph. 
//* Prim's algorithm starts from one vertex and continue to add the edges with the smallest weight until the goal is reached.

//!Spanning Tree: G(V,E) ST(V,V-1)
//~ If we convert undirected graph into Tree(Acyclic graph) with n node and n-1 Edges where every node is rechable from other Node.
//* A spanning tree is a subgraph of an undirected connected graph. It includes all the vertices in the subgraph
//* and the least number of edges that can connect every vertex without forming a loop or cycle.

//! Minimum Spanning tree -
//* Minimum spanning tree can be defined as the spanning tree in which the sum of all the weights of the edge is minimum.

class PrimAlgorithm {
private:
    //* Helper function to find the vertex with the minimum distance value,
    //* among the set of vertices not yet included in the Minimum Spanning Tree (MST)
    void findMinDistance(const vector<int> &distance, const vector<bool> &inMST, int &minDistance, int &minNode) const {
        for (int i = 0; i < distance.size(); ++i) {
            if (!inMST[i] && distance[i] < minDistance) {
                minNode = i;
                minDistance = distance[i];
            }
        }
    }

public:
    //@ Time Complexity: O(V^2)
    //@  Auxiliary Space: O(V)
    //* Function to find the total weight of the Minimum Spanning Tree (MST)
    int findMSTWeight(int V, const vector<vector<pair<int, int>>> &adjacencyList) {
        vector<int> distance(V, INT_MAX); //? Used to store the minimum weight edge for each vertex
        vector<bool> inMST(V, false);      //? To represent the set of vertices included in MST
        vector<int> parent(V, -1);         //? To store the parent of each vertex in the MST

        int source = 0; //? Starting vertex for MST construction
        distance[source] = 0;
        parent[source] = -1;

        for (int i = 0; i < V; ++i) {
            int minDistance = INT_MAX;
            int minNode;

            //* Find the vertex with the minimum distance value that is not in the MST yet
            findMinDistance(distance, inMST, minDistance, minNode);

            inMST[minNode] = true; //? Include the selected vertex in the MST

            //* Update the distance values and parent pointers of the adjacent vertices
            for (const auto &edge : adjacencyList[minNode]) {
                int adjacentVertex = edge.first;
                int edgeWeight = edge.second;

                //* If the adjacent vertex is not in the MST and the weight of the edge is smaller,
                //* update the distance and parent information
                if (!inMST[adjacentVertex] && edgeWeight < distance[adjacentVertex]) {
                    parent[adjacentVertex] = minNode;
                    distance[adjacentVertex] = edgeWeight;
                }
            }
        }

        //* Calculate the total weight of the MST
        int totalWeight = 0;
        for (int i = 0; i < V; ++i) {
            totalWeight += distance[i];
        }

        return totalWeight;
    }
};





//** The algorithm starts with an empty spanning tree. The idea is to maintain two sets of vertices.
//* The first set contains the vertices already included in the MST, and the other set contains the vertices not yet included. 
//* At every step, it considers all the edges that connect the two sets and picks the minimum weight edge from these edges. 
//* After picking the edge,it moves the other endpoint of the edge to the set containing MST.   
//! Algorithm
//* Step 1: Determine an arbitrary vertex as the starting vertex of the MST.
//* Step 2: Follow steps 3 to 5 till there are vertices that are not included in the MST (known as fringe vertex).
//* Step 3: Find edges connecting any tree vertex with the fringe vertices.
//* Step 4: Find the minimum among these edges.
//* Step 5: Add the chosen edge to the MST if it does not form any cycle.
//* Step 6: Return the MST and exit


//! Prim’s algorithm Using  priority_queue
// @Time Complexity: O(ElogV)
//@Auxiliary Space: O(V2)
    // priority_queue< iPair, vector <iPair> , greater<iPair> > pq;
 
    // int src = 0; // Taking vertex 0 as source
 
    // // Create a vector for keys and initialize all
    // // keys as infinite (INF)
    // vector<int> key(V, INF);
 
    // // To store parent array which in turn store MST
    // vector<int> parent(V, -1);
 
    // // To keep track of vertices included in MST
    // vector<bool> inMST(V, false);
 
    // // Insert source itself in priority queue and initialize
    // // its key as 0.
    // pq.push(make_pair(0, src));
    // key[src] = 0;
 
    // /* Looping till priority queue becomes empty */
    // while (!pq.empty())
    // {
    //     // The first vertex in pair is the minimum key
    //     // vertex, extract it from priority queue.
    //     // vertex label is stored in second of pair (it
    //     // has to be done this way to keep the vertices
    //     // sorted key (key must be first item
    //     // in pair)
    //     int u = pq.top().second;
    //     pq.pop();
         
    //       //Different key values for same vertex may exist in the priority queue.
    //       //The one with the least key value is always processed first.
    //       //Therefore, ignore the rest.
    //       if(inMST[u] == true){
    //         continue;
    //     }
       
    //     inMST[u] = true;  // Include vertex in MST
 
    //     // 'i' is used to get all adjacent vertices of a vertex
    //     list< pair<int, int> >::iterator i;
    //     for (i = adj[u].begin(); i != adj[u].end(); ++i)
    //     {
    //         // Get vertex label and weight of current adjacent
    //         // of u.
    //         int v = (*i).first;
    //         int weight = (*i).second;
 
    //         //  If v is not in MST and weight of (u,v) is smaller
    //         // than current key of v
    //         if (inMST[v] == false && key[v] > weight)
    //         {
    //             // Updating key of v
    //             key[v] = weight;
    //             pq.push(make_pair(key[v], v));
    //             parent[v] = u;
    //         }
    //     }
    // }