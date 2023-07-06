//! Inheritance
#include<iostream>
using namespace std;


//! Base1 Class
class Base1
{
private:
    int data1; // private by default and is not inheritable
protected: 
    // Same as private but Inheritable and can't change in public by visibility mode 
    int data4; 
public:
    int data2;
    void setData1()
    {
    data1 = 10;
    data2 = 20;
    data4 = 40;
    }
    int getData1()
    {
    return data1;
    }
    int getData2()
    {
    return data2;
    }
};


//! Base2 Class
class Base2
{
private:
    int data21;
protected:
    int data22;
public:
    void setData2()
    {
    data21 = 21;
    data22 = 22;

    }
    int getData1()
    {
    return data21;
    }
};


//* Derived1 Class 
class Derived1 : public Base1
// class Derived1 :Base1 //Private visibility mode
{ 
protected:
    int data3;

public:
    Derived1(){}//we need default Constructor for 
    Derived1(int x){
        data2=x;
    }
    void process()
    {
    data3 = data2 * getData1();
    }
    void display()
    {
    cout << "Value of data 1 is " << getData1() << endl;
    cout << "Value of data 2 is " << data2 << endl;
    cout << "Value of data 3 is " << data3 << endl;
    }
};


//! Multi-Level Inheritance
// Base1-->Derived1-->Derived11
class Derived11 : public Derived1
{
public:
        int process11(){
            return data3*data4;
        }

};

//! Multiple Inheritance
// Base1 + Base2-->Derived2
//* Derived2 Class 
class Derived2:public Base1,public Base2
{
public:
    void showprotected(){
        cout<<"data4: "<<data4<<endl;
        cout<<"data22: "<<data22<<endl;
    }
    //?Ambiguity Resolution:
    // Base1 & Base2 having same function(int getData1()) we have to defind which funtion we want to Inherit.
    // If Base class and Derived class have same function then Derived class overwrite the base class function. 
    int getData1(){
        Base2 :: getData1();
    } 
};




int main(){

    Derived1 d1(30);
    cout<<"data2:"<<d1.data2<<endl;
    d1.setData1();
    d1.process();
    d1.display();

    Derived11 d11;
    d11.setData1();
    d11.process();
    cout<<d11.process11()<<endl;

    Derived2 d2;
    d2.setData1();
    d2.setData2();
    cout<<d2.getData1()<<endl;
    d2.showprotected();
    

    
    return 0;
}

//? What is Inheritance in C++?
    // DRY principle--->Don't Repeat Yourself for programmers
    // The concept of reusability in C++ is supported using inheritance
    // We can reuse the properties of an existing class by inheriting it
    // The existing class is called a base class
    // The new class which is inherited from the base class is called a derived class

//?Forms of Inheritance in C++
    // Single Inheritance:       a derived class is inherited with only one base class.
    // Multiple Inheritance:     one derived class is inherited with more than one base class.
    // Hierarchical Inheritance: several derived classes are inherited from a single base class.
    // Multilevel Inheritance:   one derived class is inherited from another derived class.
    // Hybrid Inheritance:       combination of multiple inheritance and multilevel inheritance. 

// {{double curly brace mean we will replace things inside curly brace or this is temporary}}

/*
Derived Class syntax
class {{derived-class-name}} : {{visibility-mode}} {{base-class-name}}
{
    class members/methods/etc...
    Note:
        Default visibility mode is private
        Public Visibility Mode: Public members  of the base class becomes Public members of the derived class
        Private Visibility Mode: Public & Protected members of the base class become private members of the derived class
        Protected Visibility Mode:Public & Protected members of the base class become Protected members of the derived class
        Private members are never inherited
}


	                       Public Derivation      	Private Derivation    	Protected Derivation
Private members           	Not Inherited              	Not Inherited              	Not Inherited              
Protected members           Protected                    	Private                 Protected                    
Public members           	Public	                        Private                 Protected                    
*/