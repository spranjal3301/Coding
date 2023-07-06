#include<stdio.h>

int main(int argc, char const *argv[])
    {
      printf("no of argument is %d\n",argc); 
      for (int i = 0; i < argc; i++)
      {
        printf("%s\n",argv[i]);
      }
      
    
        return 0;
    }
    
