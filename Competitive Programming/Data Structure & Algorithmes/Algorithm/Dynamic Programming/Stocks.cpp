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

// 122. Best Time to Buy and Sell Stock II
class Solution {
    int solve(vector<int>& prices,bool buy,int n,int i,vector<vector<int>> &dp){
        if(i==n)return 0; 
        
        if(dp[i][buy]!=-1)return dp[i][buy];

        int profit=0;
        if(buy){
            int Buy=solve(prices,false,n,i+1,dp)-prices[i];
            int Nobuy=solve(prices,true,n,i+1,dp);
            profit=max(Buy,Nobuy);
        }else{
            int Sell=solve(prices,true,n,i+1,dp)+prices[i];
            int Nosell=solve(prices,false,n,i+1,dp);
            profit=max(Sell,Nosell);
        }
        return dp[i][buy]=profit;


    }
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        vector<vector<int>> dp(n,vector<int>(2,-1));
        return solve(prices,true,n,0,dp);
    }
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        vector<int> curr(2,0);
        vector<int> ahead(2,0);
        // dp[n][0]=dp[n][1]=0;
      

        for(int i=n-1;i>=0;i--){
            for(int buy=1;buy>=0;buy--){
                int profit=0;
                if(buy==1){
                    int Buy=ahead[0]-prices[i];
                    int Nobuy=ahead[1];
                    profit=max(Buy,Nobuy);
                }else{
                    int Sell=ahead[1]+prices[i];
                    int Nosell=ahead[0];
                    profit=max(Sell,Nosell);
                }
                curr[buy]=profit;
            }
            ahead=curr;
        }

        return curr[1];
    }
};


// 123. Best Time to Buy and Sell Stock III
class Solution {
    // tno->transactions no.
    int solve(vector<int>& prices, int n,int k,int i,int tno) {
        if (tno == k || i == n)return 0;


        int Profit = 0;
        if (tno%2==0) {
            int Buy = solve(prices, n,k,i + 1, tno+1) - prices[i];
            int Nobuy = solve(prices,n,k,i + 1,tno);
            Profit = max(Buy, Nobuy);
        } else {
            int Sell = solve(prices, n,k,i + 1,tno+1) + prices[i];
            int Nosell = solve(prices, n,k,i + 1,tno);
            Profit = max(Sell, Nosell);
        }
        return Profit;
    }

public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int K = 2;

        vector<int> ahead(K*2+1,0);
        vector<int> curr(K*2+1,0);
        // vector<vector<int>> dp(n,vector<int>(K*2,0));
 

        for (int i = n - 1; i >= 0; i--) {

            for(int tno=K*2-1;tno>=0;tno--){
                int Profit = 0;
                if (tno%2==0) {
                    int Buy = ahead[tno+1] - prices[i];
                    int Nobuy = ahead[tno];
                    Profit = max(Buy, Nobuy);
                } else {
                    int Sell = ahead[tno+1] + prices[i];
                    int Nosell = ahead[tno];
                    Profit = max(Sell, Nosell);
                }
                curr[tno]=Profit;
            }
            ahead=curr;
        }

        return curr[0];
    }
};


// 188. Best Time to Buy and Sell Stock IV
class Solution {
       int solve(vector<int>& prices, int n, int i, bool Besttime, int k) {
        if (k == 0)
            return 0;
        if (i == n)
            return 0;

        int Profit = 0;
        if (Besttime == 0) {
            int Buy = solve(prices, n, i + 1, 1, k) - prices[i];
            int Nobuy = solve(prices, n, i + 1, 0, k);
            Profit = max(Buy, Nobuy);
        } else {
            int Sell = solve(prices, n, i + 1, 0, k - 1) + prices[i];
            int Nosell = solve(prices, n, i + 1, 1, k);
            Profit = max(Sell, Nosell);
        }
        return Profit;
    }
      
public:
      int maxProfit(int K,vector<int>& prices) {
        int n = prices.size();
        // int K = 2;
        // vector<vector<vector<int>>> dp(n+1, vector<vector<int>>(2, vector<int>(k + 1, 0)));
        vector<vector<int>> ahead(2,vector<int>(K+1,0));
        vector<vector<int>> curr(2,vector<int>(K+1,0));
 

        for (int i = n - 1; i >= 0; i--) {

            for (int Besttime = 0; Besttime <= 1; Besttime++) {
                for (int k = 1; k < K+1; k++) {

                    int Profit = 0;
                    if (Besttime == 0) {
                        int Buy = ahead[1][k] - prices[i];
                        int Nobuy = ahead[0][k];
                        Profit = max(Buy, Nobuy);
                    } else {
                        int Sell=ahead[0][k-1]+prices[i];
                        int Nosell = ahead[1][k];
                        Profit = max(Sell, Nosell);
                    }
                    curr[Besttime][k]=Profit;
                }
            }
            ahead=curr;
        }

        return curr[0][K];
    }
};