#include<iostream>
#include<thread>
#include<mutex>
#include<chrono>
#include<queue>

using namespace std;

// Declare a mutex to protect shared resources
mutex mtx;
// Declare a queue to act as a buffer between producer and consumer
queue<int> q;


// Producer function to produce items and place them in the queue
void producer() {
    for(int i = 0; i < 10; i++) {
        // Acquire the lock using unique_lock
        unique_lock<mutex> lck(mtx);
        
        // Push the produced item into the queue
        q.push(i);
        cout << "Produced: " << i << endl;
        
        
        lck.unlock();
        // Simulate data production
        this_thread::sleep_for(chrono::milliseconds(1000));
    }
}

// Consumer function to consume items from the queue
void consumer() {
    for(int i = 0; i < 10; i++) {
        // Acquire the lock using unique_lock
        unique_lock<mutex> lck(mtx);
        
    
        // Consume the item from the front of the queue
        cout << "Consumed: " << q.front() << endl;
        q.pop();

        lck.unlock();
        // Simulate data production
        this_thread::sleep_for(chrono::milliseconds(1000));
    }
}

int main() {
    // Create producer and consumer threads
    thread t1(producer);
    thread t2(consumer);

    // Wait for both threads to finish execution
    t1.join();
    t2.join();

    return 0;
}
