#include <stdio.h>
#include <stdlib.h>

struct assignment
{
    int deadline;
    int time;
};

int compareAssignments(const void *a, const void *b)
{
    return ((struct assignment *)a)->deadline - ((struct assignment *)b)->deadline;
}

void findAssignmentOrder(int n, struct assignment ass[])
{

    qsort(ass, n, sizeof(struct assignment), compareAssignments);

    int order[n];
    for (int i = 0; i < n; i++)
    {
        order[i] = i;
    }

    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (ass[order[i]].time > ass[order[j]].time)
            {
                int temp = order[i];
                order[i] = order[j];
                order[j] = temp;
            }
        }
    }

    int lateness=0;
    int time=0;

    for (int i = 0; i < n; i++)
    {
        printf("%d ", order[i] + 1);

        time+=ass[order[i]].time;

        if(time>ass[order[i]].deadline)
            lateness+=time-ass[order[i]].deadline;
    }
    printf("\n");
    printf("\n%d",lateness);
}

int main()
{
    int n;
    scanf("%d", &n);

    struct assignment ass[n];

    // Input deadlines and times for each assignment
    for (int i = 0; i < n; i++)
    {
        scanf("%d %d", &ass[i].deadline, &ass[i].time);
    }

    // Find and print the order to minimize maximum lateness
    findAssignmentOrder(n, ass);

    return 0;
}