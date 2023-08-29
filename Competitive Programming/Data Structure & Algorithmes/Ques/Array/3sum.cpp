#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> triplets;
    sort(nums.begin(), nums.end());

    for (size_t i = 0; i < nums.size(); i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue; // Skip duplicates

        size_t j = i + 1;
        size_t k = nums.size() - 1;

        while (j < k) {
            int sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                triplets.emplace_back(vector<int>{nums[i], nums[j], nums[k]});
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1])
                    j++; // Skip duplicates
                while (j < k && nums[k] == nums[k + 1])
                    k--; // Skip duplicates
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return triplets;
}

int main()
{

    return 0;
}