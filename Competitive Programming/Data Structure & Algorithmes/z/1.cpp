#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    // Function to find the greatest proper divisor of a number
    int findGPD(int num) {
        if (num <= 1) return 1;
        
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return num / i;  // Return the largest proper divisor directly
            }
        }
        return 1;
    }
    
    // Function to find minimum value possible after operations
    int getMinPossible(int num,int prev) {
        while (num > 1) {
            int gpd = findGPD(num);
            if (gpd == 1) break;
            if((num/gpd) < prev) return num;
            num /= gpd;
        }
        return num;
    }
    
    int minOperations(vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) return 0;
        
        int operations = 0;
        
        for (int i = 1; i < n; i++) {
            if (nums[i] >= nums[i-1]) continue;
            
            // Get minimum possible value for nums[i-1]
            int minPrev = getMinPossible(nums[i-1],(i>1?nums[i-2]:0));
            
            // If even the minimum value of nums[i-1] is greater than nums[i]
            if (minPrev > nums[i]) {
               return -1;
            } else {
                // Reduce nums[i-1] until it's <= nums[i]
                int curr = nums[i-1];
                while (curr > nums[i]) {
                    curr /= findGPD(curr);
                    operations++;
                }
                nums[i-1] = curr;
            }
        }
        
        return operations;
    }
};



class Solution {
public:
    // Function to find the greatest proper divisor
    int findGPD(int num) {
        if (num <= 1) return 1;
        
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return num / i;
            }
        }
        return 1;
    }
    
    // Function to get maximum possible value after multiplications
    int getMaxPossible(int num, int target) {
        int result = num;
        while (result < target) {
            int gpd = findGPD(result);
            if (gpd == 1) break;
            result *= gpd;
        }
        return result;
    }
    
    // Function to get minimum possible value after divisions
    int getMinPossible(int num) {
        while (num > 1) {
            int gpd = findGPD(num);
            if (gpd == 1) break;
            num /= gpd;
        }
        return num;
    }
    
    int minOperations(vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) return 0;
        
        int operations = 0;
        vector<int> temp = nums;
        
        for (int i = 1; i < n; i++) {
            if (temp[i] < temp[i-1]) {
                // Try reducing temp[i-1]
                int minVal = getMinPossible(temp[i-1]);
                
                if (minVal <= temp[i]) {
                    // We can reduce temp[i-1]
                    int curr = temp[i-1];
                    int steps = 0;
                    while (curr > temp[i]) {
                        curr /= findGPD(curr);
                        steps++;
                    }
                    operations += steps;
                    temp[i-1] = curr;
                } else {
                    // Try increasing temp[i]
                    int maxVal = getMaxPossible(temp[i], temp[i-1]);
                    if (maxVal < temp[i-1]) {
                        return -1;  // Cannot make array non-decreasing
                    }
                    // Calculate steps needed to increase temp[i]
                    int curr = temp[i];
                    int steps = 0;
                    while (curr < temp[i-1]) {
                        curr *= findGPD(curr);
                        steps++;
                    }
                    operations += steps;
                    temp[i] = curr;
                }
            }
            
            // Check if next element can be made non-decreasing
            if (i < n-1 && temp[i] > temp[i+1]) {
                int minCurr = getMinPossible(temp[i]);
                int maxNext = getMaxPossible(temp[i+1], temp[i]);
                if (minCurr > maxNext) {
                    return -1;  // Cannot make array non-decreasing
                }
            }
        }
        
        return operations;
    }
};



