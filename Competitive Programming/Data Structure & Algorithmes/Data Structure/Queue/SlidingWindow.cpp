#include<bits/stdc++.h>
using namespace std;
  vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> ans;
        deque<int> dq;
        int n=nums.size();
        
        for(int i=0;i<k;i++){

            while(!dq.empty() && nums[dq.back()]<=nums[i]){
                dq.pop_back();
            }
            dq.push_back(i);

        }
        ans.push_back(nums[dq.front()]);
        for(int i=k;i<n;i++){

            while(!dq.empty() && i-dq.front()>=k){
                dq.pop_front();
            }

            while(!dq.empty() && nums[dq.back()]<=nums[i]){
                dq.pop_back();
            }
            dq.push_back(i);
            ans.push_back(nums[dq.front()]);
            

        }
        return ans;
       
        
    }
int main(){
    
    return 0;
}