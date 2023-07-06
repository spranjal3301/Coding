#include <stdio.h>

int main() {
  int a;
  printf("a is\n");
  scanf("%d", &a);

  if (a == 1 || a == 2 || a == 3) {
    printf("a is 1 2 3\n");
  } else {
    printf("a is not");
  }
  // Above it and else statement is not identifiy the number .
  // then we use else if clause .
  //only on one program will run
  if (a == 1) {
    printf("a is 1\n");
  } else if (a == 2) {
    printf("a is 2\n");
  } else if (a == 3) {
    printf("a is 3\n");
  } else {
    printf("a is not 1 2 3");
  }
  // short cut of if else statement

  (a <= 3) ? printf("a is less than 3\n ") : printf("a>3");

  switch (a) {
  case 1:
    printf("case 1 "); // intead of printf we can use any C code
    break;
  default:
    printf("other case than 1");
    break; // without break all program execute after condition statisfy
  }
  return 0;
}