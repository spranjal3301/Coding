#include <stdio.h>

int main() {
    char str[1000];
    int i, j, max_count = 0;
    char max_char;

    printf("Enter a string: ");
    scanf("%s", str);

    for (i = 0; str[i] != '\0'; i++) {
        int count = 0;
        for (j = i; str[j] != '\0'; j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > max_count) {
            max_count = count;
            max_char = str[i];
        }
    }

    printf("Maximum occuring character: %c\n", max_char);
    printf("Occurrence count: %d\n", max_count);

    return 0;
}