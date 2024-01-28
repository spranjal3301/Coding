#include <stdio.h>
#include <string.h>

#define MAX_SIZE 128

int size_of_grid, cnt = 0;
int arr[MAX_SIZE][MAX_SIZE];

void place(int x1, int y1, int x2, int y2, int x3, int y3) {
    cnt++;
    arr[x1][y1] = arr[x2][y2] = arr[x3][y3] = cnt;
}

void tile(int n, int x, int y) {
    if (n == 2) {
        cnt++;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                arr[x + i][y + j] = cnt;
        return;
    }

    int mid = n / 2;
    place(x + mid, y + mid - 1, x + mid, y + mid, x + mid - 1, y + mid);
    tile(mid, x, y + mid);
    tile(mid, x, y);
    tile(mid, x + mid, y);
    tile(mid, x + mid, y + mid);
}

int main() {
    size_of_grid = 8;
    memset(arr, 0, sizeof(arr));

    arr[0][0] = -1;

    tile(size_of_grid, 0, 0);

    for (int i = 0; i < size_of_grid; i++) {
        for (int j = 0; j < size_of_grid; j++)
            printf("%d \t", arr[i][j]);
        printf("\n");
    }

    return 0;
}
