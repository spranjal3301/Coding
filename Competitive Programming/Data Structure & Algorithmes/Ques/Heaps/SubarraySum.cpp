#include<bits/stdc++.h>
using namespace std;

typedef pair<int,int> pii;
vector<int> rangeSum(vector<int>& nums, int n, int left, int right) {
   
        vector<int> ss;
        priority_queue<pii,vector<pii>,greater<pii>> pq;

        for(int i=0;i<n;i++){
            pq.push({nums[i],i});
        }


        while(!pq.empty()){
            pair<int,int> p=pq.top();
            pq.pop();
            int sum=p.first;
            int i=p.second+1;
            ss.push_back(sum);
            if(i<n){
                pq.push({sum+nums[i],i});
            }
        }
        
        return ss;   
    }