#include<bits/stdc++.h>
using namespace std;
class Solution {
    bool isSafe(int x, int y, int n, int m) {
        return x >= 0 && x < n && y >= 0 && y < m;
    }

    bool dfs(vector<vector<char>>& board, string& word, int x, int y, int i) {
        if (i == word.size()) {
            return true;
        }

        if (!isSafe(x, y, board.size(), board[0].size()) || board[x][y] != word[i]) {
            return false;
        }

        char original = board[x][y];
        board[x][y] = '#'; // Mark the cell as visited

        bool found = dfs(board, word, x + 1, y, i + 1) ||
                     dfs(board, word, x - 1, y, i + 1) ||
                     dfs(board, word, x, y + 1, i + 1) ||
                     dfs(board, word, x, y - 1, i + 1);

        board[x][y] = original; // Restore the cell

        return found;
    }

public:
    bool exist(vector<vector<char>>& board, string word) {
        int n = board.size();
        int m = board[0].size();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (board[i][j] == word[0] && dfs(board, word, i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
};

int main(){
    
    return 0;
}