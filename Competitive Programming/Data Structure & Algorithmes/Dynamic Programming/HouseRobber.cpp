#include <bits/stdc++.h>
using namespace std;


//! Recursion
class Solution {
    int rob(vector<int>& nums,int n) {
        if(n<0)return 0;

        int pick=nums[n]+rob(nums,n-2);
        int Nopick=rob(nums,n-1);

        return max(pick,Nopick);
        
    }
public:
    int rob(vector<int>& nums) {
        int n=nums.size();
        return rob(nums,n-1);
    }
};

//! Memoization
class Solution
{
    int rob(vector<int> &nums, int n, vector<int> &dp)
    {

        if (n < 0)
            return 0;

        if (dp[n] != -1)
            return dp[n];
        int pick = nums[n] + rob(nums, n - 2, dp);
        int Nopick = rob(nums, n - 1, dp);

        dp[n] = max(pick, Nopick);

        return dp[n];
    }

public:
    int rob(vector<int> &nums)
    {
        int n = nums.size();
        vector<int> dp(n, -1);
        dp[0] = nums[0];
        // int i=0;
        return rob(nums, n - 1, dp);
    }
};



//! Tabulation
int rob(vector<int> &nums)
{
    int n = nums.size();
    if (n < 2)
        return nums[0];
    vector<int> dp(n + 1, -1);
    dp[0] = nums[0];
    dp[1] = nums[1];

    for (int i = 1; i < n; i++)
    {
        int pick = nums[i];
        if (i - 2 >= 0)
            pick += dp[i - 2];
        int Nopick = dp[i - 1];
        dp[i] = max(pick, Nopick);
    }

    return dp[n - 1];
}


//! Space Optimisation
int rob(vector<int> &nums)
{
    int n = nums.size();
    if (n < 2)
        return nums[0];

    int a = nums[0];
    int b = nums[1];

    for (int i = 1; i < n; i++)
    {
        int pick = nums[i];
        if (i - 2 >= 0)
            pick += b;
        int Nopick = a;
        b = a;
        a = max(pick, Nopick);
    }

    return a;
}
