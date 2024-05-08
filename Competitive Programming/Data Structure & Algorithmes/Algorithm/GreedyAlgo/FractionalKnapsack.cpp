#include<bits/stdc++.h>
using namespace std;

struct Item{
    int value;
    int weight;
};
class Solution
{
    public:
    //Function to get the maximum total value in the knapsack.
    double fractionalKnapsack(int w, Item arr[], int n)
    {
        vector<pair<double,int>> v;
        
        for(int i=0;i<n;i++){
            v.push_back({arr[i].value*1.0/arr[i].weight,i});  //-Sort in decreasing order of value/weight
        }
        sort(v.begin(),v.end(),greater<pair<double,int>>());
        
        double ans=0;
        for(int i=0;i<n && w>0;i++){
            int k=v[i].second;
            
            if(w-arr[k].weight>=0){
                ans+=arr[k].value;
                w-=arr[k].weight;
            }else{
                ans+=v[i].first*w;
                w=0;
            }
        }
        
        return ans;
        
    }
        
};
