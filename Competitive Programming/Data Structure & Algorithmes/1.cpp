#include<bits/stdc++.h>
using namespace std;

struct CustomCompare {
    bool operator()(const std::pair<int, int>& a, const std::pair<int, int>& b) const {
        if (a.first == b.first) {
            return a.second < b.second; // If first elements are equal, compare second elements in decreasing order
        }
        return a.first > b.first; // Otherwise, compare first elements in increasing order
    }
};

string clearStars(string s) {
    int n = s.size();
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, CustomCompare> pq;

    for (int i = 0; i < n; i++) {
        if (s[i] == '*') {
            if (!pq.empty()) {
                s[pq.top().second] = '*';
                pq.pop();
            }
        } else {
            pq.push({s[i] - 'a', i});
        }
    }

    string k;
    for (int i = 0; i < n; i++) {
        if (s[i] != '*') {
            k += s[i];
        }
    }

    return k;
}