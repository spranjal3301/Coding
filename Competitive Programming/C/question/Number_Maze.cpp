//!number maze
// 1 1 1 1 1 1 1
// 1 2 2 2 2 2 1
// 1 2 3 3 3 2 1 
// 1 2 3 4 3 2 1
// 1 2 3 3 3 2 1
// 1 2 2 2 2 2 1
// 1 1 1 1 1 1 1
//!Reverse number maze
// 4 4 4 4 4 4 4  
// 4 3 3 3 3 3 4   
// 4 3 2 2 2 3 4   
// 4 3 2 1 2 3 4   
// 4 3 2 2 2 3 4   
// 4 3 3 3 3 3 4   
// 4 4 4 4 4 4 4  
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    for (int i = 1; i <= 2*n-1; i++)
    {
        for (int j = 1; j<=2*n-1; j++)
        {
        int a=i,b=j;
        if (i>n)
        {
           a=n*2-i;
        }
        if (j>n)
        {
           b=n*2-j;
        }
          int min=a;
          if (min>b)
          {min=b;}
          cout<<n+1-min<<" ";  //*Number Maze print (min)
                              //*Reverse Number Maze print (n+1-min)
        }
        

        cout<<endl;
    }
    
    return 0;
}

