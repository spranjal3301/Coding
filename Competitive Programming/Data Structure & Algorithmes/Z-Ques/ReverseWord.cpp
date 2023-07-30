#include<bits/stdc++.h>
using namespace std;
    string reverseWords(string s) {
        string rs;
        int count=0;
        for (int i =s.size()-1; i>=0; i--)
        {
            if(isalnum(s[i])){
                count++;
            }
         
            if (!isalnum(s[i]) and count!=0)
            {
                rs.append(s.substr(i+1,count));
                rs.append(" ");
                count=0;
            }
            
            if(isalnum(s[i]) and i==0){
               rs.append(s.substr(i,count));
                count=0;
            }
            
        }
        if (!isalnum(rs[rs.size()-1]))
        {
            rs.pop_back();
        }
        
        
        
        return rs;

        
    }
int main(){
    cout<<reverseWords("  hello world  ");
    // string str="the sky is blue";
    // string str1;
    // // str1.append(&str[0],&str[3]);
    // // str.substr(0,3);
    // str1.append(str.substr(,4));
    // cout<<str1;
    return 0;
}