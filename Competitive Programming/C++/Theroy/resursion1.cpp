#include<iostream>
using namespace std;

int increase(int n){
    static int sum=0;
    if(n==0){
        return 0;
    }
    sum=sum+n;
    increase(n-1);
    // cout<<n<<endl;
    return sum;
}

int main(){
    cout<<increase(10);
    return 0;
}

#include<iostream>
using namespace std;

int increase(int n){
    static int sum=0;
    if(n==0){
        return 0;
    }
   
   sum=n+increase(n-1);
    // cout<<n<<endl;
    return sum;
}

int main(){
    cout<<increase(10);
    return 0;
}
