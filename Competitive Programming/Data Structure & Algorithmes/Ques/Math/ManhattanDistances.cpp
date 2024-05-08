#include<bits/stdc++.h>
using namespace std;

//! 3102. Minimize Manhattan Distances
//- The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.


//!Maths:
//! ni=xi+yi
//! mi=xi-yi
//! Manhattan Distances(Point1,Ponit2)=max(|n1-n2|,|m1-m2|)

class Solution {

public:
    int minimumDistance(vector<vector<int>>& points) {  
        int mini=INT_MAX;
        int n=points.size();

        multiset<pair<int,int>> ms1,ms2;
        int i=0;
        for(auto p:points){
            ms1.insert({p[0]+p[1],i});
            ms2.insert({p[0]-p[1],i});
            i++;
        }

        
        for(int i=0;i<n;i++){
            multiset<pair<int,int>>::iterator it11 = ms1.begin(),it12 = ms1.end();
            multiset<pair<int,int>>::iterator it21 = ms2.begin(),it22 = ms2.end();
            it12--;
            it22--;
            if(it11->second==i)it11++;
            if(it12->second==i)it12--;
            if(it21->second==i)it21++;
            if(it22->second==i)it22--;
            
            int n1=it11->first;
            int n2=it12->first;
            int m1=it21->first;
            int m2=it22->first;

            int maxi=max(abs(n1-n2),abs(m1-m2));

            mini=min(maxi,mini);
        }

        return mini;
    }
};