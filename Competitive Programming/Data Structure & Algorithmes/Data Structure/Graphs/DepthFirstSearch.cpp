#include <bits/stdc++.h>
using namespace std;
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
    void DFS()
    {
        unordered_map<int, bool> visited;
        //!For Disconnected Node
        for (auto &vertex : AdjacencyList)
        {
            int i = vertex.first;
            if (!visited[i])
                DFS(i, visited);
        }
    }
    void DFS(int root,unordered_map<int, bool> &visited){
        visited[root]=true;
        cout<<root<<" ";
        for (auto &i : AdjacencyList[root])
        {
            if(!visited[i]){
                DFS(i,visited);
            }
        }
        
    }
};
int main()
{
    Graph1 g;
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(5, 6);

    g.DFS();


    return 0;
}