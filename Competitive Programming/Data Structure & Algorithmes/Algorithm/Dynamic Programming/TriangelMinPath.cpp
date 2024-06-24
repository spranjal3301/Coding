#include<bits/stdc++.h>
using namespace std;

//!Variable destination

//!Memoization
class Solution {
    int solve(vector<vector<int>>& triangle,int n,int i,int j,vector<vector<int>> &dp){
        // cout<<i<<" "<<j<<endl;
        if(dp[i][j]!=-1)return dp[i][j];
        if(i==n)return triangle[n][j];
       
        dp[i][j]=triangle[i][j]+min(solve(triangle,n,i+1,j,dp),solve(triangle,n,i+1,j+1,dp));
        return dp[i][j];
    }
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n=triangle.size();
        if(n==1)return triangle[0][0];
        vector<vector<int>> dp(n,vector<int>(n,-1));
        int i=0,j=0;
        return solve(triangle,n-1,i,j,dp);
    }
};


//!Tabulation
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n=triangle.size();
        if(n==1)return triangle[0][0];
        vector<vector<int>> dp(n,vector<int>(n,-1));

        for(int i=0;i<n;i++){
            dp[n-1][i]=triangle[n-1][i];
        }

        for(int i=n-2;i>=0;i--){
            for(int j=i;j>=0;j--){
                dp[i][j]=triangle[i][j]+min(dp[i+1][j],dp[i+1][j+1]);
            }
        }

        return dp[0][0];
    }
};

//!Space Optimization

class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n=triangle.size();
        if(n==1)return triangle[0][0];
        vector<int> dp(n,0);

        for(int i=0;i<n;i++){
            dp[i]=triangle[n-1][i];
        }

        for(int i=n-2;i>=0;i--){
            vector<int> temp(n,0);
            for(int j=i;j>=0;j--){
                temp[j]=triangle[i][j]+min(dp[j],dp[j+1]);
            }
            dp=temp;
        }

        return dp[0];
    }
};


//!Variable Starting Point and Ending Point https://leetcode.com/problems/minimum-falling-path-sum/submissions/1203350590/

//!Memoization
class Solution {
    int minFallingPathSum(vector<vector<int>>& matrix,int i,int j,int n,vector<vector<int>>& dp) {
        if(j<0 || j>=n)
            return 1e9;
        if(i==0)
            return matrix[i][j];

        if(dp[i][j]!=-1)return dp[i][j];    
        
        int m1=minFallingPathSum(matrix,i-1,j,n,dp);
        int m2=minFallingPathSum(matrix,i-1,j-1,n,dp);
        int m3=minFallingPathSum(matrix,i-1,j+1,n,dp);

        dp[i][j]=matrix[i][j]+min(m1,min(m2,m3));
        return dp[i][j];      
    }
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int n=matrix.size();
        int ans=INT_MAX;
        vector<vector<int>> dp(n,vector<int>(n,-1));
        for(int i=0;i<n;i++){
            ans=min(minFallingPathSum(matrix,n-1,i,n,dp),ans);
        }

        return ans;
    }
}; 

//!Tabulation
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int n=matrix.size();
        int ans=INT_MAX;
        vector<vector<int>> dp(n,vector<int>(n,-1));

        for(int i=0;i<n;i++){
            dp[0][i]=matrix[0][i];
        }

        for(int i=1;i<n;i++){
            for(int j=0;j<n;j++){

                int m1=1e9,m2=1e9,m3=1e9;
                if(j-1>=0)m1=dp[i-1][j-1];
                if(j+1<n)m2=dp[i-1][j+1];
                m3=dp[i-1][j];

                dp[i][j]=matrix[i][j]+min(m1,min(m2,m3));
            }
        }

        for(int j=0;j<n;j++){
            ans=min(dp[n-1][j],ans);
        }

        return ans;
    }
}; 

//!Space Optimization
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int n=matrix.size();
        int ans=INT_MAX;
        vector<int> curr(n,0);
        vector<int> prev(n,0);

        for(int i=0;i<n;i++){
            prev[i]=matrix[0][i];
        }

        for(int i=1;i<n;i++){
            for(int j=0;j<n;j++){

                int m1=1e9,m2=1e9,m3=1e9;
                if(j-1>=0)m1=prev[j-1];
                if(j+1<n)m2=prev[j+1];
                m3=prev[j];

                curr[j]=matrix[i][j]+min(m1,min(m2,m3));
            }
            prev=curr;
        }

        for(int j=0;j<n;j++){
            ans=min(prev[j],ans);
        }

        return ans;
    }
}; 
