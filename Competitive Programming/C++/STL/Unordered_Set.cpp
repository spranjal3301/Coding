#include<bits/stdc++.h>
using namespace std;
// #include <unordered_set>
// In C++, an unordered set is an associative container that stores a collection of unique elements in no particular order.
// It provides fast access to elements using hashing-based lookup instead of a sorted order like in a regular set.
/*
Uniqueness of elements: The elements in an unordered set are unique, similar to a regular set. Duplicate elements are not allowed, and attempting to insert a duplicate element will have no effect.
Fast lookup: Unordered sets provide constant-time average complexity for insertion, deletion, and search operations. The actual performance depends on the hash function used and the number of elements in the set.
No specific order: Elements in an unordered set are stored in no particular order. Unlike a regular set, there is no inherent sorting criterion.
Hash-based implementation: Unordered sets use a hash table or hash-based data structure internally to store elements and provide fast lookup based on hashed values.
Iterators: Unordered sets support iterators that allow you to traverse the elements in the set, but the order of iteration is not guaranteed.
*/
//! Hash_Set(unordered_set) Implementation
class MyHashSet {
private:
	int prime;
	vector<list<int>> table;

	int hash(int key) {
		return key % prime;
	}

	list<int>::iterator search(int key) {
		int h = hash(key);
		return find(table[h].begin(), table[h].end(), key);
	}

public:
	MyHashSet() : prime(10013), table(prime) {}
	
	void add(int key) {
		int h = hash(key);
		if (!contains(key))
			table[h].push_back(key);
	}
	
	void remove(int key) {
		int h = hash(key);
		auto it = search(key);
		if (it != table[h].end())
			table[h].erase(it);
	}
	
	bool contains(int key) {
		int h = hash(key);
		return search(key) != table[h].end();
	}
};
//* class MyHashSet {
// private:
// 	vector<bool> table;
// public:
// 	MyHashSet() : table(1e6 + 1, false) {}
	
// 	void add(int key) {
// 		table[key] = true;
// 	}
	
// 	void remove(int key) {
// 		table[key] = false;
// 	}
	
// 	bool contains(int key) {
// 		return table[key];
// 	}
// };
int main() {
    std::unordered_set<int> mySet;

    mySet.insert(30);           // Insert 30 into the unordered set
    mySet.insert(10);           // Insert 10 into the unordered set
    mySet.insert(20);           // Insert 20 into the unordered set

    std::cout << "Size: " << mySet.size() << std::endl; // Output: 3

    mySet.erase(10);            // Remove 10 from the unordered set

    if (mySet.find(20) != mySet.end()) {
        std::cout << "Element 20 found in the unordered set" << std::endl;
    }

    return 0;
}

