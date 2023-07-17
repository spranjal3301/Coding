#include<bits/stdc++.h>
using namespace std;
// If  x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
int myFunction(int x) {
    int result ;
    
    // Check if the result is outside the signed 32-bit integer range
        if (result < INT32_MIN/10 || result > INT32_MAX/10) {
        return 0; // Return 0 if outside the range
        }
    
    // Continue with the rest of the function if within the range
    
    // ...
    
    return result;
}


int main(){
    
    return 0;
}