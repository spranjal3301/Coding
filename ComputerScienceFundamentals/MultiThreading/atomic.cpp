#include <atomic> 
#include <iostream> 
#include <thread> 
using namespace std; 
  
atomic<int> counter(0); // Atomic integer 
  
void increment_counter(int id) 
{ 
    for (int i = 0; i < 100000; ++i) { 
        // Increment counter atomically 
        counter.fetch_add(1); 
    } 
} 
  
int main() 
{ 
    thread t1(increment_counter, 1); 
    thread t2(increment_counter, 2); 
  
    t1.join(); 
    t2.join(); 
  
    cout << "Counter: " << counter.load() << std::endl; 
  
    return 0; 
}