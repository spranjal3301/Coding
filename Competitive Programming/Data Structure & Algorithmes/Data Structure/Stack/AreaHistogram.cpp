#include<bits/stdc++.h>
using namespace std;
vector<int> computeSmallerElement(const vector<int>& arr, int n, int start, int step) {
    vector<int> ans(n, 0);
    stack<int> s;
    s.push(-1);
    for (int i = start; i >= 0 && i < n; i += step) {
        while (s.top() != -1 && arr[s.top()] >= arr[i]) {
            s.pop();
        }
        ans[i] = s.top();
        s.push(i);
    }
    return ans;
}

int largestRectangleArea(vector<int>& heights) {
    int n = heights.size();
    int area = 0;
    
    vector<int> next = computeSmallerElement(heights, n, n - 1, -1);
    vector<int> prev = computeSmallerElement(heights, n, 0, 1);
    
    for (int i = 0; i < n; i++) {
        if(next[i]==-1)next[i]=n;
        int l = heights[i];
        int b = next[i] - prev[i] - 1;
        area = max(area, l * b);
    }
    
    return area;
}
int main(){
    
    return 0;
}