#include<iostream>
using namespace std;
//! Virtual Base Class
//Base-->Derived1 + Derived2-->Derived12
/*This means that only one copy of the base class's data members and member functions is inherited by the derived classes.
 This prevents ambiguity that can occur when multiple copies of the same base class are inherited by a derived class.
*/

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

//* Derived1 Class
// Virtual Base Class Declaration
class Derived1:virtual public Base1
{

};

//* Derived2 Class
// Virtual Base Class Declaration
class Derived2:virtual public Base1
{

};


//* Derived12 Class
// Only one copy of data1 pass from Derived1 & Derived2
class Derived12: public Derived1, public Derived2 
{

};



int main(){
    
    return 0;
}
