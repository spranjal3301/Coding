#include <bits/stdc++.h>
using namespace std;
string removeDuplicates(string s)
{

   
    string rds;
    rds.push_back(s[0]);
    for (int i = 1; i < s.size(); i++)
    {
       
            if (rds.back() == s[i])
            {
                rds.pop_back();
            }
            else
            {
                rds.push_back(s[i]);
            }
     
    }
    return rds;
}

int main()
{

    cout << removeDuplicates("aaaab");

    return 0;
}