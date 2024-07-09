#include<bits/stdc++.h>
#include <bit>
using namespace std;

//! Builtin functions
int main(){
    int noSetbit=__builtin_popcount(10); //?count the number of one’s(set bits) in an integer
    // __builtin_popcountl(x) & __builtin_popcountll(x) for long and long long data types.

    bool isOddParity=__builtin_parity(10); //?check if the number of set bits is odd or even

    int leadingZeroes=__builtin_clz(10); //?count the number of leading zeroes in an integer (32 bit)

    int trailingZeroes=__builtin_ctz(10); //?count the number of trailing zeroes(from last to first occurrence of one(set bit)) (32 bit)

    int leadingOnes=__builtin_ffs(10); //?count the number of leading ones in an integer (32 bit)


    //- To use these functions, ensure that your compiler supports C++20, and include the <bit> header. 
    int x=10;
    //popcount(x);  // Count the number of set bits
    //countr_zero(x);  // Count trailing zero bits
    //countl_zero(x);  // Count leading zero bits
    //rotl(x, s);  // Rotate left
    //rotr(x, s);  // Rotate right
    //bit_cast<To>(from);  // Reinterpret object representation



    return 0;
}