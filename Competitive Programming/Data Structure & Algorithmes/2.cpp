#include<bits/stdc++.h>
using namespace std;

// If n ≤ 12, the time complexity can be O(n!).
// If n ≤ 25, the time complexity can be O(2n).
// If n ≤ 100, the time complexity can be O(n4).
// If n ≤ 500, the time complexity can be O(n3).
// If n ≤ 104, the time complexity can be O(n2).
// If n ≤ 106, the time complexity can be O(n log n).
// If n ≤ 108, the time complexity can be O(n).
// If n > 108, the time complexity can be O(log n) or O(1).

string solve(int N, int K, vector<string>& A) {
    vector<bool> dp(1 << K, false);
    dp[0] = true;
    for (int i = 0; i < N; i++) {
        int mask = stoi(A[i], nullptr, 2);
        for (int j = (1 << K) - 1; j >= 0; j--) {
            if (dp[j]) {
                dp[j | mask] = true;
            }
        }
    }
    for (int j = 1; j < (1 << K); j++) {
        if (!dp[j]) {
            return "NO";
        }
    }
    return "YES";
}