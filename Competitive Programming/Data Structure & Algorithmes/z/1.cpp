#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> lexicographicallySmallestArray(vector<int>& nums, int limit) {
        int n = nums.size();
        vector<vector<int>> graph;
        vector<vector<int>> pos;
        vector<pair<int,int>> temp ;

        for(int i=0;i<n;i++){
            temp.push_back({nums[i],i});
        }

        sort(temp.begin(),temp.end());

        int i = 0;
        int prev = temp[0].first;
        while(i<n){
            vector<int> v1,v2;
            while(abs(temp[i].first-prev)<=limit){
                prev = temp[i].first;
                v1.push_back(prev);
                v2.push_back(temp[i].second);
                i++;
            }
            sort(v2.begin(),v2.end());
            graph.push_back(v1);
            pos.push_back(v2);
        }

        vector<int> res(n);

        for(int i=0;i<graph.size();i++){
            for(int j=0;j<graph[i].size();j++){
                res[pos[i][j]] = graph[i][j];
            }
        }



        
        return res;
    }
};

int main(){
//     nums =
// [1,5,3,9,8]
// limit =
//  2

    vector<int> nums = {1,5,3,9,8};
    int limit = 2;

    for(auto x: Solution().lexicographicallySmallestArray(nums,limit)){
        cout<<x<<" ";
    }
    
    return 0;
}