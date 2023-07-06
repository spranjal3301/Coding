#include<stdio.h>

int main(){
    char s[10];
    
    //INPUTS
    gets(s); 
    fgets(s,sizeof(s),stdin);
    scanf("%[^\n]s",s);
    char c;
    int i=0;
    printf("enter\n");
   while (c!='\n')
   {
   // fflush(stdin);  USE FOR EMPTY THE VARIABLE
    scanf("%c",&c);
    s[i]=c;
    i++;
   }

    //OUTPUTS
    puts(s); 
    fputs(s,stdout);
    printf("%s",s);
    for (int i = 0;s[i]; i++)
    {
        printf("%c",s[i]);
    }
    
    return 0;
}

