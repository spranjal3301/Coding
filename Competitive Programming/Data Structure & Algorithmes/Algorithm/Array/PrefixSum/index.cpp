#include<bits/stdc++.h>
using namespace std;
//! Prefix Sum

//` Type1 ( [x-k] + [k] = [x] )
// 560. Subarray Sum Equals K
 int subarraySum(vector<int>& nums, int k) {
        int n=nums.size();
        int res=0;
        int sum=0;
        unordered_map<int,int> ps;
        ps[0]=1;

        for(int i=0;i<n;i++){
            sum+=nums[i];
            if(ps[sum-k]){
                res+=ps[sum-k];
            }
            ps[sum]++;
        }

        return res;
    }


//` Type2 ( if ([x] == [y]) [x] - [y] = [0] )
// 525. Contiguous Array
// binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
int findMaxLength(vector<int>& nums) {
        int n=nums.size();
        if(n<2)return 0;
        unordered_map<int,int> prefixSum(n);
        prefixSum[0]=0;
        int sum=0;
        int res=0;

        for(int i=0;i<n;i++){
            if(nums[i])sum++;
            else sum--;

            if(prefixSum.find(sum)!=prefixSum.end()){
                res=max(res,i-prefixSum[sum]+1);
            }else{
                prefixSum[sum]=i+1;
            }
        }

        return res;
    }

//` Type3 if( SuffSum - PreSum == 0) then [PreSum] = [SuffSum]
// 724. Find Pivot Index 
    int pivotIndex(vector<int>& nums) {
        int n = nums.size();
        int sum = 0;
        int res = -1;
        vector<int> prefixSum(n, 0);

        for (int i = 0; i < n; i++) {
            sum += nums[i];
            prefixSum[i] = sum;
        }

        for (int i = 0; i < n; i++) {
            if(prefixSum[i]==sum)return i;
            sum-=nums[i];
        }
        return res;
    }

