#include<bits/stdc++.h>
using namespace std;

//! 1277. Count Square Submatrices with All Ones
class Solution {
public:
    int countSquares(vector<vector<int>>& mat) {
        int n = mat.size();
        int m = mat[0].size();
        vector<vector<int>> dp(n, vector<int>(m, 0));
        //-dp[i][j]` represents the side length of the largest square ending at position `(i, j)`

        for (int j = 0; j < m; j++)dp[0][j] = mat[0][j];
        for (int i = 0; i < n; i++)dp[i][0] = mat[i][0];

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 1) {
                    dp[i][j] = 1 + min(dp[i - 1][j - 1],
                                       min(dp[i][j - 1], dp[i - 1][j]));
                }
            }
        }

        int sum = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                sum += dp[i][j];
            }
        }

        return sum;
    }
};
