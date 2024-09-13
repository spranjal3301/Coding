#include<bits/stdc++.h>
using namespace std;

bool iscan(vector<int>& start, long long int mid, int d){
        int n = start.size();
       vector<long long> chosen(n,0);
        chosen[0] = start[0];
        for(int i=1;i<n;i++){
           long long lower = start[i];
            long long upper = start[i]+d;
            if(chosen[i-1]+mid<=upper){
                chosen[i] = max(lower,chosen[i-1]+mid);
                if(chosen[i]>upper){
                    return false;
                }   
            }else{
                return false;
            }
        }

        return true;

}

    int maxPossibleScore(vector<int>& start, int d) {
        int n = start.size();
        sort(start.begin(),start.end());
        
        long long int l=0,r=start[n-1]+d-start[0],res=0;

        while(l<r){
            long long int mid = l+(r-l)/2;
            if(iscan(start,mid,d)){
                res = mid;
                l = mid+1;
            }else{
                r = mid-1;
            }    
        }

        return (int)(res);
    }