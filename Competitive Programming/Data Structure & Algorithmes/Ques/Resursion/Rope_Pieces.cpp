#include <iostream>
using namespace std;

int max_pieces_of_rope(int n, int a, int b, int c) {
    // Base case: if n is 0, no more cuts can be made.
    if (n == 0) {
        return 0;
    }

    // Base case: if n is negative, this is not a valid cut.
    if (n < 0) {
        return -1;
    }

    // Recursively try all possible combinations of cuts
    int pieces_using_a = max_pieces_of_rope(n - a, a, b, c);
    int pieces_using_b = max_pieces_of_rope(n - b, a, b, c);
    int pieces_using_c = max_pieces_of_rope(n - c, a, b, c);

    // Find the maximum pieces among all three options
    int max_pieces = max(pieces_using_a, max(pieces_using_b, pieces_using_c));

    // If max_pieces is negative, it means the cut is not possible, so we return -1.
    if (max_pieces < 0) {
        return -1;
    }

    // The number of pieces is 1 + the maximum of the three options
    return 1 + max_pieces;
}

int main() {
    int n = 9;
    int a = 3, b = 5, c = 4;
    cout << max_pieces_of_rope(n, a, b, c) << endl; // Output: 3
    return 0;
}
