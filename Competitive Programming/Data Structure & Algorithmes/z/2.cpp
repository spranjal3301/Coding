#include <iostream>

int main() {
    int t;
    std::cin >> t;

    for (int testCase = 0; testCase < t; ++testCase) {
        int g, b;
        std::cin >> g >> b;

        if (b == 0) {
            // Case when b is 0, just print the numbers from 1 to g.
            for (int k = 1; k <= g; ++k) {
                std::cout << k << " ";
            }
            std::cout << '\n';
            continue;
        }

        if (g - b <= 1) {
            // Case when g - b is less than or equal to 1.
            std::cout << "-1\n";
            continue;
        }

        // Calculate the starting point for the sequence.
        int start = b + 1;

        // Print the sequence.
        std::cout << start << " ";
        for (int j = 1; j < g; ++j) {
            std::cout << start + j << " ";
        }

        std::cout << '\n';
    }

    return 0;
}
