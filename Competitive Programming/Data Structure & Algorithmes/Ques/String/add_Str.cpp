#include<bits/stdc++.h>
using namespace std;
 string addStrings(string num1, string num2) {
        string add="";
        int n=num1.size()-1;
        int m=num2.size()-1;
        int carry=0;
        while (n>=0 or m>=0 or carry)
        {
            long long sum=0;
           if (n>=0)
           {
                sum+=num1[n]-'0';
                n--;
           }

           if (m>=0)
           {
                sum+=num2[m]-'0';
                m--;
           }
           sum+=carry;
           carry=sum/10;

           add+=to_string(sum%10);
           
           
        }
        reverse(add.begin(),add.end());
        return add;
    }


int main(){
    string a="123";
    string b="11";
    // a[0]=a[0]-10+('5'-'0');
    // cout<<a;
    cout<<addStrings(a,b);


    return 0;
}