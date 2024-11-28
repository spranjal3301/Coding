#include<bits/stdc++.h>
using namespace std;

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
void solve(vector<int> nums ,vector<vector<int>> &ans,int i){
    if (i==nums.size()){
        ans.push_back(nums);
        return;
    }

    for (int j = i; j < nums.size(); j++){
       swap(nums[i],nums[j]);
       solve(nums,ans,i+1);
       //!Backtracking : want to achive original state before next iteration
       swap(nums[i],nums[j]);
    }
    
    
}
vector<vector<int>> permute(vector<int> &nums){
    vector<vector<int>> ans;
    int i=0;
    solve(nums,ans,i);
    return ans;

}
 

class Solution2 {
    vector<vector<int>> res;
    vector<int> o;
    unordered_map<int, bool> mp;
    int n;
    void fn() {
        if (o.size() == n) {
            res.push_back(o);
            return;
        }

        for (auto [num, p] : mp) {
            if (p) {
                o.push_back(num);
                mp[num] = false;
                fn();
                mp[num] = true;
                o.pop_back();
            }
        }
        return;
    }

public:
    vector<vector<int>> permute(vector<int>& nums) {
        n = nums.size();

        for (auto num : nums) {
            mp[num] = true;
        }
        fn();

        return res;
    }
};
