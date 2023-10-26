#include<bits/stdc++.h>
using namespace std;
 vector<vector<int>> fourSum(vector<int>& arr, int k) {
    int n = arr.size();
    vector<vector<int>> ans;
    sort(arr.begin(), arr.end());

    for (int i = 0; i < n - 3; i++) {
        // Skip duplicates
        if (i > 0 && arr[i] == arr[i - 1])
            continue;

        // Early termination
        if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > k)
            break;

        for (int j = i + 1; j < n - 2; j++) {
            // Skip duplicates
            if (j > i + 1 && arr[j] == arr[j - 1])
                continue;

            // Early termination
            if (arr[i] + arr[j] + arr[j + 1] + arr[j + 2] > k)
                break;

            int s = j + 1, e = n - 1;
            while (e > s) {
                int sum = arr[i] + arr[j] + arr[s] + arr[e];
                if (sum == k) {
                    ans.push_back({arr[i], arr[j], arr[s], arr[e]});
                    // Skip duplicates
                    while (s < e && arr[s] == arr[s + 1]) s++;
                    while (s < e && arr[e] == arr[e - 1]) e--;
                    s++;
                    e--;
                } else if (sum > k) {
                    e--;
                } else {
                    s++;
                }
            }
        }
    }
    return ans;
}

int main(){
    
    return 0;
}