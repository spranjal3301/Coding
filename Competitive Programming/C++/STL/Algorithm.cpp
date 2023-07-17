#include <bits/stdc++.h>
#include <functional>
#include <algorithm>
using namespace std;

int main()
{
    // Function Objects (Functor) : A function wrapped in a class so that it is available like an object
    int arr[] = {1, 73, 4, 2, 54, 7};
    // sort(arr,arr+5); //sort from algorithm library
    sort(arr, arr + 6, greater<int>()); // greater< int >( ) is functor from functional libarary
    for (int i = 0; i < 6; i++)
    {
        cout << arr[i] << endl;
    }

    vector<int> numbers = {4, 2, 7, 1, 5};
    sort(numbers.begin(), numbers.end()); // based on intro sort(combination of quick ,heap,insetion sort)

    
    rotate(numbers.begin(),numbers.begin()+1,numbers.end());

    std::string str = "Hello, World!";
    std::reverse(str.begin(), str.end()); // Reverses the order of elements in a range or container.

    // Searches for a value in a range or container and returns an iterator to the first occurrence (or end iterator if not found).
    std::vector<int> numbers = {4, 2, 7, 1, 5};
    auto it = std::find(numbers.begin(), numbers.end(), 7);
    if (it != numbers.end())
    {
        // Value found
    }

    std::vector<int> numbers = {4, 2, 7, 1, 5};
    int count = std::count(numbers.begin(), numbers.end(), 2); // Counts the occurrences of a value in a range or container.

    std::vector<int> numbers = {4, 2, 7, 1, 5};
    auto maxIt = std::max_element(numbers.begin(), numbers.end()); // Finds the maximum and minimum elements in a range or container and returns an iterator to them.
    auto minIt = std::min_element(numbers.begin(), numbers.end());

    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0); // Computes the sum of elements in a range or container.

    std::vector<int> numbers = {1, 2, 3, 4, 5};
    bool found = std::binary_search(numbers.begin(), numbers.end(), 3); // Checks if a value exists in a sorted range or container using binary search. Returns a boolean indicating whether the value was found or not.

    std::vector<int> numbers = {1, 2, 2, 3, 4};
    std::replace(numbers.begin(), numbers.end(), 2, 7); // Replaces all occurrences of a value in a range or container with another value.

    std::vector<int> numbers = {1, 2, 2, 3, 4};
    auto newEnd = std::remove(numbers.begin(), numbers.end(), 2); // Removes all occurrences of a value in a range or container by moving them to the end of the container and returning an iterator to the new end.
    numbers.erase(newEnd, numbers.end());

    return 0;
}