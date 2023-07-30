#include<bits/stdc++.h>
using namespace std;
//! index After rotation of k=(index+k)%size
    void rotate(vector<int>& nums, int k) {
        int n=nums.size();
        vector<int>temp(n);
        for (int i = 0; i<n ; i++)
        {
           temp[(i+k)%n]=nums[i];
         }
         nums=temp;
        
    }

int main(){
    vector<int> nums={1,2,3,4,5,6,7};
    int n=nums.size();
    
    rotate(nums,3);
    for (auto &&i : nums)
    {
        cout<<i<<" ";
    }
    
    return 0;
}