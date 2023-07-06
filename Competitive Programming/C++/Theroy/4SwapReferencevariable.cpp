#include<iostream>
using namespace std;

int SwapReferencevariable(int &a, int &b){
    int temp=a;
    a=b;
    b=temp;
    return 0;
}
int main(){
    int x=27;
    int y=72;
    cout<<"x is"<<x<<"\ny is"<<y;
    SwapReferencevariable(x,y);
    cout<<"\nx is"<<x<<"\ny is"<<y;

    return 0;
}
// #include<iostream>
// using namespace std;

// int &SwapReferencevariable(int &a, int &b){
//     int temp=a;
//     a=b;
//     b=temp;
//     return a;
// }
// int main(){
//     int x=27;
//     int y=72;
//     SwapReferencevariable(x,y)=100;
//     cout<<"x is"<<x<<"\n y is"<<y;

//     return 0;
// }