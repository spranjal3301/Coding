#include<bits/stdc++.h>
using namespace std;

//! 2D Prefix Sum
// 1074. Number of Submatrices That Sum to Target

//  Matrix :
//* [0,1,0],
//* [1,1,1],
//* [0,1,0]

//` PrfixSum
//` ps[i][j] = mat[i][j] + ps[i - 1][j] +
//`                        ps[i][j - 1] -
//`                        ps[i - 1][j - 1];

//` sum of submatrix from (r1,c2) to (r2,c2)  = 
//`                                     ps[r2][c2] - ps[r1 -1][c2] - ps[r2][c1 - 1] + ps[r1 - 1][c1 - 1]
//  PrefixSum Matrix:
//* [0,1,1]
//* [1,3,4]
//* [1,4,5]

class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& mat, int target) {
        int n = mat.size();
        int m = mat[0].size();
        vector<vector<int>> ps(n, vector<int>(m, 0));

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                ps[i][j] = mat[i][j] + 
                           (i == 0 ? 0 : ps[i - 1][j]) +
                           (j == 0 ? 0 : ps[i][j - 1]) -
                           (i > 0 && j > 0 ? ps[i - 1][j - 1] : 0);
            }
        }


        int cnt = 0;
        for (int r1 = 0; r1 < n; r1++) {
            for (int r2 = r1; r2 < n; r2++) {
                unordered_map<int,int> mp;
                mp[0]=1;
                for (int c = 0; c < m; c++) {
                    int sum = ps[r2][c] - 
                             (r1 == 0 ? 0 : ps[r1 - 1][c]) ;

                    cnt+=mp[sum-target];
                    mp[sum]++;
                }
            }
        }

        return cnt;
    }
};
