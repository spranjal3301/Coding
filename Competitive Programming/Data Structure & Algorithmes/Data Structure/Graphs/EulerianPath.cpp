#include <vector>
#include <unordered_map>
#include <stack>

class Solution {
public:
    //! Time Complexity: O(N)
    //! Auxiliary Space: O(N)
    std::vector<std::vector<int>> validArrangement(std::vector<std::vector<int>>& pairs) {
        // Graph adjacency list
        std::unordered_map<int, std::vector<int>> graph;
        // Degree tracking: {node -> {in-degree, out-degree}}
        std::unordered_map<int, int> outDegree, inDegree;
        
        // Build the graph and track degrees
        for (const auto& pair : pairs) {
            int start = pair[0], end = pair[1];
            graph[start].push_back(end);
            outDegree[start]++;
            inDegree[end]++;
        }

        // Identify the starting node
        int startNode = pairs[0][0];
        for (const auto& [node, outDeg] : outDegree) {
            if (outDeg > inDegree[node]) {
                startNode = node;
                break;
            }
        }

        // Hierholzer's algorithm for Eulerian Path
        std::vector<std::vector<int>> result;
        std::stack<int> stack;
        stack.push(startNode);

        std::vector<int> path;
        while (!stack.empty()) {
            int node = stack.top();
            if (!graph[node].empty()) {
                int nextNode = graph[node].back();
                graph[node].pop_back();
                stack.push(nextNode);
            } else {
                path.push_back(node);
                stack.pop();
            }
        }

        // Build the result path
        for (int i = path.size() - 1; i > 0; --i) {
            result.push_back({path[i], path[i - 1]});
        }

        return result;
    }
};
