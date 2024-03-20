#include<bits/stdc++.h>
using namespace std;
//! Dijkstra’s Algorithm
//*Find the shortest distance between two vertices on a graph having non-negative edge weight in the graphs.
//* Dijkstra’s algorithm can work on both directed graphs and undirected graphs as this algorithm.
//* Dijkstra’s Algorithm: It is a graph searching algorithm that uses a Greedy Approach .

//* Dijkstra’s algorithm keeps track of the currently known shortest distance from each node to the 
//* source node and updates the value after it finds the optimal path once the 
//* algorithm  finds the shortest path between the source node and
//* destination node then the specific node is marked as visited.


//! Need for Dijkstra’s Algorithm (Purpose and Use-Cases)
//* Routing protocols for computer networks 
//* Map systems to find the shortest path between starting point and the Destination 
//* IP routing to find Open shortest Path First: Open Shortest Path First (OSPF)
//* Designate file server

//@ Time complexity : O(E log V)
//@ Space Complexity:O(V^2) , here V is number of Vertices.
class Solution
{
	public:
    vector <int> dijkstra(int Vertex, vector<vector<int>> adj[], int source)
    {
        vector<int> distance(Vertex,INT_MAX);
        //~ Distance from Source , Node
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
        //* provided priority queue doesn’t support decrease key and delete operations but Set Provide
        //* set<pair<int,int>> distNode;
        
        pq.push({0,source});
        distance[source]=0;
        
        while(!pq.empty()){
            pair<int,int> top=pq.top();
            pq.pop();
            int currDist=top.first;
            int node=top.second;
            
            for(auto neighbors:adj[node]){
                int adjNode=neighbors[0];
                int nextDist=neighbors[1];
                int totalDist=currDist+nextDist;
                
                
                if(distance[adjNode]>totalDist){

                    //* If node exist in Set with larger distance delete the node from set(priority_queue don't support delete)
                    //* Reduce Time Complexity .
                    //?  if (dist[v] != INT_MAX)
                    //?         distNode.erase(distNode.find({distance[adjNode], adjNode});

                    pq.push({totalDist,adjNode});
                    distance[adjNode]=totalDist;
                }      
                    
            }
        }

        return distance;
    }
};
// It starts at the source vertex and iteratively selects the unvisited vertex with the smallest tentative distance from the source.
//  It then visits the neighbors of this vertex and updates their tentative distances if a shorter path is found.
//! Algorithm for Dijkstra’s Algorithm:
//* Mark the source node with a current distance of 0 and the rest with infinity.
//* Set the non-visited node with the smallest current distance as the current node.
//* For each neighbor, N of the current node adds the current distance of the adjacent node with the weight of the edge connecting 0->1. If it is smaller than the current distance of Node, set it as the new current distance of N.
//* Mark the current node 1 as visited.
//* Go to step 2 if there are any nodes are unvisited.