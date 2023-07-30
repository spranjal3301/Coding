#include<bits/stdc++.h>
using namespace std;


int main(){
    int arr1[]={1,2,3},a=0;
    int arr2[]={9,9},b=0;
    for (int i = 0; i < 3; i++)
    {
        if (i<2)
        {
            b=(b*10)+arr2[i];
        }
        if (i<3)
        {
            a=(a*10)+arr1[i];
        }
        
    }
    std::cout << a+b << std::endl;
    
    return 0;
}