#include<bits/stdc++.h>
using namespace std;
  void solve(vector<int> candidates,int target,vector<vector<int>> &ans, vector<int> output,int i,int sum){
        if (sum==target)
        {
           ans.push_back(output);
          
           return;
        }
        if (i>candidates.size()-1)
        {
           
            return;
           
        }
        //!Include
        output.push_back(candidates[i]);
        sum+=candidates[i];
        solve(candidates,target,ans,output,i,sum);
        //*Backtracking
        sum-=candidates[i];
        output.pop_back();

        //!Exclude
        solve(candidates,target,ans,output,i+1,sum);

        
        
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> ans;
        vector<int> output;
        int i=0;
        int sum=0;
        solve(candidates,target,ans,output,i,sum);
        return ans;
    }
int main(){
    
    return 0;
}