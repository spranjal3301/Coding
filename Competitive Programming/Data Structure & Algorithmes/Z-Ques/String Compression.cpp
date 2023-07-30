#include <bits/stdc++.h>
using namespace std;
int compress(vector<char> &chars)
{
    int ai = 0;
    char temp = chars[0];
    for (int i = 0; i < chars.size(); i)    
    {
        int j;
        while (j < chars.size() and chars[i] == chars[j])
        {
            j++;
        }
        
        chars[ai++] = chars[i];
        int count = j - 1;
        if (count > 1)
        {
            string c = to_string(count);
            for (auto &&k : c)
            {
                chars[ai++] = k;
            }
        }
    }
    return ai;
}

int main()
{

    return 0;
}