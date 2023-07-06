#include <stdio.h>

int main()
{
  int n, m;
  scanf("%d  % d", &n, &m);
  int st = 1, sp = n / 2;
  for (int i = 1; i <= n; i++) // number of lines or rows(n)
  {
    char a = 'A';
    for (int j = 1; j <= sp; j++) // number of 1elements in each row or  column
    {
      printf(" ");
    }
    for (int k = 1; k <= st; k++) // number of 2elements in each row or  column
    {
      printf("*");
    }

    if (i < (n + 1) / 2)
    {
      sp = sp + 2;
      st--;
    }
    else
    {
      sp = sp - 2;
      st++;
    }
    // for (int l = 1; l<=i-1; l++)
    // {

    //   c--;
    //   a--;
    //   printf("%c",(char)c);
    // }

    printf("\n");
  }

  return 0;
}
