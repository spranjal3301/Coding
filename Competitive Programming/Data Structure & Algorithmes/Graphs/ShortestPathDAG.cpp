#include <bits/stdc++.h>
using namespace std;
//@ Time Complexity: O(V+E)
//@ Auxiliary Space : O(V+E)
//! edges u->v with weight x
//!             u------------>v  weight
//! unordered_map<int, list<pair<int, int>>> adj;
class Solution
{
    vector<int> topoSort(int V, int E, unordered_map<int, list<pair<int, int>>> &adj)
    {
        vector<int> topologicalOrder;
        vector<int> indegree(V, 0); // V [0,V)
        queue<int> q;

        //* Calculate indegree for each vertex.
        for (int i = 0; i < V; ++i)
        {
            for (auto neighbor : adj[i])
            {
                indegree[neighbor.first]++;
            }
        }

        //* Enqueue vertices with 0 indegree.
        for (int i = 0; i < V; ++i)
        {
            if (indegree[i] == 0)
                q.push(i);
        }

        //* Perform BFS.
        while (!q.empty())
        {
            int currentVertex = q.front();
            q.pop();

            topologicalOrder.push_back(currentVertex);

            //* Update indegree and enqueue neighbors with 0 indegree.
            for (auto neighbor : adj[currentVertex])
            {
                indegree[neighbor.first]--;
                if (indegree[neighbor.first] == 0)
                    q.push(neighbor.first);
            }
        }

        return topologicalOrder;
    }

public:
    vector<int> shortestPath(int v, int e, vector<vector<int>> &edges)
    {
        unordered_map<int, list<pair<int, int>>> adj;

        for (int i = 0; i < e; i++)
        {
            int u = edges[i][0];
            int v = edges[i][1];
            int w = edges[i][2];
            adj[u].push_back({v, w});
        }
        vector<int> tSort = topoSort(v, e, adj);
        vector<int> distance(v, -1);
        int source = 0;
        distance[source] = 0;

        for (int i = 0; i < v; i++)
        {
            int currentVertex = tSort[i];
            if (distance[currentVertex] != -1)
            {
                int currDist = distance[currentVertex];
                for (auto neighbor : adj[currentVertex])
                {
                    int nextVertex = neighbor.first;
                    int nextDist = neighbor.second;
                    int tDis = currDist + nextDist;
                    if (distance[nextVertex] == -1)
                        distance[nextVertex] = tDis;
                    else if (distance[nextVertex] > tDis)
                        distance[nextVertex] = tDis;
                }
            }
        }
        return distance;
    }
};
// Following is complete algorithm for finding shortest distances. 

// Initialize dist[] = {INF, INF, ….} and dist[s] = 0 where s is the source vertex. 
// Create a topological order of all vertices. 
// Do following for every vertex u in topological order. 
// ………..Do following for every adjacent vertex v of u 
// ………………if (dist[v] > dist[u] + weight(u, v)) 
// ………………………dist[v] = dist[u] + weight(u, v) 