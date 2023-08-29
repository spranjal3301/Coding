//* nCr = n! / r! * (n - r)!

//         0C0
//       1C0 1C1
//      2C0 2C1 2C2
//     3C0 3C1 3C2 3C3
//    4C0 4C1 4C2 4C3 4C4
//   5C0 5C1 5C2 5C3 5C4 5C5
//  6C0 6C1 6C2 6C3 6C4 6C5 6C6
// 7C0 7C1 7C2 7C3 7C4 7C5 7C6 7C7

//         1 
//        1 1 
//       1 2 1 
//      1 3 3 1 
//     1 4 6 4 1 
//    1 5 10 10 5 1 
//   1 6 15 20 15 6 1 
//  1 7 21 35 35 21 7 1 

#include<iostream>
using namespace std;

int factorial(int x){
    int fact=1;
   for (int i = 1; i <=x; i++)
   {fact=fact*i;}
   return fact;
}
int combination(int n,int r){
   int ncr=factorial(n)/(factorial(r)*factorial(n-r));
    return ncr;
}

int main(){
      int n;
    cin>>n;
    for (int i = 0; i <=n; i++)
    {

         for (int j=n-i  ; j>=1; j--)
        {
            cout<<" ";
         
         }
        for (int j=0  ; j<=i; j++)
        {
            int icj=combination(i,j);
          cout<<icj<<" "; 
          // cout<<i<<"C"<<j<<" ";
        
        }
         cout<<endl;
    }
    return 0;
}