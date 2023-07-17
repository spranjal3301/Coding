#include<iostream>
#include<vector>
using namespace std;

void display(vector<int> &v){
    for (int i = 0; i < v.size(); i++)
    {
        cout<<v[i]<<" ";
    }
    cout<<endl;
}

int main(){
    // vector
    vector<int> vec1;  //zero length integer vector
    vector<int> vec(4);  //4 length integer vector initialize with 0
    vector<char> vec2(4);  //4-element character vector 
    vector<char> vec3(vec2);//4-element character vector from vec2
    vector<int> vec4(6,3); //6-element vector of intialize with 3
    int element, size;
    cout<<"Enter the size of your vector"<<endl;
    cin>>size;
    for (int i = 0; i < size; i++)
    {
        cout<<"Enter an element to add to this vector: ";
        cin>>element;
        vec1.push_back(element);
    }
    display(vec1);
    vec1[0]=27 ;  
    cout<<vec1[0]<<endl;
    vector<int> :: iterator iter = vec1.begin(); //pointing iterator to first element of vector
    vec1.insert(iter,566);
    display(vec1);
    
// push_back: Adds an element to the end of the vector.
// pop_back: Removes the last element from the vector.
// size: Returns the number of elements in the vector.
// empty: Checks if the vector is empty.
// clear: Removes all elements from the vector but not remove memory allocated.
// resize: Resizes the vector to a specified size.
// front: Returns a reference to the first element of the vector.
// back: Returns a reference to the last element of the vector.
// at: Accesses the element at a specified index with bounds checking.
// operator[]: Accesses the element at a specified index without bounds checking.
// begin: Returns an iterator pointing to the beginning of the vector.
// end: Returns an iterator pointing to the end of the vector.
// insert: Inserts elements at a specified position in the vector.
// erase: Removes elements at a specified position or range from the vector.
// swap: Swaps the contents of two vectors.
// emplace_back: Constructs an element in-place at the end of the vector.
// reserve: Requests a change in capacity of the vector.
// capacity: Returns the current capacity or size  of the vector.
    return 0;
}