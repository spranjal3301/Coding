#include<bits/stdc++.h>
using namespace std;
    bool isPalindrome(string s) {
        int start=0;
        int end=s.size()-1;
        
        while (start<end)
        {
            if (s[start]>=65 and s[start]<=90 )
            {
                s[start]+=32;
            }
            if (s[end]>=65 and s[end]<=90 )
            {
                s[end]+=32;
            }
            if ((s[start]>122 or s[start]<97) and (s[start]<48 or s[start]>57) )
            {
                start++;
                continue;
            }
            if ((s[end]>122 or s[end]<97) and (s[end]<48 or s[end]>57))
            {
                end--;
                continue;
            }
            std::cout << s[start]<<s[end] <<endl;
            if (s[start]!=s[end])
            {
                return false;
            }
            start++;
            end--;

            
            
            
        }
        
        return true;
    }

bool isPalindrome(string s) {
    int start = 0;
    int end = s.size() - 1;
    
    while (start < end) {
        if (!isalnum(s[start])) {
            start++;
            continue;
        }
        if (!isalnum(s[end])) {
            end--;
            continue;
        }
        
        if (tolower(s[start]) != tolower(s[end])) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
}
int main(){
    cout<< isPalindrome("0p");
    return 0;
}