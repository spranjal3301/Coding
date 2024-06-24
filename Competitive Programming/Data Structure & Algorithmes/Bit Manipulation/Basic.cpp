#include<bits/stdc++.h>
using namespace std;

int main(){
//! Bit Manipulation Cheat Sheet
    int x=10,y=0;
    //` Basic Operations
    //?  << : Left Shift
    //?  >> : Right Shift
    //?  & : Bitwise AND
    //?  | : Bitwise OR
    //?  ^ : Bitwise XOR
    //?  ~ : Bitwise NOT
    //? setBit : 1

//     Set union A | B
// Set intersection A & B
// Set subtraction A & ~B
// Set negation ALL_BITS ^ A or ~A
// Set bit A |= 1 << bit
// Clear bit A &= ~(1 << bit)
// Test bit (A & 1 << bit) != 0
// Extract last bit A&-A or A&~(A-1) or x^(x&(x-1))
// Remove last bit A&(A-1)
// Get all 1-bits ~0

    
    cout<<(x&(x-1))<<endl;

    //- Check if two integers have opposite signs
    if((x^y) <0) cout<<"Opposite Signs"<<endl;

    //- Add 1 to a given number
    x=(-(~x));

    //- Multiply a number by 2
    x<<1;

    //- Divide a number by 2
    x>>1;

    //- rightmost 1 becomes 0.
    x&(x-1);
    
   




    
    return 0;
}