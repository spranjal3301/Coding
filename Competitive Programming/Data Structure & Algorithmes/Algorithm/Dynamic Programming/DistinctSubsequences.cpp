#include<bits/stdc++.h>
using namespace std;
// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// The test cases are generated so that the answer fits on a 32-bit signed integer.
// Example 1:
// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit
class Solution {
    int DS(string s,string t,int n,int m,vector<vector<int>>& dp){
        if(m<0)return 1;
        if(n<0)return 0;    
        if(dp[n][m]!=-1)return dp[n][m];

        int match=0,Nomatch=0;
        if(s[n]==t[m]){
            match=DS(s,t,n-1,m-1,dp);
        }
        Nomatch=DS(s,t,n-1,m,dp);

        return dp[n][m]=match+Nomatch;
    }
public:
    int numDistinct(string s, string t) {
        int n=s.size();
        int m=t.size();
        vector<vector<double>> dp(n+1,vector<double>(m+1,0));

        for(int i=0;i<n+1;i++)
            dp[i][0]=1;

        for(int i=1;i<n+1;i++){
            for(int j=1;j<m+1;j++){
                double match=0,Nomatch=0;
                if(s[i-1]==t[j-1]){
                    match=dp[i-1][j-1];
                }
                Nomatch=dp[i-1][j];

                dp[i][j]=match+Nomatch;
            }
        }



        return dp[n][m];
    }
};