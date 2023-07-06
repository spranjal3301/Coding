//! Map:
// It is a data structure that allows storing key-value pairs, where each key is unique within the map 
#include<iostream>
#include<string>
#include<map>
using namespace std;

int main(){
// Map is an associative array
    map<string, int>  marksMap;
    marksMap["Atul"] = 58;
    marksMap["Rohit"] = 57;
    marksMap["Kishlay"] = 78;
    marksMap["Aditya"] = 65;
    marksMap["Sachin"] = 53;
 
    map<string,int> :: iterator iter;
    for (iter = marksMap.begin(); iter != marksMap.end(); iter++)
    {
        cout<<(*iter).first<<" "<<(*iter).second<<"\n";
    }
    marksMap.insert( { {"Rohan", 89}, {"Akshat", 46} } );
    return 0;
}