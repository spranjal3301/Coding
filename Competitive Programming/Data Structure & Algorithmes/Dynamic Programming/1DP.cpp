//!Dynamic Programming
//*Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler
//* subproblems, solving each of those subproblems just once, and storing their solutions.
//* The next time the same subproblem occurs, instead of recomputing its solution,
//* one simply looks up the previously computed solution, thereby saving computation time.


//~Overlapping Subproblems --> Memoization

//~ BackTracking+Memoization/Tabulation
//~ Recursion+Memoization/Tabulation

//!Types of Dynamic Programming
//* 1. Top Down/Memoization(Required Answer--> Base Case)
//* 2. Bottom Up/Tabulation(Base Case->required Answer)


//!Types of Problem  
// https://leetcode.com/discuss/general-discussion/1050391/Must-do-Dynamic-programming-Problems-Category-wise
//*Count no of ways
//*min or max output
//*2D/3D DP and DP on Grids    (pick/Nopick)
//*Subsequence (Match/NoMatch)

//-for Square problem use Tabulation create 2D array

//*Shortcuts
//*1.Try to represent the problem in terms of Index
//*2. Do possible all operations on the Index
//*3.Sum of all possible operations->count all ways
//* Min or Max of all possible operations->min or max of all ways

//!Memoization->Tabulation
//*1. run loop in reverse order
//*2. 2D array-> 2 loops (i,j) dp(n+1,vector<int>(m+1,0)
//*3. copy the recurence
//* recursive call(i,j)->dp[i][j]



//!Partition DP
//-Multipal ways of solve the problem and choose the best one

//- int dp[10][10];
//- memset(dp, 0, sizeof dp); //  Initialize the 2D array with zero.
//-  vector<int> dp(n+1,-1);


#include<bits/stdc++.h>
using namespace std;

//!Fibonacci Series with Recursion
//!Time Complexity: O(2^n)
//!Auxiliary Space: O(n)
class Solution {
public:
    int fib(int n){
        
        if(n<=1)return n;
        return fib(n-1)+fib(n-2);
    }

};


//!Fibonacci Series with Top Down/Memoization
//!Time Complexity: O(N)
//!Auxiliary Space: O(N)
class Solution1 {
    int fib(int n,vector<int>& dp){
        
       if(n<=1)return n;

        if(dp[n]!=-1)return dp[n];

        dp[n]=fib(n-1,dp)+fib(n-2,dp);
        return dp[n];
    }
public:
    int fib(int n) {
        vector<int> dp(n+1,-1);
        fib(n,dp);
        return dp[n];
    }
};


//!Fibonacci Series with Bottom Up/Tabulation
//!Time Complexity: O(N)
//!Auxiliary Space: O(N)
class Solution2 {
public:
  int fib(int n){

    vector<int> dp(n+1,-1);
    dp[0]=0;
    dp[1]=1;
    for(int i=2;i<=n;i++){    
        dp[i]=dp[i-1]+dp[i-2];
    }
   
    
    return dp[n];
}
};

//!Fibonacci Series with Bottom Up/Tabulation+Space Optimisation
//!Time Complexity: O(N)
//!Auxiliary Space: O(1)
class Solution3 {
public:
  int fib(int n){
    int prev2=0;
    int prev1=1;
    for(int i=2;i<=n;i++){    
        int curr=prev1+prev2;
        prev2=prev1;
        prev1=curr;
    }
   
    
    return prev1;
}
};