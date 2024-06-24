#include<bits/stdc++.h>
using namespace std;

//! 132. Palindrome Partitioning II
class Solution {
    int dp[2001];
    bool isPalindrom(string &s,int i,int j){
        while(j>i){
            if(s[i]!=s[j])return false;
            i++,j--;
        }
        return true;
    }
    int solve(string &s,int i,int &n){
        if(i==n)return 0;
        if(dp[i]!=-1)return dp[i];

        int mini=n;
        for(int k=i;k<n;k++){
            if(isPalindrom(s,i,k)){
                int step=1+solve(s,k+1,n);
                mini=min(mini,step);
            }
           
        }
        return dp[i]=mini;
    }
public:
    int minCut(string s) {
        memset(dp,0,sizeof dp);
        int n=s.size();
        
        for(int i=n-1;i>=0;i--){
            int mini=n;
            for(int k=i;k<n;k++){
                if(isPalindrom(s,i,k)){
                    int step=1+dp[k+1];
                    mini=min(mini,step);
                }
            
            }
            dp[i]=mini;
        }

        return dp[0]-1;
    }   
};


//! 1043. Partition Array for Maximum Sum
class Solution {
    int solve(vector<int>& arr, int n, int k, vector<int>& dp, int i) {
        if (i == n)
            return 0;
        if (dp[i] != -1)
            return dp[i];

        int maxi = INT_MIN;
        int maxElement = 0;
        for (int j = i; j < i + k && j < n; j++) {
            maxElement = max(maxElement, arr[j]);
            int cost = maxElement * (j - i + 1) + solve(arr, n, k, dp, j + 1);

            maxi = max(maxi, cost);
        }
        return dp[i] = maxi;
    }

public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        int n = arr.size();
        vector<int> dp(n + 1, 0);

        for (int i = n - 1; i >= 0; i--) {
            int maxi = INT_MIN;
            int maxElement = 0;
            for (int j = i; j < i + k && j < n; j++) {
                maxElement = max(maxElement, arr[j]);
                int cost = maxElement * (j - i + 1) + dp[j + 1];

                maxi = max(maxi, cost);
            }
            dp[i] = maxi;
        }
        return dp[0];
    }
};