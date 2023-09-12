#include <bits/stdc++.h>
using namespace std;
string addStrings(string num1, string num2)
{
    string add = "";
    int n = num1.size() - 1;
    int m = num2.size() - 1;
    int carry = 0;
    while (n >= 0 or m >= 0 or carry)
    {
        long long sum = 0;
        if (n >= 0)
        {
            sum += num1[n] - '0';
            n--;
        }

        if (m >= 0)
        {
            sum += num2[m] - '0';
            m--;
        }
        sum += carry;
        carry = sum / 10;

        add += to_string(sum % 10);
    }
    reverse(add.begin(), add.end());
    return add;
}
string multiply(string num1, string num2)
{
    string ans = "0";
    if (num2.size() > num1.size())
    {
        string temp = num2;
        num2 = num1;
        num1 = temp;
    }
    int zero = 0;
    for (int i = num2.size() - 1; i >= 0; i--)
    {
        int carry = 0;
        string mul = "";
        for (int j =num1.size()-1; j >=0; j--)
        {

            int pro = (num1[j] - '0') * (num2[i] - '0') + carry;
            carry = pro / 10;
            pro = pro % 10;
            mul += to_string(pro);
        }
        reverse(mul.begin(), mul.end());
        for (int k = 0; k < zero; k++)
        {
            mul.push_back('0');
        }
        zero++;
        ans = addStrings(mul, ans);
    }
    return ans;
}
int main()
{
    string s = multiply("123", "456");
    cout << s;
    return 0;
}