#include <iostream> 
#include <semaphore> 
#include<condition_variable>
#include<mutex>
#include <thread> 
// #include <bits/semaphore.h> // Remove this line
// #include <semaphore.h> // Remove this line
using namespace std; 
// WHat is Semaphore?
// A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system such as a multitasking operating system.
class Semaphore {
    private:
        sem_t sem;
    public:
        Semaphore(int value) {
            sem_init(&sem, 0, value);
        }
        void wait() {
            sem_wait(&sem);
        }
        void signal() {
            sem_post(&sem);
        }
        ~Semaphore() {
            sem_destroy(&sem);
        }
};

class Semaphore {
private:
	int count;
    mutex mtx;
    condition_variable cv;
	
public:
    Semaphore(int n = 0) : count(n) { }
    void Set(int n) { count = n; }
    void Signal() {
        unique_lock<mutex> lck(mtx);
        ++count;
        cv.notify_one();
    }
    void Wait() {
        unique_lock<mutex> lck(mtx);
        cv.wait(lck, [&](){ return count > 0; }); // standard format of wait() lambda expression
        --count;
    }
};

//!Producer Consumer Problem using Semaphore
int buffer[5], i = 0,n=5;
Semaphore mutex(1), full(0), empty(n);

void producer() {
    int item;
    while (1) {
        item = rand() % 100;
        empty.wait();
        mutex.wait();
        buffer[i] = item;
        cout << "Produced: " << item << endl;
        i = (i + 1) % n;
        mutex.signal();
        full.signal();
        this_thread::sleep_for(chrono::milliseconds(1000));
    }
}

void consumer() {
    int item;
    while (1) {
        full.wait();
        mutex.wait();
        item = buffer[i];
        cout << "Consumed: " << item << endl;
        i = (i + 1) % n;
        mutex.signal();
        empty.signal();
        this_thread::sleep_for(chrono::milliseconds(1000));
    }
}

int main() {
    thread t1(producer);
    thread t2(consumer);
    t1.join();
    t2.join();
    return 0;
}



   
  
 