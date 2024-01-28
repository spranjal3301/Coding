#include <bits/stdc++.h>
using namespace std;
class Graph
{
private:
    unordered_map<int, list<int>> AdjacencyList;

public:
    Graph() {}
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
    // void BFS(int start,unordered_map<int, bool> &visited);
    void BFS_DisconnectedComponents(){
    unordered_map<int, bool> visited;
       for (auto &vertex : AdjacencyList)
        {
            int i=vertex.first;
           if(!visited[i])BFS(i,AdjacencyList,visited);     
        }     
            
    }
};
//~ Time Complexity: O(V+E), where V is the number of nodes and E is the number of edges.
//~ Auxiliary Space: O(V)
void BFS(int start,unordered_map<int, list<int>> &AdjacencyList,unordered_map<int, bool> &visited)
{
    queue<int> q;

    q.push(start);
    visited[start] = true;

    while (!q.empty())
    {
        int front = q.front();
        q.pop();
        cout << front << " ";

        for (auto &adj : AdjacencyList[front])
        {
            if (!visited[adj])
            {
                visited[adj] = true;
                q.push(adj);
            }
        }
    }
    cout << endl;
}
int main()
{
    Graph g;
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    g.print();
    g.BFS_DisconnectedComponents();
    return 0;
}