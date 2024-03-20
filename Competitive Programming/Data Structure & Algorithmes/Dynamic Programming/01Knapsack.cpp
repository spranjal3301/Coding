#include <bits/stdc++.h>
using namespace std;

//! 0-1 Knapsack Problem

//! Memoization
class Solution
{
    int solve(int val[], int wt[], int W, int n, vector<vector<int>> &dp)
    {
        if (W == 0)
            return 0;
        if (n == 0)
            return (W >= wt[0]) ? val[0] : 0; //-if(n<0)return 0;
        if (dp[n][W] != -1)
            return dp[n][W];

        int Nopick = solve(val, wt, W, n - 1, dp);
        int pick = INT_MIN;

        if (W >= wt[n])
            pick = val[n] + solve(val, wt, W - wt[n], n - 1, dp);

        return dp[n][W] = max(pick, Nopick);
    }

public:
    int knapSack(int W, int wt[], int val[], int n)
    {
        vector<vector<int>> dp(n, vector<int>(W + 1, -1));
        return solve(val, wt, W, n - 1, dp);
    }
};

//! Tabulation
int knapSack(int W, int wt[], int val[], int n)
{
    vector<vector<int>> dp(n, vector<int>(W + 1, 0));
    for (int i = wt[0]; i <= W; i++)
        dp[0][i] = val[0];
  

    for (int i = 1; i < n; i++)
    {
        for (int j = 1; j < W + 1; j++)
        {

            int Nopick = dp[i - 1][j];
            int pick = INT_MIN;

            if (j >= wt[i])
                pick = val[i] + dp[i - 1][j - wt[i]];

            dp[i][j] = max(pick, Nopick);
        }
    }

    return dp[n - 1][W];
}

//!Space Optimization
int knapSack(int W, int wt[], int val[], int n)
{
    vector<int> prev(W+1, 0),curr(W+1,0);
    for (int i = wt[0]; i <= W; i++)
        prev[i] = val[0];
  

    for (int i = 1; i < n; i++)
    {
        for (int j = 1; j < W + 1; j++)
        {

            int Nopick = prev[j];
            int pick = INT_MIN;

            if (j >= wt[i])
                pick = val[i] + prev[j - wt[i]];

            curr[j] = max(pick, Nopick);
        }
        prev=curr;
    }

    return prev[W];
}