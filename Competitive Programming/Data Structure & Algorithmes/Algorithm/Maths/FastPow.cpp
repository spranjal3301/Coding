#include<bits/stdc++.h>
using namespace std;
// a^b
//! Time Complexity:O(log b) 
int Pow(int a , int b){
    int result=1;
    while (b>0){
        if(b&1)result=result*a;
        
        a=a*a;
        b=b>>1; //b=b/2;
    }
    return result;
}
int Recursive_Pow(int a , int b){
   if (b==0)return 1;
   int result=Recursive_Pow(a,b/2);
   if (b&1)return result*result*a;
   
   return result*result ; 
}

int binaryMultiplication(int a, int b){
    int result = 0;
    while (b > 0)
    {
        if (b & 1)
            result = result + a;
        a = a + a;
        b = b >> 1;
    }
    return result;
}
