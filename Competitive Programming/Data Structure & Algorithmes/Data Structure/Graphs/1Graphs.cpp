#include <bits/stdc++.h>
using namespace std;
//! Graph G(V, E)
//* A Graph is a non-linear data structure consisting of vertices and edges.
//*Graph is composed of a set of vertices( V ) and a set of edges( E ).

//~ Vertices:also known as vertex or nodes
//~ Edges:drawn or used to connect two nodes of the graph.

//! Types Of Graph
//* 1. Null Graph: no edges(E==0) in the graph.
//* 2. Trivial Graph: only a single vertex(V==1).
//* 3. Undirected Graph: do not have any direction(0----1)
//* 4. Directed Graph :edge has direction.(0---->1)
//* 5. Connected Graph: graph in which from one node we can visit any other node in the graph
//* 6. Disconnected Graph: least one node is not reachable from a node
//* 7. Regular Graph: The graph in which the degree of every vertex is equal to K is called K regular graph.
//* 8. Complete Graph : every node is connected to every other node
//* 9. Cycle Graph : graph is a cycle in itself, the degree of each vertex is 2.
//* 10.Cyclic Graph :graph containing at least one cycle
//* 11. Directed Acyclic Graph :Directed Graph that does not contain any cycle.
//* 12. Bipartite Graph :graph in which vertex can be divided into two sets such that vertex in each set does not contain any edge between them.
//* 13. Weighted Graph: graph in which the edges are already specified with suitable weight

//? Linked List, Trees, and Heaps all are special cases of graphs.
//! Representation of Graphs
//* Adjacency Matrix: stored in the form of the 2D matrix (Row-->Column)
//? vector<vector<int>> ;
//* Adjacency List :graph is represented as a collection of linked lists or array.
// *There is an array of pointer which points to the edges connected to that vertex.
//? unordered_map<int,vector<int>>; or unordered_map<int,list<int>>;
//! unordered_map<Vertex,list of Connected Vertex>
//* graph contains a large number of edges then it is good to store it as a matrix

//! Action	        Adjacency Matrix	Adjacency List
//* Adding Edge	        O(1)	            O(1)
//* Removing an edge	O(1)	            O(N)
//* Initializing	    O(N*N)	            O(N)   

class Graph1
{
private:
    unordered_map<int, list<int>> AdjacencyList;

public:
    Graph1() {}
    void addEdge(int u, int v = -1, bool direction = false)
    {
        // direction=false u<-->v both dir
        // direction=true u-->v
        AdjacencyList[u].push_back(v);
        if (!direction)
            AdjacencyList[v].push_back(u);
    }
    void print()
    {
        for (auto &i : AdjacencyList)
        {
            cout << i.first << "-->";
            for (auto &j : i.second)
            {
                cout << j << ",";
            }
            cout << endl;
        }
    }
    void RemovingEdge(int u, int v = -1, bool direction = false)
    {
        AdjacencyList[u].remove(v);
        if (!direction)
            AdjacencyList[v].remove(u);
    }
};
class Graph2
{
private:
    vector<vector<int>> AdjacencyMatrix;

public:
    Graph2() {}
    void addEdge(int u, int v = 0, bool direction = false)
    {
        // direction=false u<-->v both dir
        // direction=true u-->v
        AdjacencyMatrix[u][v] = 1;
        if (!direction)
            AdjacencyMatrix[v][u] = 1;
    }
    void RemovingEdge(int u, int v = 0, bool direction = false)
    {
        AdjacencyMatrix[u][v]=0;
        if (!direction)
            AdjacencyMatrix[v][u]=0;
    }
    void Print(){
        for (auto &i : AdjacencyMatrix)
        {
            for (auto &j : i)
            {
                cout<<j<<" ";
            }
            cout<<endl;
        }
        
    }
};
