#include<bits/stdc++.h>
using namespace std;

int main(){
    cout<<(14>>1);
    return 0;
}
// 16 -> 10000
// 8 -> 01000
// 4 -> 00100
// 2 -> 00010
// 1 -> 00001

// 13 ->        01101
// 14 ->8 +4+2  01110
// 7  4+2+1     00111

// 1111


// 1's -1 + msb dist= len - msb_idx -1 +  (1's -1)/`2   3+3+1