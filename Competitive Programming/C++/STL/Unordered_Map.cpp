#include <iostream>
#include <unordered_map>
/*
In C++, an unordered map is an associative container that stores a collection of key-value pairs in no particular order.
It provides fast access to values based on their corresponding keys, similar to a regular map, but without the inherent sorting order.
*/
/*
Key-value pairs: An unordered map consists of key-value pairs, where each key is associated with a value. The keys are unique, and each key can be associated with only one value.

Fast lookup: Unordered maps provide constant-time average complexity for insertion, deletion, and search operations. The actual performance depends on the hash function used and the number of elements in the map.

No specific order: Elements in an unordered map are stored in no particular order. Unlike a regular map, there is no inherent sorting criterion.

Hash-based implementation: Unordered maps use a hash table or hash-based data structure internally to store key-value pairs and provide fast lookup based on hashed values.

Iterators: Unordered maps support iterators that allow you to traverse the key-value pairs in the map, but the order of iteration is not guaranteed.
*/
int main() {
    std::unordered_map<std::string, int> myMap;

    myMap.insert(std::make_pair("Alice", 25));    // Insert "Alice" with value 25
    myMap.insert(std::make_pair("Bob", 30));      // Insert "Bob" with value 30
    myMap.insert(std::make_pair("Charlie", 35));  // Insert "Charlie" with value 35

    std::cout << "Size: " << myMap.size() << std::endl; // Output: 3

    myMap.erase("Bob");                           // Remove the key-value pair with key "Bob"

    if (myMap.find("Alice") != myMap.end()) {
        std::cout << "Value of Alice: " << myMap["Alice"] << std::endl; // Output: 25
    }

    return 0;
}
