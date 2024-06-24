#include<bits/stdc++.h>
using namespace std;
//! min Energy Consumedfor Frog Jump

//*Memoization
int solve(vector<int> &energy,vector<int> &dp,int n){
    if(dp[n]!=INT_MAX)return dp[n];

    int left=solve(energy,dp,n-1)+abs(energy[n]-energy[n-1]),right=INT_MAX;

    if(n>1)
        right=solve(energy,dp,n-2)+abs(energy[n]-energy[n-2]);

    dp[n]=min(left,right);

    return dp[n];

}

//!Memoization --> Tabulation
//* n--->i
//*fn(n)-->dp[i]

int frogJump(vector<int> &energy) {
    int n=energy.size()-1;
    vector<int> dp(n+1,INT_MAX);
    dp[0]=0;
    dp[1]=abs(energy[1]-energy[0]);
    // solve(energy,dp,n);

    //*Tabulation
    for(int i=2;i<=n;i++){
        int left=dp[i-1]+abs(energy[i]-energy[i-1]);
        int right=dp[i-2]+abs(energy[i]-energy[i-2]);
        dp[i]=min(left,right);
    }

    return dp[n];
}
 
 //*Space Optimisation
 int frogJump(vector<int> &energy) {
     int n = energy.size() ;
    int prev2 = 0;
    int prev1 = abs(energy[1] - energy[0]);

    for (int i = 2; i < n; i++) {
        int curr = min(prev1 + abs(energy[i] - energy[i - 1]), prev2 + abs(energy[i] - energy[i - 2]));
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}




