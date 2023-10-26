#include<iostream>
#include<string>
using namespace std;

class binary{
//Bydefault everythings in  class is private
	private: //private data only access by function of class
	 		string str;
			int pin;
			void display_pin();
	public:
		void read(){ //defining function inside class
			cout<<"enter the binary number ";
			cin>>str;
		}
		void fnpin(int p){pin=p;}
		void check_binary();
};

void binary::check_binary(){ //defining function outside class
	for (int i = 0;str[i]; i++)
	{
		if (str.at(i)!='0' && str.at(i)!='1')
		{
			cout<<"binary check unsuccessful";
			exit(0);
		}
	}
			cout<<"binary check successful"<<endl;
			display_pin(); //Nesting of Member Functions  (method inside method)
	}

void binary::display_pin(){
	cout<<"pin is "<<pin;
}



int main(){
	binary x; //object declaration
	x.read();
	//x.pin=27; cant access private data like this
	// x.display_pin();  cant access private fn like this
	x.fnpin(27);
	x.check_binary();

	
	return 0;
}

//!  OOPS - Classes and objects
//!C++ --> initially called --> C with classes by stroustroup
//! class --> extension of structures (in C)
//?structures had limitations
//?         -members are public
// ?       -No methods or function
//! classes --> structures + more
//! classes --> can have methods and properties
//! classses --> can make few members as private & few as public
//! structures in C++ are typedefed
//! you can declare objects along with the class declarion like this:
//! pranjal.salary = it makes no sense if salary is private 
//*Declaration of function in class 
// * class Employee {   (class)
//*    Class definition
//* } pranjal, rohan, ish;  (object)