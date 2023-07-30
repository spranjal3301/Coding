#include<bits/stdc++.h>
using namespace std;

int main(){
    int row=3;
    int col=4;
   // int *arr=new int[n]; //1D array

    int **arr=new int* [row];//!2D array creation
    for (int i = 0; i < row; i++)
    {
        arr[i]=new int[col];
    }


  
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cin>>arr[i][j];
        }
        
        
    }
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
        
    }
//!Releasing memory
for (int i = 0; i < row; i++)
{
    delete[] arr[i];
    
}
delete[] arr;

    
    
    return 0;
}