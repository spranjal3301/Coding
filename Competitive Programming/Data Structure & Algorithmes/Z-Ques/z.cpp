#include<bits/stdc++.h>
using namespace std;
    int maxProfit(vector<int>& prices) {
        int max =0;
        for (size_t i = 0; i < prices.size(); i++)
        {
            for (size_t j = i+1; j < prices.size(); j++)
            {
                int temp=prices[j]-prices[i];
                if (max<temp)
                {
                    max=temp;
                }
                
            }
                
            
        }
       return max; 
    }
int main(){
     vector<int> nums={7,6,4,3,1};
    cout<<maxProfit(nums);
    return 0;
}