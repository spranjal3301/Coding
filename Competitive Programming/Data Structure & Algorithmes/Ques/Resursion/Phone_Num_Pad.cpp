#include<bits/stdc++.h>
using namespace std;
void solve(string digits,vector<string>& ans,string output,string keys[],int i){
    if (i>digits.size()-1)
    {
        ans.push_back(output);
        return;
    }

    int d=digits[i]-'0';
    string map=keys[d];
    for (size_t j = 0; j < map.size(); j++)
    {
        output.push_back(map[j]);
        solve(digits,ans,output,keys,i+1);
        output.pop_back();
    }
    


    
}
 vector<string> letterCombinations(string digits) {
        string keys[10]={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        vector<string> ans;
        if (digits.size()==0)
        {
            return ans;
        }
        
        string output;
        int i=0;
        solve(digits,ans,output,keys,i);
        return ans;

    }
int main(){
    
    return 0;
}