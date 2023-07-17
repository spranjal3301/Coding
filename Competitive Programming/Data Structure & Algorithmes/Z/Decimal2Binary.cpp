#include<iostream>
using namespace std;

int main(){
    int num;
    cin>>num;
    int arr[16];
    int r,i;
    for ( i = 0; num>0; i++)
    {
    r=num%2;
    num=num/2;
    arr[i]=r;
        
    }
    for (int j = i-1; j>=0; j--)
    {
        cout<<arr[j];
    }
    
    // Bit= num&1;
    // num=num>>1;//right shit 1 bit  .we do the same thing in decimal number system by divide by 10

    
    return 0;
}