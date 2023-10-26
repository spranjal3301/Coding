#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    string reorganizeString(string s) {
        unordered_map<char,int> m;
        int n=s.size();
        int i=0;
        char maxfrq;
        int maxcount=0;
        
        for(char c:s){
            m[c]++;
            if(m[c]>maxcount){
                maxcount=m[c];
                maxfrq=c;
            }
        }
        // not having enough character to fill gaps b/w same char
        if(2*maxcount-1>n)return "";
        
        //filling most occ char alternet eg: aaabbaa -> a_a_a_ _ 
        while(maxcount!=0){
            s[i]=maxfrq;
            maxcount--;
            i+=2;
        }
        m[maxfrq]=0;

        for(auto c:m){
            char e=c.first;
            int o=c.second;
            while(o!=0){
                if(i>=n)i=1;
                s[i]=e;
                o--;
                i+=2;
            }
        }
        return s;
    }
};
int main()
{

    return 0;
}