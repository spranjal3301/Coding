//! Constructor
    //* Constructor is a special member function with the same name as of the class.
    //It is used to initialize the objects of its class
    //It is automatically invoked whenever an object is created
    //They cannot return values and do not have return types
    // A constructor should be declared in the public section of the class
    // It can have default arguments
    // We cannot refer to their address
#include<iostream>
using namespace std; 

class Complex
{
    int a, b;

public:
     Complex(){}//*Default/blank constructor need for declaring object without declaring Constructor type.
     Complex(int x ,int y); // Constructor declaration
     Complex(int x){ //Constructor Overloading (same as fn Overloading)
    //  Complex(int x=10){ //Constructor with default argument
        a=x;
        b=0;
     }
    void printNumber()
    {
        cout << "Your number is " << a << " + " << b << "i" << endl;
    }

//! Copy Constructor 
     //* When no copy constructor is found, compiler supplies its own copy constructor
    Complex(Complex &obj){
        cout<<"Copy constructor called!!!"<<endl;
        a = obj.a;
     }



};

//Complex ::Complex(void) // ----> This is a default constructor as it takes no parameters
Complex ::Complex(int x ,int y) //parameterized constructor
{
    a = x;
    b = y;
    
}

int main(){
  Complex o1,o2;//Need default constructor
  Complex o1(10,15); //Implicit call
  o1.printNumber();
                            
//   Complex o2 = Complex(5, 7); // Explicit call
//   o2.printNumber();

  Complex o3(5);
  o3.printNumber();

  Complex c1(o1);// Copy constructor invoked  (c1 is copy of o1)
//   Complex c1=o1;

  return 0;
}