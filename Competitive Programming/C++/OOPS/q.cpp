#include <iostream>
#include <string>

int countSchrodingerSmileys(const std::string& mainString) {
    int count = 0;
    size_t pos = 0;
    while ((pos = mainString.find(":)", pos)) != std::string::npos) {
        size_t colonPos = mainString.rfind(":", pos);
        if (colonPos != std::string::npos && colonPos < pos) {
            bool valid = true;
            for (size_t i = colonPos + 1; i < pos; i++) {
                if (mainString[i] != ')') {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                count++;
            }
        }
        pos += 2; // Move the position after the current ":)"
    }
    return count;
}

int main() {
    std::string mainString = "Hello, :):, :))):, and :))))): are Schrödinger's smileys.";
    
    int smileyCount = countSchrodingerSmileys(mainString);
    std::cout << "Total number of Schrödinger's smileys: " << smileyCount << std::endl;
    
    return 0;
}
