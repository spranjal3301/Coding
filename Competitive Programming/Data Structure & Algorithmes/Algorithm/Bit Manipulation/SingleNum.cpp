#include<bits/stdc++.h>
using namespace std;


//! Single Number
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans=0;
        for(auto num:nums){
            ans^=num;
        }
        return ans;
    }
};



//! Single Number II
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int one=0;
        int two=0;

        for(auto num:nums){
            one=(one^num)& ~two;
            two=(two^num)& ~one;
        }

        return one;
    }
};


//! Single Number III
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        int x=0;

        for(auto num:nums){
            x^=num;
        }
         unsigned int lowestBit = x & -(unsigned int)x;
        int b1=0,b2=0;
        for(auto num:nums){
            if(num&lowestBit){
                b1^=num;
            }else{
                b2^=num;
            }
        }

        return {b1,b2};

    }
};