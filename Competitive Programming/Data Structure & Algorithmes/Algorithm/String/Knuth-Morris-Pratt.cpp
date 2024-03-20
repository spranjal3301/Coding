#include<bits/stdc++.h>
using namespace std;
//? https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/

vector<int> computeLPS(const string& pattern) {
    int n = pattern.size();
    vector<int> lps(n, 0);
    int len = 0; // Length of the previous longest prefix suffix

    for (int i = 1; i < n; ) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

int strStr(const string& haystack, const string& needle) {
    int m = haystack.size();
    int n = needle.size();

    if (n == 0) {
        return 0; // Empty needle matches at the beginning
    }

    vector<int> lps = computeLPS(needle);
    int i = 0; // Index for haystack
    int j = 0; // Index for needle

    while (i < m) {
        if (needle[j] == haystack[i]) {
            i++;
            j++;

            if (j == n) {
                return i - j;
            }
        } else {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // Needle not found
}

int main(){
    
    return 0;
}