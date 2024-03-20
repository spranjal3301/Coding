#include<bits/stdc++.h>
using namespace std;

//!  Articulation Point in Graph
//*  An articulation point is a node whose removal (or subtree) disconnects the graph.
//~if( lowTime[adjacentNode] >= discoveryTime[currentNode] && parentNode != -1 )]
//?     their is only one path between them
//?     then it is an articulation point 



class ArticulationPoint
{
    int timer = 1;
    set<int> articulationPointsSet; // Stores articulation points

void dfs(int currentNode, int parentNode, vector<int> adjacencyList[], vector<int> &visited, vector<int> &discoveryTime, vector<int> &lowTime) {
    visited[currentNode] = 1;
    discoveryTime[currentNode] = lowTime[currentNode] = timer++;

    int childCount = 0; // Count of children in DFS tree
    for(auto adjacentNode : adjacencyList[currentNode]) {
        if(adjacentNode == parentNode)
            continue; // Skip the parent

        if(!visited[adjacentNode]) {
            dfs(adjacentNode, currentNode, adjacencyList, visited, discoveryTime, lowTime);
            lowTime[currentNode] = min(lowTime[currentNode], lowTime[adjacentNode]);

            // Check for articulation points
            if(lowTime[adjacentNode] >= discoveryTime[currentNode] && parentNode != -1)
                articulationPointsSet.insert(currentNode);

            childCount++;
        } else {
            lowTime[currentNode] = min(lowTime[currentNode], discoveryTime[adjacentNode]);
        }
    }

    // Check if root node is an articulation point
    if(childCount > 1 && parentNode == -1)
        articulationPointsSet.insert(currentNode);
}
public:
vector<int> findArticulationPoints(int numberOfNodes, vector<int> adjacencyList[]) {
    vector<int> visited(numberOfNodes), discoveryTime(numberOfNodes), lowTime(numberOfNodes);
    dfs(0, -1, adjacencyList, visited, discoveryTime, lowTime);

    if(articulationPointsSet.empty())
        return {-1}; // No articulation points found

    // Convert set to vector for output
    return vector<int>(articulationPointsSet.begin(), articulationPointsSet.end());
}

};