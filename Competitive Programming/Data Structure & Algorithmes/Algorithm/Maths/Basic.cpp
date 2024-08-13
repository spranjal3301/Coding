#include<bits/stdc++.h>
using namespace std;


//! Digit Extraction in Reverse Order
// 1234 -> 4 3 2 1
vector<int> digitExtraction(int n){
    vector<int> digit;
    while(n){
        digit.push_back(n%10);
        n/=10;
    }

    return digit;

    //!OR
    // string s = to_string(n);
    // vector<int> digit;
    // for(int i=s.size()-1; i>=0; i--){
    //     digit.push_back(s[i]-'0');
    // }
}

//! Count Digits
int countDigits(int n){
    int count = (int)log10(n)+1; //- log10(1234) = log10(10^3) + log10(1.234) = 3 + 0.091 = 3.091
    return count;
}


//! Reverse a Number
int reverseNumber(int n){
    int rev = 0;
    while(n){
        int digit = n%10;
        rev = rev*10 + digit; //?Building num in Forword 0*10 + 4 = 4, 4*10 + 3 = 43, 43*10 + 2 = 432, 432*10 + 1 = 4321
        n/=10;
    }
    return rev;
}

//! Print all Divisors of a Number
vector<int> divisors(int n){
    vector<int> div;
    for(int i=1; i<=sqrt(n) or i*i<=n; i++){
        if(n%i==0){
            div.push_back(i);
            if(i!=n/i) div.push_back(n/i);
        }
    }
    return div;
}

//!Print all Prime Factors of a Number
vector<int> primeFactors(int n){
    vector<int> factors;
  
    for(int i=2; i<=sqrt(n); i+=2){
        if(n%i==0){

        factors.push_back(i);
        while(n%i==0){
            n/=i;
            }
        }    
    }

    if(n!=1) factors.push_back(n);
    return factors;
}


// ! Smallest Prime Factor (SPF)
vector<int> smallestPrimeFactor(int n){
    vector<int> spf(n+1, 0);
    for(int i=2; i<=n; i++){
        if(spf[i]==0){
            spf[i] = i;
            for(int j=i*i; j<=n; j+=i){
                if(spf[j]==0) spf[j] = i;
            }
        }
    }
    return spf;
}
