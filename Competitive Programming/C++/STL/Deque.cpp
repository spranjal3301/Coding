#include <iostream>
#include <deque>
// In C++, a deque (short for "double-ended queue") is a container class that represents a sequence of elements, 
// similar to a vector or list. It allows efficient insertion and deletion of elements at both the beginning and the end of the sequence.

// The deque container in C++ provides the following key features:
// Random access: Like vectors, elements in a deque can be accessed using random access iterators. It supports constant time access to individual elements with the [] operator.
// Dynamic size: Unlike arrays, deque containers can dynamically resize to accommodate the number of elements. They manage their own memory and automatically expand or contract as necessary.
// Efficient insertion and deletion: Inserting or deleting elements at the beginning or end of a deque is efficient since it doesn't require shifting the remaining elements.
int main() {
    std::deque<int> numbers;

    numbers.push_back(1);        // Insert 1 at the back
    numbers.push_front(2);       // Insert 2 at the front

    std::cout << "Front: " << numbers.front() << std::endl;  // Output: 2
    std::cout << "Back: " << numbers.back() << std::endl;    // Output: 1

    numbers.pop_front();         // Remove element from the front
    std::cout<<numbers[0];
    std::cout << "Size: " << numbers.size() << std::endl;     // Output: 1

    return 0;
}
