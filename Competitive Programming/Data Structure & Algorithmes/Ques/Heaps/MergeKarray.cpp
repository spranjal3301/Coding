#include <bits/stdc++.h>
using namespace std;
//! Function to merge k sorted arrays.
//!Approch 
//* Need MinHeap for get minimum element from k sorted array
//* and add top element from heap to array and add next element of array
//* to heap if array is not empty
//!Time Complexity: O(nklog(k))
//!Space Complexity:O(k)
class mini{
public:
    int val;//value of minmum element
    int arr;//which array
    int idx;//which index of array 

    mini(int val,int arr,int idx){
        this->val=val;
        this->arr=arr;
        this->idx=idx;
    }
};
class myComp{
public:
    bool operator()(mini* a,mini* b){
        return a->val>b->val;
    }
};
vector<int> mergeKArrays(vector<vector<int>> arr, int K)
{
    vector<int> ans;
    priority_queue<mini*,vector<mini*>,myComp> pq;

    for(int i=0;i<K;i++){
        mini* temp=new mini(arr[i][0],i,0);
        pq.push(temp);
    }

    while(!pq.empty()){
        mini* m=pq.top();
        pq.pop();
        ans.push_back(m->val);

        int i=m->arr;
        int j=m->idx;
        if(j+1<arr[i].size()){
            mini *next=new mini(arr[i][j+1],i,j+1);
            pq.push(next);
        }
    }

  return ans;   
}
int main()
{

    return 0;
}