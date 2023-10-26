//! Polymorphism++
// “Poly” means several and “morphism” means form.
//  So we can say that polymorphism is something that has several forms or we can say it as one name and multiple forms. 
 
// There are two types of polymorphism:
//* Compile-time polymorphism
    //? Function Overloading
    //? Operator Overloading
//* Run time polymorphism
    //? Virtual Function
#include<iostream>
using namespace std;

//* Abstract Base Class(ABC)
// abstract base class (ABC) is a class that cannot be used directly.
//  It is used to define a common interface for derived classes
// Abstract base class is a class that has at least one pure virtual function in its body
class Base
{
protected: 
    int data1=27; 
public:
        // Virtual Functions
        virtual void getData(){
        // BY making base class fn virtual function we can use getData function of Derived by Pointing base class pointer to derived class.
            cout<<"Base Class "<<endl;
        }

    // !  Pure Virtual Functions -> Do Nothing Function
        virtual void Display()=0;
        // A pure virtual function is a virtual function that is required to be implemented by a derived class.
        // Pure virtual function is a function that doesn’t perform any operation and the function is declared by assigning the value 0 to it.
        // Pure virtual functions are declared in abstract classes .
        // class must need to override the virtual function of the abstract class otherwise compiler will throw an error.

};
class Derived:public Base
{
    int a;
    int data2=72;
public:
    Derived(int a){
        this->a=a;
        
    }
      Derived & setData(int a){
            this->a = a;
            return *this;
        }
    void getData(){
            cout<<"The value of data2 is "<<data2<<endl;
        }
        void Display(){
            cout<<"The value of data2 is "<<data2<<endl;
        }
  
};

int main(){
 //! Pointers to Derived Classes
    Base *Bptr;
    Derived d1(1),*Dptr;
    // run time binding or Late binding:
    // Late binding is a programming technique in which the type of an object is not known until runtime. 
    Bptr=&d1; // Pointing base class pointer to derived class.
    //Bptr->getData();// Only access base class member not derived class.
    // To access Derived class member function by Pointing base class pointer to derived class using  Virtual function.
   
    //! Virtual Functions
         Bptr->getData();
        //*virtual function is defined in a base class, having same name in derived class
      // Rules for virtual functions
        // They cannot be static
        // They are accessed by object pointers
        // Virtual functions can be a friend of another class
        // A virtual function in the base class might not be used.
        //*Maybe there will be no use of virtual function defind in base class.
    return 0;
}