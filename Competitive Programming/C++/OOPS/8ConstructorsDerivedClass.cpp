//! Constructors in Derived Class
/* If the base class constructor does not have any arguments(Default constructor), 
 then if we make an object of Derived class it automatic call  Base class Constructor.*/
/*//* But if there are one or more arguments in the base class constructor, derived class need to pass argument to the base class constructor
//? Derived-Constructor (arg1, arg2, arg3….): Base 1-Constructor (arg1,arg2), Base 2-Constructor(arg3,arg4)
{
….
//? } Base 1-Constructor (arg1,arg2)
*/
// If both base and derived classes have constructors, base class constructor is executed first
/*In multiple inheritances, base classes are constructed in the order in which they appear in the class deceleration.
In multilevel inheritance, the constructors are executed in the order of inheritance. A-->B-->C A>B>C*/
/*
The constructors for virtual base classes are invoked before a non-virtual base class
If there are multiple virtual base classes, they are invoked in the order declared 
//*Order of constructor call: virtual base class > non-virtual base class > derived class 


*/
#include<iostream>
using namespace std;

//* Base Class
class Base1
{
protected: 
    int data1; 
public:
    
    Base1(int a)
    {
        data1 = a;
    }
};
class Base2
{
protected: 
    int data2; 
public:
    
    Base2(int b)
    {
        data2 = b;
    }
};

//* Derived1 Class
// Base1 + Base2 --> Derived
class Derived:public Base1,public Base2
{   
    int data3,data4;
public:
    Derived(int a,int b,int c,int d):Base1(a),Base2(b){  //*if there are one or more arguments in the base class constructor.
        // C++ supports a special syntax for passing arguments to multiple base classes
        // The constructor of the derived class receives all the arguments at once and then will pass the call to the respective base classes
        data3=c;
        data4=d;
    }

};
//! Initialization list in Constructors
/*
Syntax for initialization list in constructor:
constructor (argument-list) : initilization-section
{
    other code;
}
*/

class Test
{
    int a;// declare first initializer first 
    int b;

public:
    Test(int i, int j) : a(i), b(j)
    // Test(int i, int j) : a(i), b(a + j)
    // Test(int i, int j) : b(j), a(i+b) incorrect declare first in up we cant use a in b we can use b in a.
    {
        cout << "Constructor executed"<<endl;
        cout << "Value of a is "<<a<<endl;
        cout << "Value of b is "<<b<<endl;
    }
};


int main(){
    Derived d1(1,2,3,4);
    
    return 0;
}