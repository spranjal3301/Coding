#include <stdio.h>

int main() {
    int n, num, largest, second_largest;
    printf("Enter the number of numbers: ");
    scanf("%d", &n);
    printf("Enter a number: ");
    scanf("%d", &num);
    largest = num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if(num > largest) {
        second_largest = largest;
        largest = num;
    }
    else {
        second_largest = num;
    }
    for(int i = 2; i < n; i++) {
        printf("Enter a number: ");
        scanf("%d", &num);
        if(num > largest) {
            second_largest = largest;
            largest = num;
        }
        else if(num > second_largest) {
            second_largest = num;
        }
    }
    printf("Second largest number: %d", second_largest);
    return 0;
}
