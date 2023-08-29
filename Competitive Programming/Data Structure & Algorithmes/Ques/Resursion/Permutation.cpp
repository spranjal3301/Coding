#include<bits/stdc++.h>
using namespace std;
void solve(vector<int> nums ,vector<vector<int>> &ans,int i){
    if (i>nums.size()-1)
    {
        ans.push_back(nums);
        return;
    }

    for (size_t j = i; j < nums.size(); j++)
    {
       swap(nums[i],nums[j]);
       solve(nums,ans,i+1);
       //!Backtracking : want to achive original state before next iteration
       swap(nums[i],nums[j]);
    }
    
    
}
vector<vector<int>> permute(vector<int> &nums){
    vector<vector<int>> ans;
    int i=0;
    solve(nums,ans,i);
    return ans;

}
int main(){
    
    return 0;
}