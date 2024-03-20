#include<bits/stdc++.h>
using namespace std;

//!Memoization
class Solution {
     int SolvecherryPickup(vector<vector<int>>& grid,int &row,int &cols,int i,int j1,int j2,vector<vector<vector<int>>>& dp){
        if(j1<0 or j1>=cols or j2<0 or j2>=cols)
            return -1e8;//INT_MIN overflow
        if(i==row-1){
            if(j1==j2)return grid[i][j1];
            else return grid[i][j1]+grid[i][j2];
        } 
        if(dp[i][j1][j2]!=-1)return dp[i][j1][j2];   



        int maxi=INT_MIN;
        for(int a=-1;a<=1;a++){
            for(int b=-1;b<=1;b++){
                maxi=max(maxi,SolvecherryPickup(grid,row,cols,i+1,j1+a,j2+b,dp));
            }
        }

        if(j1==j2)dp[i][j1][j2]=grid[i][j1]+maxi;
        else dp[i][j1][j2]=grid[i][j1]+grid[i][j2]+maxi;

        return dp[i][j1][j2];
     }
public:
    int cherryPickup(vector<vector<int>>& grid) {
        int row=grid.size();
        int cols=grid[0].size();
        vector<vector<vector<int>>> dp(row, vector<vector<int>>(cols, vector<int>(cols, -1)));
        return SolvecherryPickup(grid,row,cols,0,0,cols-1,dp);
    }
};

//!Tabulation
class Solution {
public:
    int cherryPickup(vector<vector<int>>& grid) {
        int row=grid.size();
        int cols=grid[0].size();
        vector<vector<vector<int>>> dp(row, vector<vector<int>>(cols, vector<int>(cols, -1)));
        
        for(int j1=0;j1<cols;j1++){
            for(int j2=0;j2<cols;j2++){
                dp[row-1][j1][j2]=grid[row-1][j1];
                if(j1!=j2)dp[row-1][j1][j2]+=grid[row-1][j2];//~pick oneself
            }
        }

        for(int i=row-2;i>=0;i--){
            for(int j1=0;j1<cols;j1++){
                for(int j2=0;j2<cols;j2++){

                    int maxi=INT_MIN;
                    for(int a=-1;a<=1;a++){
                        for(int b=-1;b<=1;b++){
                            if(j1+a>=0 and j1+a<cols and j2+b>=0 and j2+b<cols){
                                maxi=max(maxi,dp[i+1][j1+a][j2+b]);
                            }
                        }
                    }
                    if(j1==j2)dp[i][j1][j2]=grid[i][j1]+maxi;
                    else dp[i][j1][j2]=grid[i][j1]+grid[i][j2]+maxi;
                }
            }
        }

        return dp[0][0][cols-1];
    }
};

//!Space Optimization
class Solution {
public:
    int cherryPickup(vector<vector<int>>& grid) {
        int row=grid.size();
        int cols=grid[0].size();
        vector<vector<int>> prev(cols, vector<int>(cols, -1));
        
        for(int j1=0;j1<cols;j1++){
            for(int j2=0;j2<cols;j2++){
                prev[j1][j2]=grid[row-1][j1];
                if(j1!=j2)prev[j1][j2]+=grid[row-1][j2];//~pick oneself
            }
        }

        for(int i=row-2;i>=0;i--){
            vector<vector<int>> curr(cols, vector<int>(cols, -1));

            for(int j1=0;j1<cols;j1++){
                for(int j2=0;j2<cols;j2++){

                    int maxi=INT_MIN;
                    for(int a=-1;a<=1;a++){
                        for(int b=-1;b<=1;b++){
                            if(j1+a>=0 and j1+a<cols and j2+b>=0 and j2+b<cols){
                                maxi=max(maxi,prev[j1+a][j2+b]);
                            }
                        }
                    }
                    if(j1==j2)curr[j1][j2]=grid[i][j1]+maxi;
                    else curr[j1][j2]=grid[i][j1]+grid[i][j2]+maxi;
                }
            }
            prev=curr;
        }

        return prev[0][cols-1];
    }
};