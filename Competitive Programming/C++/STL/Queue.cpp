#include <iostream>
#include <queue>
// In C++, a queue is a container that follows the First-In-First-Out (FIFO) principle.
// It represents a collection of elements in which the first element inserted is the first one to be removed
/*
FIFO structure: The queue container follows the FIFO principle, meaning that the first element inserted is the first one to be removed.
Dual-point access: Elements in a queue can be inserted at one end (known as the "back" or "rear") and removed from the other end (known as the "front" or "head").
Limited access: Queues generally provide limited access to elements. You can only access the front and back elements, and you cannot directly access or modify elements in the middle of the queue.
*/
int main() {
    std::queue<int> myQueue;

    myQueue.push(10);       // Insert 10 at the back of the queue
    myQueue.push(20);       // Insert 20 at the back of the queue

    std::cout << "Front: " << myQueue.front() << std::endl;  // Output: 10
    std::cout << "Back: " << myQueue.back() << std::endl;    // Output: 20

    myQueue.pop();          // Remove the front element

    std::cout << "Size: " << myQueue.size() << std::endl;     // Output: 1

    return 0;
}
