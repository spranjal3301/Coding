#include <bits/stdc++.h>
using namespace std;
int longestValidParentheses(string s)
{
    if (s.size() == 0)
    return 0;
    stack<int> st;
    st.push(-1);
    int count = 0;
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '(')
        {
            st.push(i);
        }
        else
        {
            if (st.size() == 1)
            {
                st.top() = i;
            }
            else
            {
                st.pop();
                count = max(count, i - st.top());
            }
        }
    }

    return count;
}

int main()
{

    return 0;
}