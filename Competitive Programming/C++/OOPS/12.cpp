//! Templates/Parameterized Classes:
// It provide template for different data types  in one class.BY making data types as variable.
// By define data types as parameters making it useful to reduce repetitions of the same declaration of classes for different data types

// Why templates?
// DRY Rule:
// Generic Programming:
#include<iostream>
using namespace std;

//* Class Template
template <class T1,class T2=int>// T1 & T2 as variable data types.T2 have Default Parameters 
class Vector{
    int n;
public:
    T1 *arr;
    Vector(int n){
        this->n=n;
        arr=new T1[n];

    }
    void Dot(Vector &v){
        T1 p=0;
        for (int i = 0; i < n; i++)
        {
            p+=this->arr[i]*v.arr[i];
        }
        
        cout<<p<<endl;
        
    }
};

//* Function Template 
template<class f1=int,class f2=int>
void Avg(f1 a ,f2 b){
    cout<<(a+b)/2.0<<endl;
}

int main(){

    Vector <int> v1(3);
    v1.arr[0]=1;
    v1.arr[1]=2;
    v1.arr[2]=3;
    
    Vector <int> v2(3);
    v2.arr[0]=1;
    v2.arr[1]=2;
    v2.arr[2]=3;
    v1.Dot(v2);

    Avg<float>(4.2,5);
    return 0;
}