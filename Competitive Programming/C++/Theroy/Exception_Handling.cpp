// Error 
    // 1.Logical Error
    // 2.Semantic/Syntax Error
    //! 3.Run Time Error (Exception_Handling)
// try {
    // Code that might throw an exception
// } catch (ExceptionType1 ex1) {
     // Handle ExceptionType1
// } catch (ExceptionType2 ex2) {
     // Handle ExceptionType2
// } catch (...) {
    // Handle any other exceptions
// }

#include<iostream>
using namespace std;

int main(){
        try {
        // Code that might throw an exception
        float numerator ;
        float denominator ;
        cin>>numerator>>denominator;
        if (denominator == 0) {
            throw runtime_error("Division by zero error");
        }
        float result = numerator / denominator;
     cout << "Result: " << result << endl;
    } catch (const exception& ex) {
        // Handle exceptions
     cout << "Exception caught: " << ex.what() << endl;
    }
    return 0;
}