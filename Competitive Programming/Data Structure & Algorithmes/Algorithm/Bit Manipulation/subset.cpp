#include <bits/stdc++.h>
using namespace std;

//! Bit Manupulation
vector<vector<int>> Subsets(vector<int> &nums)
{
    int n = nums.size();
    vector<vector<int>> ans;
    for (int i = 0; i < (1 << n); i++) // 2^n== 1<<n
    {                                  //* nums={1,2,3};
        //* i=0->000->{}
        //* i=1->001->{1}
        //* i=2->010->{2}
        //* i=3->011->{1,2}
        //* i=4-100->{3}
        //* i=5->101->{1,3}
        //* i=6->110->{2,3}
        //* i=7->111->{1,2,3}
        vector<int> output;
        for (int j = 0; j < n; j++)
        {
            if ((1 << j) & i)//- Check if jth bit is set in i
            { 
                //* 1 left shifted by j times
                //* 001 & 111(i=5) j=0
                //* 010 & 111(i=5) j=1
                //* 100 & 111(i=5) j=2
                output.push_back(nums[j]);
            }
        }
        ans.push_back(output);
    }

    return ans;
}