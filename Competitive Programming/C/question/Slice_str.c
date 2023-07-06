//Write a function slice() to slice a string. It should change the original string such that it is now the sliced strings.
#include<stdio.h>
void slice(char *st,int m,int n ){
    int i=0;
    while ((m+i)<=n)
    {
        st[i]=st[m+i];
        i++;
    }
    st[i]='\0';
}
int main(){
    char st[]="spranjal394@gmail.com";
    slice(st,1,7);  // cutting in m:n(1:7)  s|pranjal|citu
    printf("%s",st);
    return 0;
}