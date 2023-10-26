#include<bits/stdc++.h>
using namespace std;
//!Backtracking
//* Backtracking is like trying different paths, and when you hit a dead end,
//* you backtrack to the last choice and try a different route.
//* Backtracking is a form of recursion.

//! What is Backtracking?
//*finding a solution incrementally by trying different options and undoing them if they lead to a dead end. 
//*Backtracking can be thought of as a selective tree/graph traversal method.

//! commonly used in situations where you need to explore multiple possibilities to solve a problem,
//! like searching for a path in a maze or solving puzzles like Sudoku. 

///! Types of Backtracking Problems
//* Decision Problems: Here, we search for a feasible solution.
//* Optimization Problems: For this type, we search for the best solution.
//* Enumeration Problems: We find set of all possible feasible solutions to the problems of this type.

//? void FIND_SOLUTIONS( parameters):
//? if (valid solution):
//? store the solution
//? Return
//? for (all choice):
//? if (valid choice):
//? APPLY (choice)
//? FIND_SOLUTIONS (parameters)
//? BACKTRACK (remove choice)
//? Return 

//! backtracking algorithm is purely brute force

//! Time complexities: Exponential (O(K^N))
//!                     Factorial (O(N!))

// Applications of Backtracking
// Creating smart bots to play Board Games such as Chess.
// Solving mazes and puzzles such as N-Queen problem.
// Network Routing and Congestion Control.
// Decryption
// Text Justification