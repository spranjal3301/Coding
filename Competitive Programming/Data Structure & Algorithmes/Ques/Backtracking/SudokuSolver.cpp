#include <bits/stdc++.h>
using namespace std;
class Solution
{
    bool isDigitPossible(vector<vector<char>> &board,int n,int row,int col,char digit){
         
        for (int j = 0; j <n; j++)
        {
            //! Row check
            if(board[row][j]==digit)return false;
            //! Col check 
            if(board[j][col]==digit)return false;
            //!3x3 grid check
            int gridRow = 3 * (row / 3) + j / 3;
            int gridCol = 3 * (col / 3) + j % 3;
            if(board[gridRow][gridCol]==digit)return false;
        }
        return true;
    }
    bool solveSudoku(vector<vector<char>> &board, int n)
    {

        for (int row = 0; row < n; row++)
        {
            for (int col = 0; col < n; col++)
            {
                if(board[row][col]=='.'){
                    for (char digit = '1'; digit <='9'; digit++)
                    {
                        if(isDigitPossible(board,n,row,col,digit)){
                            board[row][col]=digit;
                            bool isSolutionPossible=solveSudoku(board,n);
                            if (isSolutionPossible) 
                                return true;
                            else 
                                board[row][col]='.';//!backtrack
                            
                            
                        }
                    }
                    return false;//!NO solution 
                }
            }
            
        }
        return true;
    }

public:
    void solveSudoku(vector<vector<char>> &board)
    {
        int n = 9; //! 9x9 board
        solveSudoku(board, n);
    }
};
int main()
{

    return 0;
}