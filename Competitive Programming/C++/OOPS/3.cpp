//! Friend function:
//This is not a member fuction but have full access of private member of class.
#include<iostream>
using namespace std;

class complex; //forward deceleration:
// we cannot use complex in sumreal fn argument of calculator without forward deceleration

class calculator
{
public:
    int add(int a,int b){
        return a+b;
    }
    // int sumreal(complex ob1,complex ob2);
    int sumreal(complex,complex);
//we cannot use object or fn definition before declare complex class objects.
};

class complex
{
private:
    int a;
    int b;
public:
   void setdata(int a1,int b1){
    a=a1;
    b=b1;
   }
   void printnum(){cout<<a<<"+"<<b<<"i"<<endl; }
//* friend fn deceleration
   friend complex sum (complex o1,complex o2); //friend of normal fn
   friend int calculator ::sumreal(complex o1,complex o2); //friend as method of different class
   friend class calculator; //friend as class

};

complex sum(complex o1,complex o2){ //fn that accept objects and return objects 
    complex o3;
    o3.setdata((o1.a+o2.a),(o1.b+o2.b));
    return o3;
}
// friend fn defination 
int calculator :: sumreal(complex o1,complex o2){
    return o1.a +o2.a;
}


int main(){
    complex c1,c2,sumc;
    calculator a1;
    c1.setdata(1,2);
    c2.setdata(3,4);
    sumc=sum(c1,c2);
    sumc.printnum();
    cout<<a1.sumreal(c1,c2);
    return 0;
}