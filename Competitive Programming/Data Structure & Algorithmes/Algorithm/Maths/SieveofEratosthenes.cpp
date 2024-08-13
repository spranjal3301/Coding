#include <bits/stdc++.h>
using namespace std;
//! Time Complexity: O(n*log(log n))
//! All Prime numbers less than equal to n
vector<bool> sieveOfEratosthenes(int n){
    vector<bool> prime(n + 1, true);

    for (int p = 2; p * p <= n; p++){ //-p<sqrt(n) is also correct
        if (prime[p]){
            //-marking multiples of p as not prime
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
    return prime;
}


//!Check if a number is prime or not
bool isPrime(int n){
    if (n <= 1)return false;
    
    for (int i = 2; i * i <= n; i++){
        if (n % i == 0)return false;
    }
    return true;
}


