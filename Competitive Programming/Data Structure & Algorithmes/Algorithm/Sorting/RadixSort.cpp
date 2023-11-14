#include<bits/stdc++.h>
using namespace std;
//! Radix Sort 
//* Radix Sort is a linear sorting algorithm that sorts elements by processing them digit by digit.
//* It is an efficient sorting algorithm for integers or strings with fixed-size keys. 

//* Radix Sort distributes the elements into buckets based on each digit’s value.
//* By repeatedly sorting the elements by their significant digits, from the least significant to the most significant,
//* Radix Sort achieves the final sorted order.


//! Time complexity of O(d * (n + b)), where d is the number of digits, n is the number of elements,
//!  and b is the base of the number system being used.
//! Space complexity of O(n + b)
void CountSort(int arr[],int n,int exp){
    int count[10]={0}; //~max 10 digit(0-9 range)
    int output[n];

    for(int i=0;i<n;i++)
        count[(arr[i]/exp)%10]++; //~ (1234 exp=1 )%10==4
                                 //~ (1234 exp=10 )%10==3
    for (int i = 1; i <10; i++)
        count[i]=count[i]+count[i-1];
    
    for (int i = n-1; i>=0; i--)
    {
        output[count[(arr[i]/exp)%10]-1]=arr[i];
        count[(arr[i]/exp)%10]--;
    }
    for(int i=0;i<n;i++)arr[i]=output[i];
}

void RadixSort(int arr[],int n){
    int maxi=*max_element(arr,arr+n);

    //~ Do counting sort for every digit in max_element
    for (int exp = 1; (maxi/exp)>0; exp*=10)//~ 10^exp
    {
        CountSort(arr,n,exp);
    }
    
}
int main(){
    
    return 0;
}