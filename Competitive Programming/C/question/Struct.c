#include<stdio.h>

typedef struct complex
{
    int hour ;
    int minutes ;
    int second;    // H:M:s D:M:Y
    int date  ;
    int month ;
    int year ;
}ts;
int compair(ts first,ts seconds){
    if(first.hour>seconds.hour){
        return 1;
    }
    if(first.hour<seconds.hour){
        return -1;
    }
    return 0;
}

int main(){

ts first={11,27,9,03,02,2023};
ts seconds={12,27,9,03,02,2023};

int a=compair(first,seconds);
printf("%d",a);

    
    return 0;
}

//  Define an array of functions for n students (taken from user) each record having name, roll
// number and marks of the student. (a) all details of the top scorer, (b) all details for the
// lowest scorer, (c) average marks of scored by all the students, (d) all details of the student
// which has a string “vish” in the name like Vishnu, Anvish, Vishwajit, etc.

#include <stdio.h>

struct students{
char name[100];
int roll;
float marks;
};

int main(){
int n;
printf("Enter the no. of students:");
scanf("%d",&n);
struct students s[n];
for(int i=0;i<n;i++){

printf("\nEnter the name of student %d:",i+1);
scanf("%s",s[i].name); //do not use &s[i].name some compiler gives error
printf("Enter the Roll no. of student %d:",i+1);
scanf("%d",&s[i].roll);
printf("Enter the marks  of student %d:",i+1);
scanf("%f",&s[i].marks);

}
float top=0,lowest,avg=0;
int t,l=1;
lowest=s[1].marks;
for(int i=0;i<n;i++){
if(s[i].marks>top){
top=s[i].marks;
t=i;
}
if(s[i].marks<lowest){
lowest=s[i].marks;
l=i;
}
avg+=s[i].marks;
}


printf("\nDetails of the Toper Student\n");
printf("Name:%s\n",s[t].name);
printf("Roll no:%d\n",s[t].roll);
printf("Marks:%f\n",s[t].marks);

printf("\nDetails of the Lowest Scorer\n");
printf("Name:%s\n",s[l].name);
printf("Roll no:%d\n",s[l].roll);
printf("Marks:%f\n",s[l].marks);

printf("\nAverage Marks of Scored by All the Students:%f\n",(float)avg/n);
int k,i,j;
char com[]="vish";
for (i = 0; i <n ; i++)
{ 
   
    for (j = 0; s[i].name[j]!='\0'; j++)
    {
        for ( k = 0; com[k]; k++)
        {
            if (s[i].name[j+k]!=com[k])
            {
                break;
            }
            
        }
        if (k==4)
        {   printf("\nDetails of the Student which has a string vish in the name\n");
            printf("Name:%s\n",s[i].name);
            printf("Roll no:%d\n",s[i].roll);
            printf("Marks:%f\n",s[i].marks);
        }
        
        
    }
    
}


return 0;
}
