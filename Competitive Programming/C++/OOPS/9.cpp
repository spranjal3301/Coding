#include<iostream>
using namespace std;

class Complex{
    int real, imaginary;
    public:
        void getData(){
            cout<<"The real part is "<< real<<endl;
            cout<<"The imaginary part is "<< imaginary<<endl;
        }

        void setData(int a, int b){
            real = a;
            imaginary = b;
        }

};

class A
{
private:
    /* data */
    int a;
public:
    A(int a){
        this->a=a;
        //! this keyword is a pointer that refers to the current object instance within a member function or method of a class. 
        //It is used to access the members (variables and functions) of the current object. (its o1 now)
        // cout<<"a is"<<a;
        
    }
      A & setData(int a){
            this->a = a;
            return *this;
        }
    void getData(){
            cout<<"The value of a is "<<a<<endl;
        }
  
};



int main(){
    

    //! New keyword: (same ampersand(&))allocate memory on the heap. 
    // It takes a type as its argument and returns a pointer to a newly allocated object of that type.
    // int a=4;
    // int *ptr2=&a;
    int *ptr2=new int (4); //storage of a integer=4
    int  *arr=new int[3];//storage of 3 int allocated
    arr[0]=0;
    arr[1]=0;
    arr[2]=0;

    //! Delete keyword in C++ is used to deallocate memory that was allocated using the `new` keyword. 
    // It takes a pointer to the memory that is to be deallocated as its argument.
    delete ptr2;
    delete[] arr;
    

    Complex c1;
    Complex *ptr3 = &c1;
    Complex *ptr4 = new Complex; 
    // (*ptr3).setData(1, 54); 
    ptr4->setData(1, 54);
    ptr4->getData(); 

    // Array of pointer
    Complex *ptr7[4];
    
    // Array of Objects
    Complex c2[4];
    Complex *ptr6=&c2[4]; //=c2;


    Complex *ptr5 = new Complex[4]; 
    ptr4->setData(3, 4); 
    ptr4->getData();

   // this` keyword 
    A o1(10);
    o1.setData(10).getData();
    

   
   
   
   
   
   
   
   
   
   
   
    return 0;
}