#include <bits/stdc++.h>
using namespace std;
bool Binary_Search(const vector<int>& arr, int key, int end, int start) {
    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == key) {
            return true;
        }
        if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
            ++start;
            --end;
        } else if (arr[mid] > key || (arr[mid] == key && arr[start] <= key)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

int find_pivot(const vector<int>& nums) {
    int start = 0;
    int end = nums.size() - 1;
    while (start < end) {
        int mid = start + (end - start) / 2;
        if (nums[start] < nums[mid]) {
            start = mid;
        } else if (nums[start] > nums[mid]) {
            end = mid;
        } else {
            ++start;
        }
    }
    return start;
}

bool search(const vector<int>& nums, int target) {
    int pivot_index = find_pivot(nums);
    if (nums[pivot_index] == target) {
        return true;
    }
    return Binary_Search(nums, target, nums.size() - 1, pivot_index) ||
           Binary_Search(nums, target, pivot_index - 1, 0);
}

int main()
{
    vector<int> a = {1,0,1,1,1};
  cout <<find_pivot(a);

   
    return 0;
}