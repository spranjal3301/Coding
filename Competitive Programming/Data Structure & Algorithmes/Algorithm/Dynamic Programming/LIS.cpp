#include<bits/stdc++.h>
using namespace std;
//!Length of Longest Increasing Subsequence

//!Memoization +Tabulation
class Solution {
    int LIS(vector<int>& nums,int n,int i,int prev,vector<vector<int>> &dp){
        if(i==n)return 0;
        if(dp[i][prev+1]!=-1)return dp[i][prev+1];

        int pick=0;
        int Nopick=LIS(nums,n,i+1,prev,dp);
        if(prev==-1  || nums[prev]<nums[i]){
            pick= 1+LIS(nums,n,i+1,i,dp);
        }
    
        return dp[i][prev+1]=max(pick,Nopick);
        
    }
public:
    int lengthOfLIS(vector<int>& nums) {
        int n=nums.size();
        vector<vector<int>> dp(n+1,vector<int>(n+1,0));

        for(int i=n-1;i>=0;i--){
            for(int prev=i-1;prev>=-1;prev--){
                int pick=0;
                int Nopick=dp[i+1][prev+1];
                if(prev==-1  || nums[prev]<nums[i]){
                    pick= 1+dp[i+1][i+1];
                }
            
                dp[i][prev+1]=max(pick,Nopick);
            }
        }

        return dp[0][-1+1];
    }
};
//!Simple Algo Tabulation (Impotant)
int lengthOfLIS(vector<int>& nums) {
    int n=nums.size();
    vector<int> dp(n,1);//~dp[i] stores length of longest increasing subsequence ending at index i
    int maxi=1;

    for(int i=0;i<n;i++){
        for(int j=i-1;j>=0;j--){
            if(nums[j]<nums[i]){
                dp[i]=max(dp[j]+1,dp[i]);
            }
        }
        maxi=max(dp[i],maxi);
    }
    return maxi;
}

//!Simple Algo + Binary Search
int lengthOfLIS(vector<int>& nums) {
    int n=nums.size();
    vector<int> dp;//~dp[i] stores length of LIS ending at index i
    for(int i=0;i<n;i++){
        int idx=lower_bound(dp.begin(),dp.end(),nums[i])-dp.begin();
        if(idx==dp.size())dp.push_back(nums[i]);
        else dp[idx]=nums[i];
    }
    return dp.size();
}


//!Print Longest Increasing Subsequence
int PrintLIS(vector<int>& nums) {
        int n=nums.size();
        vector<int> dp(n,1);
        vector<int> parent(n,-1);
        int maxi=1,maxIdx=0;

        for(int i=0;i<n;i++){
            for(int j=i-1;j>=0;j--){
                if(nums[j]<nums[i] && dp[j]+1>=dp[i]){
                    dp[i]=dp[j]+1;
                    parent[i]=j;
                }
            }
            if(dp[i]>maxi){
                maxIdx=i;
                maxi=dp[i];
            }
        }
       
        while(maxIdx!=-1){
            cout<<nums[maxIdx]<<" ";
            maxIdx=parent[maxIdx];
        }
        return maxi;
}