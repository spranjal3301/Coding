#include<bits/stdc++.h>
using namespace std;
//!Euclidean algorithm is highly efficient for finding the greatest common divisor (GCD) of two integers.
//!Time complexity: O(log(min(a, b)))
//* GCD(a,b)==GCD(a-b,b)==GCD(a%b,b)
//* LCM(a,b)*GCD(a,b)==a*b
int GCD(int a, int b){
    if(a==0)return b;
    if(b==0)return a;

    while (a!=b)
    {
       if(a>b)a=a-b;
       else b=b-a;
    }
    return a;

}
int gcd(int a, int b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
int main(){
   cout<< GCD(15,5);
    
    return 0;
}