#include<bits/stdc++.h>
using namespace std;
// class Solution {
// public:
//     int reverse(int x) {
//        int copyx=x,nd=0,d;
//         while(copyx!=0){
//            copyx=copyx/10; 
//            nd++;

//         }
//         int revx=0;
//         while(nd!=0){
//             d=x%10;
//             x=x/10;
//             nd--;
//             revx+=d*pow(10,nd);


//         }
//         if (revx < INT32_MIN || revx > INT32_MAX) {
//         return 0; // Return 0 if outside the range
//         }

//         return revx;

        
//     }
// };

    int reverse(int x) {
       int d;

        int revx=0;
        while(x!=0){
            d=x%10;
            x=x/10;
            revx=(revx*10)+d;

        }

        return revx;

        
    }

int main(){
    
    return 0;
}