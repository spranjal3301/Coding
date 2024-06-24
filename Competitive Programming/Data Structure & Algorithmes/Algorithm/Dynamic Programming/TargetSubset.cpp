#include<bits/stdc++.h>
using namespace std;

//!Memoization
//! IS target achievable in subset size --->fn(subset size,target) dp[Subset Size][Target]
class Solution{   
    bool solve(vector<int>arr, int target,int n,vector<vector<int>>& dp){
        //-array Contains 0 
        // if(ind == 0){
        //     if(target==0 && arr[0]==0)
        //         return 2;
        //     if(target==0 || target == arr[0])
        //         return 1;
        //     return 0;
        //  }

        if(target==0)return true;
        if(n==0)return arr[0]==target;
        if(dp[n][target]!=-1)return dp[n][target];
        
        
        bool Nopick=solve(arr,target,n-1,dp);
        bool pick=false;
        
        if(target>=arr[n])//-array of non-negative integers
            pick=solve(arr,target-arr[n],n-1,dp);
        
        dp[n][target]=(pick or Nopick);
        return dp[n][target];
    }
public:
    bool isSubsetSum(vector<int>arr, int sum){
        int n=arr.size();
        vector<vector<int>>dp(n+1,vector<int>(sum+1,-1));
        return solve(arr,sum,n-1,dp);
    }
};

//!Tabulation
bool isSubsetSum(vector<int>arr, int k){
        int n=arr.size();
        vector<vector<bool>> dp(n, vector<bool>(k + 1, false));

    // Base case: If the target sum is 0, we can always achieve it by taking no elements
    for (int i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    // Base case: If the first element of 'arr' is less than or equal to 'k', set dp[0][arr[0]] to true
    if (arr[0] <= k) {
        dp[0][arr[0]] = true;
    }

    //-Base case for array Contains 0
    //` if(num[0] == 0) dp[0][0] =2;  // 2 cases -pick and not pick
    //` else dp[0][0] = 1;  // 1 case - not pick
    
    //` if(num[0]!=0 && num[0]<=tar) dp[0][num[0]] = 1;  // 1 case -pick

    // Fill the DP array iteratively
    for (int ind = 1; ind < n; ind++) {
        for (int target = 1; target <= k; target++) {
            // If we don't take the current element, the result is the same as the previous row
            bool notTaken = dp[ind - 1][target];

            // If we take the current element, subtract its value from the target and check the previous row
            bool taken = false;
            if (arr[ind] <= target) {
                taken = dp[ind - 1][target - arr[ind]];
            }

            // Store the result in the DP array for the current subproblem
            dp[ind][target] = notTaken || taken;
        }
    }

    // The final result is stored in dp[n-1][k]
    return dp[n - 1][k];
    }