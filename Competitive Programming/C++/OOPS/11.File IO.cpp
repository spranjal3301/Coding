//! File I/O
#include<iostream>
#include<string>
#include<fstream>
#include <sstream>

// These are some useful classes in "fstream" library for working with files in C++
//*  1. fstreambase
//*  2. ifstream --> derived from fstreambase
//*  3. ofstream --> derived from fstreambase

//Primarily, there are 2 ways to open a file:
// Using the constructor
// Using the member function open() of the class
using namespace std;

int main(){
    string str1="I writing this using ofstream class form FileI/O in C++";
    
    // ofstream write;
    // write.open("input.txt");// Opening files using member fuction
    ofstream out("input.txt");// Opening files using constructor and writing it
    out<<str1;
    out.close();

    
    string str2;
    // Opening files using constructor and reading it
    ifstream in("output.txt"); // Read operation
    in>>str2;
    while(in.eof()==0){//reading till EOF->end of file
        getline(in, str2);
         cout<<str2;  
    }
    in.close();

    ostringstream oss;//from sstream libarary use for formate string
    int age = 25;
    double height = 1.75;
    string name = "John"; 
    oss << "Name: " << name << ", Age: " << age << ", Height: " << height;
    string formattedString = oss.str();
    cout << formattedString <<endl;

    return 0;
}