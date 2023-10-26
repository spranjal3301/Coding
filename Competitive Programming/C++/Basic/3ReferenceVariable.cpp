#include<iostream>
using namespace std;

int main(){
    //! Reference_Variable:
    // creating two name of one variable .By changing one another also change 
    //* By reference, we avoid creating a copy of each element 
    // you can't perform opretion on reference variable
    int x=27;
    int &y=x;
    y++;
    cout<<x;
    x++;
    cout<<y<<endl;


    int arr[]={1,2,3,4,5,6,7};
    // for (const auto &i:arr) you can't change array in side you 
    for (auto &i:arr)
    {//By use reference variable you are not creating the copy of arr element instead of you are using reference.
    //if any change in i also change arr
        cout<<i<<endl;
    }
    

    return 0;
}