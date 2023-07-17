#include <iostream>
#include <set>
// In C++, a set is an associative container that stores a collection of unique elements in a sorted order.
// Each element in the set is unique, and the set is typically implemented using a balanced binary search tree.
/*
//*Uniqueness of elements: The elements in a set are unique. If you try to insert an element that already exists in the set, it won't be inserted.
//*Sorted order: Elements in a set are stored in a sorted order according to the default sorting criterion (ascending order). You can also provide a custom sorting criterion by using a comparison function or a lambda expression.
Fast search and retrieval: Sets provide efficient search and retrieval operations. The underlying data structure (typically a binary search tree) allows for logarithmic time complexity for these operations.
Insertion and deletion: You can insert elements into a set using the insert() function. The erase() function allows you to remove elements from the set.
Iterators: Sets support bidirectional iterators, allowing you to traverse the elements in a set in both forward and backward directions.
*/

int main() {
    std::set<int> mySet;

    mySet.insert(30);           // Insert 30 into the set
    mySet.insert(10);           // Insert 10 into the set
    mySet.insert(20);           // Insert 20 into the set

    std::cout << "Size: " << mySet.size() << std::endl; // Output: 3

    mySet.erase(10);            // Remove 10 from the set

    if (mySet.find(20) != mySet.end()) {
        std::cout << "Element 20 found in the set" << std::endl;
    }
/*
insert(): Insert an element into the set.
erase(): Remove an element (or a range of elements) from the set.
find(): Search for an element in the set and return an iterator pointing to it.
count(): Count the occurrences of a specific element in the set.
size(): Get the number of elements in the set.
empty(): Check if the set is empty.
begin() and end(): Get iterators pointing to the beginning and end of the set.
*/
    return 0;
}
