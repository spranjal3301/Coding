#include <bits/stdc++.h>
using namespace std;
//! . Q . .
//! . . . Q
//! Q . . .
//! . . Q .
//! Attack Place
//* same row
//* same col
//* digonal

//! Time Complexity: O(N!) - N-Queens problem has N! solutions in the worst case.
//! Auxiliary Space: O(N) - Space for the board and recursive call stack.

class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board(n, string(n, '.')); // Initialize the board
        solveNQueens(n, ans, board, 0); // Start from column 0
        return ans;
    }

private:
    bool isSafePlace(const vector<string>& board, int n, int row, int col) {
        //! No need to check boz we are only placeing one Queen in one col
        //! Row Check
        //*we only have to check left in row boz we start placement of Q  from left  to right no need to check right
        for (int i = 0; i < col; i++) {
            if (board[row][i] == 'Q') return false;
        }

        // Check upper-left diagonal
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }

        // Check lower-left diagonal
        for (int i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] == 'Q') return false;
        }

        return true;
    }

    void solveNQueens(int n, vector<vector<string>> &ans, vector<string>& board, int col) {
        if (col == n) {
            ans.push_back(board);
            return;
        }
        for (int row = 0; row < n; row++) {
            if (isSafePlace(board, n, row, col)) {
                board[row][col] = 'Q';
                solveNQueens(n, ans, board, col + 1);
                board[row][col] = '.';
            }
        }
    }
};
