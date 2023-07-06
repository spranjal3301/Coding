#include<iostream>
using namespace std;

int main(){
/*//!Range Based for loop:
     for (range-declaration : range-expression) {
        
        }
*/
    int arr[]={1,2,3,4,5,6,7};
    for (auto &i:arr)
    {
        cout<<i<<endl;
    }
    return 0;
}