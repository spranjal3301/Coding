#include <bits/stdc++.h>
using namespace std;
// https://www.geeksforgeeks.org/problems/geeks-training/1

//! Recursion
class Solution
{
    int solve(vector<vector<int>> &points, int n, int lastTask)
    {
        if (n == 0)
        {
            int maxi = points[n][0];
            for (int i = 0; i < 3; i++)
                if (i != lastTask)
                    maxi = max(maxi, points[n][i]);

            return maxi;
        }
        int maxi = 0;
        for (int i = 0; i < 3; i++)
            if (i != lastTask)
                maxi = max(maxi, points[n][i] + solve(points, n - 1, i));

        return maxi;
    }

public:
    int maximumPoints(vector<vector<int>> &points, int n)
    {
        int lastTask = 3;
        return solve(points, n - 1, lastTask);
    }
};

//! Memoization
class Solution
{
    int solve(vector<vector<int>> &points, int day, int lastTask, vector<vector<int>> &dp)
    {
        if (dp[day][lastTask] != -1)
            return dp[day][lastTask];

        if (day == 0)
        {
            int maxi = 0;
            for (int i = 0; i < 3; i++)
            {
                if (i != lastTask)
                    maxi = max(maxi, points[day][i]);
            }
            dp[day][lastTask] = maxi;
            return dp[day][lastTask];
        }

        int maxi = 0;
        for (int i = 0; i < 3; i++)
        {
            if (i != lastTask)
                maxi = max(maxi, points[day][i] + solve(points, day - 1, i, dp));
        }

        dp[day][lastTask] = maxi;
        return dp[day][lastTask];
    }

public:
    int maximumPoints(vector<vector<int>> &points, int day)
    {
        int lastTask = 3;
        vector<vector<int>> dp(day, vector<int>(4, -1));
        int ans = solve(points, day - 1, lastTask, dp);
        return dp[day - 1][4 - 1];
    }
};

//! Tabulation
class Solution
{
public:
    int maximumPoints(vector<vector<int>> &points, int day)
    {
        int lastTask = 3;
        vector<vector<int>> dp(day, vector<int>(4, -1));

        for (int lastTask = 0; lastTask < 4; lastTask++)
        {
            int maxi = 0;
            for (int i = 0; i < 3; i++)
            {
                if (i != lastTask)
                    maxi = max(maxi, points[0][i]);
            }
            dp[0][lastTask] = maxi;
        }

        for (int k = 1; k < day; k++)
        {
            for (int lastTask = 0; lastTask < 4; lastTask++)
            {
                dp[k][lastTask] = 0;
                for (int i = 0; i < 3; i++)
                {
                    if (i != lastTask)
                        dp[k][lastTask] = max(dp[k][lastTask], points[k][i] + dp[k - 1][i]);
                }
            }
        }

        return dp[day - 1][4 - 1];
    }
};


//!Space Optimization
class Solution
{
public:
    int maximumPoints(vector<vector<int>> &points, int day)
    {
        vector<int> prev(4, 0);
        vector<vector<int>> dp(day, vector<int>(4, -1));

        for (int lastTask = 0; lastTask < 4; lastTask++)
        {
            for (int i = 0; i < 3; i++)
            {
                if (i != lastTask)
                    prev[lastTask] = max(prev[lastTask] , points[0][i]);
            }
        }

        for (int k = 1; k < day; k++)
        {
            vector<int> temp(4, 0);
            for (int lastTask = 0; lastTask < 4; lastTask++)
            {
                for (int i = 0; i < 3; i++)
                {
                    if (i != lastTask)
                        temp[lastTask] = max(temp[lastTask], points[k][i] + prev[i]);
                }
            }
            prev = temp;
        }

        return prev[4 - 1];
    }
};