#include<iostream>
#include<cmath>
#include<string>
using namespace std;

int main(){
    // string str;
    // cin>>str;
    // int num=stoi(str);
    // int temp=num,count=0;
    // for (int i = 0;temp>0 ; count++)
    // {
    //     temp=temp/10;
    // }
    // int d=0,r;
    // for (int i = 0; i < count; i++)
    // {   
    //     r=num%10;
    //     num=num/10;
    //     d=d+(pow(2,i)*r);
    // }
    // cout<<d;
    

    int num;
    cin>>num;
    int d=0;
    for (int i = 0; num>0; i++)
    {
        if (num&1)
        {
            d+=pow(2,i);
        }
        num=num/10;
        
    }
    cout<<d;
    
    return 0;
}