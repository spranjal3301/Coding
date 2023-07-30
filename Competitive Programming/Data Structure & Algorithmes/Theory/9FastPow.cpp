#include<bits/stdc++.h>
using namespace std;
// a^b
//! Time Complexity:O(log b) 
int Pow(int a , int b){
    int result=1;
    while (b>0)
    {
        if(b&1)result=result*a;
        
        a=a*a;
        b=b>>1; //b=b/2;
    }
    return result;
}
int main(){
    cout<< Pow(3,4);
    return 0;
}