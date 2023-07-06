// WCP to check if the string is a palindrome.eg:tenet
#include<stdio.h>

int main(){
    char st[100];
    printf("check\n");
    scanf("%s",&st);
    int i=0,len=0,pld=1;
   for (i = 0;st[i]; i++)
   {len++;}
for ( i = 0;i<len/2; i++)
{
    if (st[i]!=st[len-1-i])
    {pld=0;}   
}  
if (pld==1){printf("palindrome");}
else{printf("error");}  
    return 0;
}
