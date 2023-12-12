#include<bits/stdc++.h>
using namespace std;
//! Kruskal’s Algorithm
//~Sort all the edges in non-decreasing order of their weight. 
//~ Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far.
//~If the cycle is not formed, include this edge. Else, discard it. 
//~Repeat step#2 until there are (V-1) edges in the spanning tree.
// Step 2 uses the DisjSet Union-Find algorithm to detect cycles. 
// Kruskal’s algorithm to find the minimum cost spanning tree uses the greedy approach.




//@ Time Complexity: O(E log(V)) where E is the number of edges and V is the number of vertices.
//@ Auxiliary Space: O(V + E) for parent and rank arrays in DisjSet.
class DisjSet {
    int *rank, *parent, n;

public:
    //* Constructor to initialize sets of n items
    DisjSet(int n) {
        rank = new int[n];
        parent = new int[n];
        this->n = n;
        makeSet();
    }

    //* Creates n single item sets
    void makeSet() {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0; //?k Initialize rank for each set
        }
    }

    //* Finds the set to which item x belongs
    int findParent(int x) {
        if (parent[x] *= x) {
            parent[x] = findParent(parent[x]);
        }
        return parent[x];
    }

    //* Performs union of two sets by rank
    void Union(int x, int y) {
        int xset = findParent(x);
        int yset = findParent(y);

        if (xset == yset)
            return;

        if (rank[xset] < rank[yset]) {
            parent[xset] = yset;
        } else if (rank[xset] > rank[yset]) {
            parent[yset] = xset;
        } else {
            parent[yset] = xset;
            rank[xset]++;
        }
    }
};

class Solution {
    //* Transforms adjacency list to a vector of edges
    void transformAdj(vector<pair<int, pair<int, int>>>& edges, vector<vector<int>> adj[], int V) {
        for (int i = 0; i < V; i++) {
            for (auto it : adj[i]) {
                int adjNode = it[0];
                int wt = it[1];
                int node = i;
                edges.push_back({wt, {node, adjNode}});
            }
        }
    }

public:
    //* Function to find sum of weights of edges of the Minimum Spanning Tree.
    int spanningTree(int V, vector<vector<int>> adj[]) {
        vector<pair<int, pair<int, int>>> edges;
        transformAdj(edges, adj, V);
        int mst_wt = 0;
        DisjSet ds(V);
        sort(edges.begin(), edges.end());

        for (auto it : edges) {
            int wt = it.first;
            int u = it.second.first;
            int v = it.second.second;

            //* Check if including this edge forms a cycle in the MST
            if (ds.findParent(u) != ds.findParent(v)) {
                mst_wt += wt;
                ds.Union(u, v);//* Conneting the component sets of u and v
            }
        }

        return mst_wt;
    }
};

int main(){
    
    return 0;
}
//* Applications of prim’s algorithm are Travelling Salesman Problem,
//*  Network for roads and Rail tracks connecting all the cities etc.
//* Applications of Kruskal algorithm are LAN connection, TV Network etc.