#include<bits/stdc++.h>
using namespace std;

//!Longest Common Subsequence


//-State Transition Function:
//`  LCS(i, j) -> str1[0...i] and str2[0...j] has longest common subsequence

//!Memoization
class Solution {
    int LCS(string& s1,string& s2,int i,int j,vector<vector<int>> &dp){
        if(i==0 && j==0)return s1[0]==s2[0];
        if(i<0 or j<0)return 0;
        if(dp[i][j]!=-1)return dp[i][j];

        
        if(s1[i]==s2[j]){
            int match=1+LCS(s1,s2,i-1,j-1,dp);
            return dp[i][j]=match;
        }else{
            int Nomatch=max(LCS(s1,s2,i-1,j,dp),LCS(s1,s2,i,j-1,dp));
            return dp[i][j]=Nomatch;
        }
    }
public:
    int longestCommonSubsequence(string text1, string text2) {
        int n=text1.size();
        int m=text2.size();
        vector<vector<int>> dp(n,vector<int>(m,-1));
        return LCS(text1,text2,n-1,m-1,dp);
    }
};

//!Tabulation
int longestCommonSubsequence(string s1, string s2) {
        int n = s1.size();
        int m = s2.size();
        vector<vector<int>> dp(n, vector<int>(m, 0));
        dp[0][0] = (s1[0] == s2[0]);

        bool present = false;
        for (int i = 0; i < n; i++) {
            if (s1[i] == s2[0] or present) {
                present = true;
                dp[i][0] = 1;
            }
        }
        present = false;
        for (int j = 0; j < m; j++) {
            if (s2[j] == s1[0] or present) {
                present = true;
                dp[0][j] = 1;
            }
        }

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {

                if (s1[i] == s2[j]) {
                    int match = 1 + dp[i - 1][j - 1];
                    dp[i][j] = match;
                } 
                else {
                    int Nomatch = max(dp[i - 1][j],dp[i][j - 1]);
                    dp[i][j] = Nomatch;
                }
            }
        }

        return dp[n - 1][m - 1];
    }


//!Tabulation (index shifting)
int longestCommonSubsequence(string s1, string s2) {
        int n = s1.size();
        int m = s2.size();
        vector<vector<int>> dp(n+1, vector<int>(m+1, 0));
        dp[0][0] = (s1[0] == s2[0]);

        for(int i=0;i<n+1;i++)
            dp[i][0]=0;
        
      
        for(int j=0;j<m+1;j++)
             dp[0][j]=0;
       

        for (int i = 1; i < n+1; i++) {
            for (int j = 1; j < m+1; j++) {

                if (s1[i-1] == s2[j-1]) {
                    int match = 1 + dp[i - 1][j - 1];
                    dp[i][j] = match;
                } 
                else {
                    int Nomatch = max(dp[i - 1][j],dp[i][j - 1]);
                    dp[i][j] = Nomatch;
                }
            }
        }

        return dp[n][m];
}

//!Space Optimized
vector<int> LCS(string s1, string s2) {
    int n = s1.size();
    int m = s2.size();
    vector<int> dp(m + 1, 0);
    vector<int> prev_dp(m + 1, 0); // To store the previous row values
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[j] = 1 + prev_dp[j - 1];
            } else {
                dp[j] = max(dp[j - 1], prev_dp[j]);
            }
        }
        prev_dp = dp; // Update the previous row
    }
    
    return dp;
}


//!Print LCS
int PrintLCS(string s1, string s2) {
    int n = s1.size();
    int m = s2.size();
    vector<int> dp = LCS(s1, s2);
    string lcs = "";
    int i = n, j = m;

    while (i > 0 && j > 0) {
        if (s1[i - 1] == s2[j - 1]) {
            lcs = s1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[j - 1] > dp[j]) {
            j--;
        } else {
            i--;
        }
    }

    cout << lcs << endl; // Print LCS
    return dp[m]; // Return the length of LCS
}