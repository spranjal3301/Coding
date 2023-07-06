#include <stdio.h>
#include <math.h>

int main() {
  int a, b; // TYPES DECLARATION INSTRUCTION
  // a+b = X IS ILLEGAL
  // X = a +b is LEGAL
  printf("a is \n");
  scanf("%d", &a);

  printf("b is \n");
  scanf("%d", &b);

  printf("the of sum of is a and b is %d\n", a + b);
  // a%b where |a|>|b| & b not = -ve gives a remender for a divide by b
  // no opreter to do power or exponencal(2^4) opration
  // ^ is bitwise xor oprater
  // if u want to use power you use pow() with #include(math)
  // . not eqaual to *
  // if eles is condition
  printf("a power b is %f\n", pow(a, b));
  if ((a + b) % 2 == 0 && (a + b) == 0) {
    printf("%d IS EVEN\n", a + b);
  } else {
    printf("%d is odd\n", a + b);
  }

  return 0;
}