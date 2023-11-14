#include <iostream>
#include <vector>
using namespace std;
//! Floyd's Tortoise and Hare (Cycle Detection) algorithm 
int findDuplicate(std::vector<int>& nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    // Phase 1: Find the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Phase 2: Find the entrance to the cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}

int main() {
    vector<int> nums1 = {1, 3, 4, 2, 2};
    cout << findDuplicate(nums1) << std::endl;  // Output: 2

    vector<int> nums2 = {3, 1, 3, 4, 2};
    cout << findDuplicate(nums2) << std::endl;  // Output: 3

    return 0;
}
