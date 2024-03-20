// #include<iostream>
// using namespace std;

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>


// Function to print the y-positions of queens
void printBoard(int *board, int N) {
    for (int i = 0; i < N; i++) {
        printf("%d ", board[i] + 1);  // Adding 1 to convert from 0-index to 1-index
    }
    printf("\n");
}

// Function to check if a queen can be placed at board[row][col]
bool isSafe(int *board, int row, int col) {
    for (int i = 0; i < col; i++) {
        if (board[i] == row || abs(board[i] - row) == abs(i - col)) {
            return false;
        }
    }
    return true;
}

// Recursive function to solve the N-Queens problem
void solveNQueens(int *board, int col, int N) {
    if (col >= N) {
        // Solution found, print the y-positions
        printBoard(board, N);
        return;
    }

    for (int i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[col] = i;  // Place queen

            // Recur to place queens in the remaining columns
            solveNQueens(board, col + 1, N);
        }
    }
}

int main() {
    int N;

    printf("Enter the number of queens (N): ");
    scanf("%d", &N);

  

    int *board = (int *)malloc(N * sizeof(int));



    solveNQueens(board, 0, N);

    free(board);  

    return 0;
}
// 5
// 1 4 2 5 3
// 2 4135


