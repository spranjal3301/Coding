#include<bits/stdc++.h>
using namespace std;
int maxProfit(vector<int>& prices) {
        if(prices.size()==1)return 0;
        int min=prices[0];
        int max=0;
        int profit=0,total_profit=0;
        for (size_t i = 1; i < prices.size(); i++)
        {
            if (min>prices[i])
            {
               min=prices[i];
               max=0;
            }
            else if (max<prices[i])
            {
                max=prices[i];
            }
            if (profit<max-min)
            {
                profit=max-min;
                // cout<<profit<<endl;
                total_profit+=profit;
                max=0;
                min=prices[i];
                profit=0;
            }
            
            
        }
        return total_profit;
        

    }
int main(){
    vector<int> prices={1,2,3,4,5};
   cout<< maxProfit(prices);
    return 0;
}