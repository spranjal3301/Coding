//! Operator Overloading:
    // Operator overloading in C++ allows you to redefine the behavior of certain operators when they are used with objects of a class. 
    // This means you can make operators work with user-defined types in a way that is appropriate for those types
    // there are certain operators that cannot be overloaded.:
                                    // Scope Resolution Operator (::)
                                    // Sizeof Operator (sizeof)
                                    //Class Member access S Operator (.) ,(->),(*)
                                    // Conditional Operator (? :)
                                    // Function Call Operator ()
                                    // Assignment Operator (=): The assignment operator can be overloaded, but it has some restrictions and considerations. 
                                    // It should always be overloaded as a member function, and it should return a reference to the object being assigned to.
                                            // MyClass& operator=(const MyClass& other) {
                                                                    //     if (this != &other) {
                                                                    //         value = other.value;
                                                                    //     }
                                                                    //     return *this;
                                                                    // }
                                                        
#include<iostream>                                                        
using namespace std;

class base
{
private:
    int a;
    int b;
public:
    base():a(1),b(2){}
    void getData(){
        cout<<a<<" "<<b<<endl;
    }
//* + operator over loading
// operator which can be overloaed +,-,*,/,++,--,!=,==,&,[],<,>etc 
// obj= o1+o2
// we are calling a function with reference of o1 object;
// return_type operator@(parameters){
        // @ ->operator we want to overload
//      overloaed operator work defind 
// }
    base operator+(base o2){
        base obj;
        obj.a=a+o2.a;
        obj.b=b+o2.b;
        return obj;
    }
    void operator++(){
        a++;
        b++;
    }
    void operator=(base obj){
        a=obj.a;
        b=obj.b;
    }
    friend ostream& operator<<(ostream& os, base& obj) {
        os << obj.a<<obj.b;
        return os;
    }

    
};
int main(){

base o1,o2,o3;
o3=o1+o2;
o3.getData();

++o3;
// o3++ we can use postfix operator  but we have to defind (o3=o3+1):
//    void operator++(int){  //it automatic take 1.
//         a++;
//         b++;
//     }
o3.getData();

base o4;
o4=o3;
o4.getData();
cout<<o4;






    
    return 0;
}