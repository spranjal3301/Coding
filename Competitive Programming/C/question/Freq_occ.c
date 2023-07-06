// Find the unique values in an array and display their frequency of occurrence
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

int count[MAX_SIZE];

void count_unique_values(int arr[], int size)
{
    int i, j;
    
    for (i = 0; i < size; i++) {
        count[i] = 1;
        for (j = i + 1; j < size; j++) {
            if (arr[i] == arr[j]) {
                count[i]++;
                break;
            }
        }
    }
    
    printf("Unique values in the array and their frequency of occurrence:\n");
    for (i = 0; i < size; i++) {
        if (count[i] != 0) {
            printf("%d occurs %d times\n", arr[i], count[i]);
        }
    }
}

int main()
{
    int arr[MAX_SIZE];
    int size, i;
    
    printf("Enter the size of the array: ");
    scanf("%d", &size);
    
    printf("Enter the elements of the array:\n");
    for (i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }
    
    count_unique_values(arr, size);
    
    return 0;
}
