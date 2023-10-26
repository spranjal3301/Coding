#include<bits/stdc++.h>
using namespace std;
//! Time Complexity: O(2^n) - In the worst case, we have 2^n combinations of parentheses.
// !Auxiliary Space: O(n) - The auxiliary space complexity is determined by the depth of the recursion, which is O(n) in this case.
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;  // Use a string to track the current combination
        generateParenthesisHelper(result, current, n, n);
        return result;
    }

private:
    void generateParenthesisHelper(vector<string>& result, string& current, int openCount, int closeCount) {
        if (openCount == 0 && closeCount == 0) {
            result.push_back(current);
            return;
        }

        if (openCount > 0) {
            current.push_back('(');
            generateParenthesisHelper(result, current, openCount - 1, closeCount);
            current.pop_back();
        }

        if (closeCount > openCount) {
            current.push_back(')');
            generateParenthesisHelper(result, current, openCount, closeCount - 1);
            current.pop_back();
        }
    }
};

int main(){
    
    return 0;
}