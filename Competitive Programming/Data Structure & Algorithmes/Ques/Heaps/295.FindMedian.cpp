#include <bits/stdc++.h>
using namespace std;
class MedianFinder
{
    priority_queue<int, vector<int>, greater<int>> mipq;
    priority_queue<int> mxpq;
    double median;
    //! maxHeap a | Median | min Heap b
public:
    MedianFinder() { median = INT_MIN; }

    void addNum(int num)
    {
        switch (signum(mxpq.size(), mipq.size()))
        {

            case 0:
                if (num > median)
                {
                    mipq.push(num);
                    median = mipq.top();
                }
                else
                {
                    mxpq.push(num);
                    median = mxpq.top();
                }
                break;

            case 1:
                if (num > median)
                {
                    mipq.push(num);
                    median = (mxpq.top() + mipq.top()) / 2.0;
                }
                else
                {
                    mipq.push(mxpq.top());
                    mxpq.pop();
                    mxpq.push(num);
                    median = (mxpq.top() + mipq.top()) / 2.0;
                }
                break;


            case -1:
                if (num > median)
                {
                    mxpq.push(mipq.top());
                    mipq.pop();
                    mipq.push(num);
                    median = (mxpq.top() + mipq.top()) / 2.0;
                }
                else
                {
                    mxpq.push(num);
                    median = (mxpq.top() + mipq.top()) / 2.0;
                }
                break;
            }
    }

    double findMedian()
    {
        return median;
    }
    int signum(int a, int b)
    {
        if (a == b)
            return 0;
        else if (a > b)
            return 1;
        return -1;
    }
};
int main()
{

    return 0;
}