// WCP to concatenate two strings.
#include<stdio.h>

int main(){
 char st1[100]="pranjal";
 char st2[]="singh";
 int i=0,len=0;
 while (st1[i++])
 { len++;
 }
   for (int i = 0; st2[i]; i++)
   {
    st1[len+i]=st2[i];
   }
    st1[len+i]='\0';
    printf("%s",st1);
    return 0;
}