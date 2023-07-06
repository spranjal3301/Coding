#include <iostream>    //System heaader file
#include <iomanip>    //System heaader file
#include "headerfile.h"//User defind heaader file

using namespace std;  // std:: have same working like  
int n=27; //global variable


int main(){
    
    std::cout<<"HERE WE START C++";

    int first;
    cout<<"\n enter number"; // output
    cin>>first;             //  input
    cout<<"number is "<<first<<" cout cin"<<endl;  // endl=\n

    int n=72; //local variable
    cout<<"local variable"<<n<<endl; 
    cout<<"global variable\n"<<::n;

// reference variable (two or more name of same variable )
    int x=11;
    int &y=x; //naming x with y

    const float pi=3.14; // can't changed
    cout<<"\n10 space"<<setw(10)<<pi;
return 0;
}
