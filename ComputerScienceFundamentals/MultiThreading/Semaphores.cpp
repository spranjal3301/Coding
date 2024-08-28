#include <iostream> 
#include <semaphore> 
#include<condition_variable>
#include<mutex>
#include <thread> 
using namespace std; 
  
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
   
  
 