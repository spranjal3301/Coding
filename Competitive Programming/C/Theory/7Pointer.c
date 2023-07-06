//POINTERS
#include<stdio.h>

int main(){
    int i=1 ;
    int *j; //definding pointer
    j=&i;
    int **k; // pointer to pointer
    k=&j;
   // value of i is pf
    printf("%d\n",i);       
    printf("%d\n",*j); 
    printf("%d\n",**k); 
    // address of i pf
    printf("%d\n",j);       
    printf("%d\n",&i);
    printf("%u\n",&i); // %u for printing pointers address
    printf("%u\n",*(&j)); // value at address of j
    printf("%d\n",*k);
    // address of j pf
    printf("%u\n",&j);
    printf("%d\n",k);
    *j++;  // increment in pointer= size of data type int=4byte
    printf(" af %d\n",i);
    printf(" af %u\n",&i);
    printf(" af %d\n",j);       
    printf(" af %u\n",j);       

    return 0;
}