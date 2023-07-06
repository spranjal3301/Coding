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

//lower case to upper case 
#include<stdio.h>

int main(){
    char st[]="pranjal";
    char *ptr=st;
    while (*ptr!='\0')
    {
        *ptr= *ptr -32;
        ptr++;
    }
    printf("%s",st);

    
    return 0;
}


//occurences of char in string
#include<stdio.h>

int main(){

    char st[]="pranjalsingh";
    char c;
    scanf("%c",&c);
    int count=0;
    for(int i=0;st[i];i++){
        if(st[i]==c){
            count++;
        }
    }
    printf("%d",count);

    return 0;
}


//string to number
#include<stdio.h>
#include<stdlib.h>
int main(){
    char st[300];
    gets(st);
    printf("%d",atoi(st)); 
    return 0;
}

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

// WCP to input a string consisting of both characters and numbers and print the count of alphabets
// and numbers.
#include<stdio.h>

int main(){
    char st[100];
    gets(st);
    printf("%s\n",st);
    int alp=0,num=0;
    for (int i = 0;st[i]; i++)
    {
        if (st[i]>='0' && st[i]<='9')
        {
            num++;
        }
        else if (st[i]>='a' && st[i]<='z' || st[i]>='A' && st[i]<='Z')
        {
            alp++;
        }
        
    }
       printf("%d\n%d",alp,num);
    
    return 0;
}

