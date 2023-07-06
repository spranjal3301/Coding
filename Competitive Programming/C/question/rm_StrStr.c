// WCP to input two strings and remove all the characters of the 2nd string which are present in the
// 1st string.
#include<stdio.h>

int main(){
    char st1[100];
    char st2[100];
    scanf("%s %s",st1,st2);
    char st3[100],c=0,f;
    for (int i = 0;st2[i]!='\0'; i++)
    {   f=1;
        for (int j = 0; st1[j]!='\0'; j++)
        {  
            if (st2[i]==st1[j])  
            {
                f=0;
               break;
            }  
        }
       if (f==1)
       {
         st2[c]=st2[i];
                c++;
       }
        
    }   
    st2[c]='\0';
    printf("%s\n",st2);
    

    return 0;
}