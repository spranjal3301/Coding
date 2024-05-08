#include<bits/stdc++.h>
using namespace std;

// 121. Best Time to Buy and Sell Stock
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        int mini=prices[0];
        int profit=0;

        for(int i=1;i<n;i++){
            mini=min(mini,prices[i]);
            profit=max(profit,prices[i]-mini);
        }

        return profit;
    }
};


// 53. Maximum Subarray
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int n=nums.size();
        int maxi=nums[0];
        int sum=0;
        for(int i=0;i<n;i++){
            sum=max(sum,0);//for -ve value
            sum+=nums[i];
            maxi=max(sum,maxi);
        }
        return maxi;
    }
};