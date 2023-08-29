#include<bits/stdc++.h>
using namespace std;

void solve(vector<int> nums,vector<vector<int>> &ans,vector<int> output,int i){
    if (i>nums.size()-1)
    {
        ans.push_back(output);
        return;
    }
    //!Exclude
    solve(nums,ans,output,i+1);

    //!Include
    int element=nums[i];
    output.push_back(element);
    solve(nums,ans,output,i+1);
    
}
//!Resursion
  vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> output;
        int i=0;
        solve(nums,ans,output,i); 
        return ans;
        
    }
//!Bit Manupulation
vector<vector<int>> Subsets(vector<int>& nums) {
        int n=nums.size();
        vector<vector<int>> ans;
        for (int i = 0; i < (1<<n); i++) //2^n== 1<<n
        {   //* nums={1,2,3};
            //* i=0->000->{}
            //* i=1->001->{1}
            //* i=2->010->{2}
            //* i=3->011->{1,2}
            //* i=4-100->{3}
            //* i=5->101->{1,3}
            //* i=6->110->{2,3}
            //* i=7->111->{1,2,3}
            vector<int> output;
            for (int j = 0; j <n; j++)
            {
               if ((1<<j)&i)
              {//* 1 left shifted by j times 
                  //* 001 & 111(i=5) j=0
                   //* 010 & 111(i=5) j=1
                   //* 100 & 111(i=5) j=2
                   output.push_back(nums[j]);
                
               }
               
            }
            ans.push_back(output);
            
        }
        
        return ans;
        
    }
int main(){
    vector<int> nums={1,2,2};
    vector<vector<int>> matix=Subsets(nums);
    for (auto &&i : matix)
    {
        for (auto &&j : i)
        {
            cout<<j;
        }
        cout<<",";
        
    }
    
    return 0;
}
 //* nums={1,2,2};
            //* i=0->000->{}
            //* i=1->001->{1}
            //* i=2->010->{2}
            //* i=3->011->{1,2}
            //* i=4-100->{2}
            //* i=5->101->{1,2}
            //* i=6->110->{2,2}
            //* i=7->111->{1,2,2}