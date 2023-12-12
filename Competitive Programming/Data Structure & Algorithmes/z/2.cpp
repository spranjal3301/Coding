#include <bits/stdc++.h>
using namespace std;
long countSubarrays(int a[], int n, int L, int R)
{
    deque<int> q;
    long res=0;
    int maxi=0;

    for (int i = 0; i < n; i++)
    {
        int num=a[i];
        if(q.empty() && (num>=L and num<=R )){
            maxi=max(maxi,num);
            q.push_back(num);
            res++;
        }
        else if(!q.empty() && (num>=L and num<=R )){
            maxi=max(maxi,num);
            q.push_back(num);
            res+=q.size();
        }
        else if(!q.empty() && !(num>=L and num<=R )){
            if(maxi<num){
                q.push_back(num);
                res+=(q.size()-1);
            }
            else{
                maxi=0;
                q.clear();
            }
        }
        
    }
    
    
}
void display(auto fn){

}
int main()
{
display(countSubarrays);
    return 0;
}