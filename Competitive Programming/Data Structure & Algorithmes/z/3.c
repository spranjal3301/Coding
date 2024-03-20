#include <stdio.h>
#include <stdlib.h>

struct assignment
{
    int deadline;
    int time;
    int i;
};

int compareAssignments(const void *a, const void *b)
{
    if(((struct assignment *)a)->deadline == ((struct assignment *)b)->deadline)
        return ((struct assignment *)a)->time - ((struct assignment *)b)->time;
    
    return ((struct assignment *)a)->deadline - ((struct assignment *)b)->deadline;
}

void findAssignmentOrder(int n, struct assignment ass[])
{

    qsort(ass, n, sizeof(struct assignment), compareAssignments);

    int lateness = 0;
    int time = 0;

    for (int i = 0; i < n; i++)
    {
        printf("%d ", ass[i].i);
        

        time += ass[i].time;

        if (time > ass[i].deadline)
            lateness += time - ass[i].deadline;
    }


    printf("\n%d", lateness);
}

int main()
{
    int n;
    scanf("%d", &n);

    struct assignment ass[n];

    // Input deadlines and times for each assignment
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ass[i].deadline);
        ass[i].i = i + 1;
    }

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &ass[i].time);    
    }

    // Find and print the o to minimize maximum lateness
    findAssignmentOrder(n, ass);

    return 0;
}

// 4 
// 5 2
// 5 3
// 5 4
// 5 5

