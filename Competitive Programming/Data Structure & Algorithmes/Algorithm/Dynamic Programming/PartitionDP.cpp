#include <bits/stdc++.h>
using namespace std;

//! Partition DP

//!Matrix Chain Multiplication
//-Given a sequence of matrices, find the most efficient way to multiply these matrices together.
//` no of oprations/multiplications taken to multiply the matrices M1(n*m) * M2(m*c)= n*m*c
class Solution
{
    int solve(int arr[], int i, int j, vector<vector<int>> &dp)
    {
        if (i == j)
            return 0; //~ 1 Matrix Zero operation
        if (dp[i][j] != -1)
            return dp[i][j];

        int mini = INT_MAX;
        //~Partition Loop [i,j-1]
        for (int k = i; k < j; k++)
        {
            int steps = arr[i - 1] * arr[k] * arr[j] + solve(arr, i, k, dp) + solve(arr, k + 1, j, dp); //? (M1*M2)+M1(i,k)+M2(k+1,j)

            mini = min(mini, steps);
        }

        return dp[i][j] = mini;
    }

public:
    //? Mi(mat[i-1]*mat[i])
    //! Tabulation DP
    int matrixMultiplication(int n, int arr[])
    {
        vector<vector<int>> dp(n, vector<int>(n, 0));

        for (int i = n - 1; i > 0; i--)
        {
            for (int j = i + 1; j < n; j++)
            {

                int mini = INT_MAX;
                for (int k = i; k < j; k++)
                {
                    int steps = arr[i - 1] * arr[k] * arr[j] + dp[i][k] + dp[k + 1][j];
                    mini = min(mini, steps);
                }

                dp[i][j] = mini;
            }
        }

        return dp[1][n - 1];
    }
};

//!312. Burst Balloons
class Solution {
    //!Start with one Balloons and start Add Balloons
    int solve(vector<int>& nums,int i,int j){
        if(i>j)return 0;

        int maxi=0;
        for(int k=i;k<=j;k++){
            int cost=nums[i-1]*nums[k]*nums[j+1]
                    +solve(nums,i,k-1)+solve(nums,k+1,j);
            
            maxi=max(maxi,cost);
        }
        return maxi;
    }
public:
    int maxCoins(vector<int>& nums) {
        nums.push_back(1);
        nums.insert(nums.begin(),1);
        int n=nums.size();
        
        vector<vector<int>> dp(n,vector<int>(n,0));

        for(int i=n-2;i>=1;i--){
            for(int j=i;j<=n-2;j++){
                int maxi=0;
                for(int k=i;k<=j;k++){
                    int cost=nums[i-1]*nums[k]*nums[j+1]
                            +dp[i][k-1]+dp[k+1][j];
                    
                    maxi=max(maxi,cost);
                }
                dp[i][j]=maxi;
            }
        }

        return dp[1][n-2];
    }
};




