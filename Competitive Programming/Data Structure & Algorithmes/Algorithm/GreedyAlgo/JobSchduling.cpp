#include<bits/stdc++.h>
using namespace std;

struct Job {
    int id;     // Job Id
    int dead;   // Deadline of job
    int profit; // Profit if job is over before or on deadline
};

class Solution {
public:
    // Function to find the maximum profit and the number of jobs done.
    std::vector<int> JobScheduling(Job arr[], int n) {
        // Sort jobs by profit in descending order.
        std::sort(arr, arr + n, [](const Job& a, const Job& b) {
            return a.profit > b.profit;
        });

        // Initialize a vector to represent slots.
        std::vector<bool> slot(n + 1, false);

        int maxProfit = 0, jobCount = 0;

        // Iterate through each job and find the next available slot.
        for (int i = 0; i < n; ++i) {
            for (int j = std::min(n, arr[i].dead); j > 0; --j) {
                // If slot is available, schedule job and mark slot as occupied.
                if (!slot[j]) {
                    maxProfit += arr[i].profit;
                    ++jobCount;
                    slot[j] = true;
                    break;
                }
            }
        }

        return { jobCount, maxProfit };
    }
};
// Comments:
// Time Complexity: O(N^2) due to the nested loop, where N is the number of jobs.
// Auxiliary Space: O(N) for the slot vector.