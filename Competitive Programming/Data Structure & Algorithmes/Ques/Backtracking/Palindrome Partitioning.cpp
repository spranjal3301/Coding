#include<bits/stdc++.h>
using namespace std;
class Solution {
    bool isPalindrome(const string& s, int start, int end) {
        while (start < end) {
            if (s[start] != s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    void partitionPalindrome(vector<vector<string>>& result, vector<string>& current, const string& s, int start) {
        if (start == s.size()) {
            result.push_back(current);
            return;
        }
        
        for (int end = start; end < s.size(); end++) {
            if (isPalindrome(s, start, end)) {
                current.push_back(s.substr(start, end - start + 1));
                partitionPalindrome(result, current, s, end + 1);
                current.pop_back();
            }
        }
    }

public:
    vector<vector<string>> partition(string s) {
        int n = s.size();
        vector<vector<string>> result;
        vector<string> current;
        partitionPalindrome(result, current, s, 0);
        return result;
    }
};

int main(){
    
    return 0;
}