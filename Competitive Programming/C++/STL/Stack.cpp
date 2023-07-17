#include <iostream>
#include <stack>
//* In C++, a stack is a container that follows the Last-In-First-Out (LIFO) principle.
//* It represents a collection of elements in which the last element inserted is the first one to be removed.

/*
LIFO structure: The stack container follows the LIFO principle, meaning that the most recently inserted element is the first one to be removed.
Single-point access: Elements in a stack can only be inserted or removed from the top (also known as the "head") of the stack.
Limited access: Stacks generally provide limited access to elements. You can only access the top element, and you cannot directly access or modify other elements in the middle of the stack.
*/
int main() {
    std::stack<int> myStack;

    myStack.push(10);       // Insert 10 onto the stack
    myStack.push(20);       // Insert 20 onto the stack

    std::cout << "Top: " << myStack.top() << std::endl;  // Output: 20

    myStack.pop();          // Remove the top element

    std::cout << "Size: " << myStack.size() << std::endl; // Output: 1

    return 0;
}
