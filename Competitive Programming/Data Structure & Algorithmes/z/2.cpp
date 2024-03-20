#include<bits/stdc++.h>
using namespace std;
int minimumDeletions(std::string word, int k) {
    std::unordered_map<char, int> freq;
    for (char c : word) {
        freq[c]++;
    }
    
    std::vector<int> frequencies;
    for (auto& pair : freq) {
        frequencies.push_back(pair.second);
    }
    
    std::sort(frequencies.begin(), frequencies.end(), std::greater<int>());
    
    int min_deletions = std::numeric_limits<int>::max();
    
    for (size_t i = 0; i < frequencies.size(); ++i) {
        int target = frequencies[i];
        int deletions = 0;
        
        for (int f : frequencies) {
            if (f > target + k) {
                deletions += f - (target + k);
            } else if (f < target) {
                deletions += f;
            }
        }
        
        min_deletions = std::min(min_deletions, deletions);
        if (min_deletions == 0) {
            break;
        }
    }
    return min_deletions == std::numeric_limits<int>::max() ? 0 : min_deletions;
}


