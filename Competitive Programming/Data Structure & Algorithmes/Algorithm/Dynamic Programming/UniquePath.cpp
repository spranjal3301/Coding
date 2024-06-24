#include<bits/stdc++.h>
using namespace std;

//!Memoization
class Solution {
    int r,c;
public:
    bool isValid(int i,int j,vector<vector<bool>>& visited){
        return i<r && i>=0 && j>=0 && j<c && !visited[i][j];
    }
    int solve(int i,int j,vector<vector<bool>>& visited,vector<vector<int>>& dp){
        if(dp[i][j]!=-1)return dp[i][j];
        visited[i][j]=1;

        int t=0,l=0;
        if(isValid(i-1,j,visited))
            t=solve(i-1,j,visited,dp);
        
        if(isValid(i,j-1,visited))
            l=solve(i,j-1,visited,dp);
        
        dp[i][j]=t+l;
        visited[i][j]=0;
        return dp[i][j];
    }
    int uniquePaths(int m, int n) {
        r=m,c=n;
        vector<vector<bool>> visited(m,vector<bool>(n,0));//~ No need in this case (two directions for each cell)
        vector<vector<int>> dp(m,vector<int>(n,-1));
        dp[0][0]=1;
        return solve(m-1,n-1,visited,dp);
    }
};


//!Tabulation
class Solution {
public:
      int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m,vector<int>(n,0));
        dp[0][0]=1;
      
        
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(i==0 && j==0)continue;
                int t=0,l=0;
                if(i-1>=0)
                    t=dp[i-1][j];
                
                if(j-1>=0)
                    l=dp[i][j-1];
                
                dp[i][j]=t+l;
            }
        }
        return dp[m-1][n-1];
    }
};

//!Space Optimization
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<int> prev(n,0);
        vector<int> cur(n,0);
        prev[0]=1;
        cur[0]=1;

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(i==0 && j==0)continue;
                int t=0,l=0;
                if(i-1>=0)
                    t=prev[j];
                
                if(j-1>=0)
                    l=cur[j-1];
                
                cur[j]=t+l;
            }
            prev=cur;
        }
        return prev[n-1];
    }
};