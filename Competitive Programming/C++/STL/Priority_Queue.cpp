#include <iostream>
#include <queue>
// In C++, a priority queue is a container that provides similar functionality to a queue, but with an added feature of element prioritization. 
// Elements in a priority queue are assigned a priority, and the elements with higher priority are dequeued first.
/*
Priority-based ordering: Elements in a priority queue are ordered based on their priority. The element with the highest priority is always at the front of the queue.
Internal heap implementation: Priority queues are often implemented using a heap data structure internally, which allows efficient insertion and removal of elements based on their priority.
No random access: Priority queues do not support random access to elements. You can only access the front element, and removing an element can only be done from the front.
*/
int main() {
    std::priority_queue<int> myPriorityQueue;

    myPriorityQueue.push(30);       // Insert 30 into the priority queue
    myPriorityQueue.push(10);       // Insert 10 into the priority queue
    myPriorityQueue.push(20);       // Insert 20 into the priority queue

    std::cout << "Top: " << myPriorityQueue.top() << std::endl;  // Output: 30

    myPriorityQueue.pop();          // Remove the highest priority element

    std::cout << "Size: " << myPriorityQueue.size() << std::endl; // Output: 2
    // top(): Access the value of the highest priority element without removing it.

    return 0;
}
