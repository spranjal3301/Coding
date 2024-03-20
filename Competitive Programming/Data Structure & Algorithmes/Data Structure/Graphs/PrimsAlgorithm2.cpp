#include<bits/stdc++.h>
using namespace std;

//! Prim’s algorithm Using  priority_queue
// !Time Complexity: O(ElogV)
//!uxiliary Space: O(V^2)
int findMSTWeight(int V, const vector<vector<pair<int, int>>> &adjacencyList) {
        vector<int> distance(V, INT_MAX); // Used to store the minimum weight edge for each vertex
        vector<bool> inMST(V, false);      // To represent the set of vertices included in MST
        vector<int> parent(V, -1);         // To store the parent of each vertex in the MST

        // Priority queue to store vertices based on their distance values
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        int source = 0; // Starting vertex for MST construction
        distance[source] = 0;
        pq.push({0, source});

        while (!pq.empty()) {
            int u = pq.top().second;
            pq.pop();

            if (inMST[u]) continue;
            inMST[u] = true;

            for (const auto &edge : adjacencyList[u]) {
                int v = edge.first;
                int weight = edge.second;

                if (!inMST[v] && weight < distance[v]) {
                    parent[v] = u;
                    distance[v] = weight;
                    pq.push({distance[v], v});
                }
            }
        }

        // Calculate the total weight of the MST
        int totalWeight = 0;
        for (int i = 0; i < V; ++i) {
            totalWeight += distance[i];
        }

        return totalWeight;
    }   