#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
        // Custom comparator function for sorting based on count of set bits
        auto bitCount = [](int num) {
            int count = 0;
            while (num) {
                count += num & 1;
                num >>= 1;
            }
            return count;
        };

        // Sort the input array based on bit count using the custom comparator
        sort(arr.begin(), arr.end(), [&](int a, int b) {
            int countA = bitCount(a);
            int countB = bitCount(b);

            // If the counts are equal, sort by the number itself
            if (countA == countB) {
                return a < b;
            }

            return countA < countB;
        });

        return arr;
    }
};
int main(){
    
    return 0;
}