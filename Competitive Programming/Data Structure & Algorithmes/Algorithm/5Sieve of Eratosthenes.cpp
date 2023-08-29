#include<bits/stdc++.h>
using namespace std;
//!Time Complexity: O(n*log(log n))
void sieveOfEratosthenes(int n) {
    std::vector<bool> prime(n + 1, true);

    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    // Print the prime numbers
    for (int p = 2; p <= n; p++) {
        if (prime[p]) {
            std::cout << p << " ";
        }
    }
    cout << endl;
}

    int countPrimes(int n) {
        int count=0;
        vector<int>prime(n+1,true);
        prime[0]=prime[1]=false;

        for (int i = 2; i < n; i++)
        {
            if (prime[i])
            {
                count++;
                for (int j = 2*i; j <n; j+=i)
                {
                    prime[j]=false;
                }
                
            }
            
        }
        return count;
        
        
    }

int main(){
    
    return 0;
}