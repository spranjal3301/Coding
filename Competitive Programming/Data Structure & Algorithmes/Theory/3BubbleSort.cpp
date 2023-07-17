#include<bits/stdc++.h>
using namespace std;
void BubbleSort(int arr[],int size){
    for (int i = 0; i < size-1; i++)
    {   
        bool alreadySorted=true;
        for (int j = 0; j < size-i-1; j++)
        {
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                alreadySorted=false;
            }
        }
        if (alreadySorted)
        {
            break;
        }
        
        
    }
    

}

int main(){
    int arr[]={4,3,7,4,1,3,8,2,8,4,5};
    int size=sizeof(arr)/sizeof(arr[0]);
    BubbleSort(arr,size);
    for (auto &&i : arr)
    {
        cout<<i<<" ";
        
    }
    

    return 0;
}