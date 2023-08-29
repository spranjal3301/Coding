#include <bits/stdc++.h>
using namespace std;
bool checkInclusion(string s1, string s2)
{
    vector<int> occ1(26, 0);
    vector<int> occ2(26, 0);
    for (int i = 0; i < s1.size(); i++)
    {
        int c = s1[i] - 'a';
        occ1[c]++;
    }

    int wd = s1.size(), i;
    
    //!This is for set the window
    for (i = 0; i < wd; i++)
    {
        int c = s2[i] - 'a';
        occ2[c]++;
    }
    if (occ1 == occ2) return true;
    while (i<s2.size())
    {   //add new window char 
        int c = s2[i] - 'a';
        occ2[c]++;
        //remove old window char
        int oc=s2[i-wd] -'a';
        occ2[oc]--;
    if (occ1 == occ2) return true;

    }
    

    return false;
}

bool checkInclusion(string s1, string s2) {
    int len1 = s1.size();
    int len2 = s2.size();
    
    if (len1 > len2) return false;

    vector<int> occ1(26, 0);
    vector<int> occ2(26, 0);
    
    // Count the character occurrences of s1
    for (int i = 0; i < len1; i++) {
        occ1[s1[i] - 'a']++;
        occ2[s2[i] - 'a']++;
    }
    
    if (occ1 == occ2) return true;
    
    // Slide the window and update the character occurrences for each position
    for (int i = len1; i < len2; i++) {
        occ2[s2[i] - 'a']++;
        occ2[s2[i - len1] - 'a']--;
        if (occ1 == occ2) return true;
    }
    
    return false;
}

int main()
{

  return 0;
}
