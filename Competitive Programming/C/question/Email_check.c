#include<stdio.h>

int main(){
    char email[100];
    int v1=0,v2=0;
    printf("email check:");
    scanf("%s",email);
    for (int i = 0;email[i] ; i++)
    {
        if (email[i]=='@')
        {v1++;}
        else if (email[i]=='.')
        {v2++;}
         }
         int valid;
    for (int i = 0;email[i] ; i++)
    {   valid=0;
         
         if (email[i]>='a' && email[i]<='z' || email[i]>='A' && email[i]<='Z'||email[i]>='0' && email[i]<='9' || email[i]=='.' || email[i]=='@')
            {
                valid==1;
            }
         else{
                break;
            }
            
         }
       
         if (v1==1 && v2==1 )
         {
            printf("valid emali %s",email);
         }
         else{

            printf("invalid emali %s",email);
         }
         
    
    return 0;
}