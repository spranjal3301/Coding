#include<bits/stdc++.h>
using namespace std;

// https://leetcode.com/problems/edit-distance/description/
//!Edit Distance
class Solution {
    int Ed(string s,string t,int n,int m,vector<vector<int>>& dp){
        if(m<0 && n<0)return 0;
        if(m<0)return n+1;//?Delete remaining part of s 
        if(n<0)return m+1;//?Insert remaining part  of t

        if(dp[n][m]!=-1)return dp[n][m];

        int match=INT_MAX,Nomatch=INT_MAX;
        if(s[n]==t[m]){
            match=Ed(s,t,n-1,m-1,dp);
        }
        else{ //Nomatch
            int replace=1+Ed(s,t,n-1,m-1,dp);
            int Delete=1+Ed(s,t,n-1,m,dp);
            int insert=1+Ed(s,t,n,m-1,dp);
            Nomatch=min(replace,min(Delete,insert));
        }
        return dp[n][m]=min(match,Nomatch);
    }
public:
    int minDistance(string word1, string word2) {
        int n=word1.size();
        int m=word2.size();
        vector<vector<int>> dp(n,vector<int>(m,-1));
        return Ed(word1,word2,n-1,m-1,dp);
    }
};
// Input: word1 = "horse", word2 = "ros"
// f(n-1,m-1) if(match)
// f(n-1,m-1) if(Nomatch)replace
// f(n-1,m) if(Nomatch)Delete
// f(n,m-1) if(Nomatch)insert




//! 44. Wildcard Matching
class Solution {
    bool WCM(string s,string p,int n,int m,vector<vector<int>> &dp){
        if(n<0 && m<0)return true;
        if(m<0)return false;
        if(n<0){
            for(int i=0;i<=m;i++)
                if(p[i]!='*')return false;
            return true;    
        }

        if(dp[n][m]!=-1)return dp[n][m];

        bool match=false,matchAny=false;
        if(s[n]==p[m] || p[m]=='?')
            match=WCM(s,p,n-1,m-1,dp);
        
        if(p[m]=='*'){
            matchAny=WCM(s,p,n-1,m,dp) || WCM(s,p,n,m-1,dp);
        }

        return dp[n][m]=match || matchAny;    
    }
public:
    bool isMatch(string s, string p) {
        int n=s.size();
        int m=p.size();
        vector<vector<int>> dp(n+1,vector<int>(m+1,0));
        dp[0][0]=true;

        for(int j=1;j<m+1;j++){
            if(p[j-1]!='*')break;
            dp[0][j]=true;
        }

        for(int i=1;i<n+1;i++){
            for(int j=1;j<m+1;j++){
                bool match=false,matchAny=false;

                if(s[i-1]==p[j-1] || p[j-1]=='?')
                    match=dp[i-1][j-1];
                
                if(p[j-1]=='*')
                    matchAny=dp[i-1][j] || dp[i][j-1];
               

                dp[i][j]=match || matchAny;    
            }
        }

        return dp[n][m];
    }
};
//s[n]==p[m] f(n-1,m-1)
// p[m]=='?' f(n-1,m-1)
// p[m]=='*' case 1: f(n-1,m-1) 
//           case 2:f(n-1,m)
//           case 3:f(n,m-1)