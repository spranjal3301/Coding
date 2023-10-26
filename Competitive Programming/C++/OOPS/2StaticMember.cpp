//* Array of Objects & Passing Objects as Function Arguments
#include<iostream>
using namespace std;

class complex{
    int a;
    int b;

    public: 
        void setData(int v1, int v2){
            a = v1;
            b = v2;
        }

        void setDataBySum(complex o1, complex o2){ //Passing Objects as Function Arguments
            a = o1.a + o2.a;
            b = o1.b + o2.b;
        }


        void printNumber(){
            cout<<"Your complex number is "<<a<<" + "<<b<<"i"<<endl;
        }
};
class shop{
public:
static int count; //static variable
static void diplaycount(){ //static function
    count++;
    cout<<count<<endl;
}
int salary=count;
};

int shop::count=0;


int main(){
    complex c1, c2, c3;
    c1.setData(1, 2);
    c1.printNumber();

    c2.setData(3, 4);
    c2.printNumber();

    c3.setDataBySum(c1, c2); //object as fuction
    c3.printNumber();

    shop worker[100];
    shop::diplaycount();//access static fn as class name
    worker[0].diplaycount();
    worker[0].salary;
    return 0;
}
