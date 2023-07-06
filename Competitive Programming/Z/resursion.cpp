//*Recursion
//*fn(){
//*    base condition
//*    code
//*    recursive call
//*    
//*    return
//*}
#include<iostream>
using namespace std;

int decrease(int n){
    if(n==0){
        return 0;
    }
    cout<<n<<endl;
    return decrease(n-1);
}

int main(){
    decrease(10);
    return 0;
}

// !Reverse recursion
//! fn(){
// !    base condition
//  !   code
//   !  recursive call
// !    code
//!     return
//! }
#include<iostream>
using namespace std;

int increase(int n){
    if(n==0){
        return 0;
    }
    increase(n-1);
    cout<<n<<endl;
    return 0;
}

int main(){
    increase(10);
    return 0;
}

// ? factorial=factorial(n)*factorical(n-1)
// ? sum=sum(n)+sum(n-1)