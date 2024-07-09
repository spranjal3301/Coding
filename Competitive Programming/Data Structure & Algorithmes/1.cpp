// C++ Program to Concatenate two sets 
#include <algorithm> 
#include <iostream> 
#include <iterator> 
#include <set> 
using namespace std; 

// Driver Code 
int main() 
{ 
	set<int> set1 = { 1, 2, 3, 4 }; // Set 1 
	set<int> set2 = { 3, 4, 5, 6 }; // Set 2 

	set<int> result; 
	
	// Concanate 
	set_union(set1.begin(), set1.end(), set2.begin(), 
			set2.end(), inserter(result, result.begin())); 

	set1 = result; 

	cout << "Concatenated Set: "; 
	for (const auto& element : set1) { 
		cout << element << " "; 
	} 
	return 0; 
}
