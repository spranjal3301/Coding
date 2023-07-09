#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "12345";
    int num = stoi(str);  // Use stol for long, stoll for long long

    cout << "Converted number: " << num << endl;

    return 0;
}
