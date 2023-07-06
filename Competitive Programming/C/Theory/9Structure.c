#include<stdio.h>
#include<string.h>

typedef struct students // typedef use for creating nick name
{
   char name[100];
   float percentile;
   int marks;
   char *nameptr;

}std; //nickna,e std


int main(){
    
    struct students s1,s2,s3;
    s1.nameptr="pranjal";
    strcpy(s1.name,"PranjalSingh");  
    s1.marks=200;
    s1.percentile=98.99;

// arrays of stuctures
    struct students s[60];
    s[0].nameptr="pranjal";
    strcpy(s[0].name,"PranjalSingh");  
    s[0].marks=200;
    s[0].percentile=98.99;

    struct students citu ={"citu",95.99,120,"citu"};
  
    struct students s4;
    struct students *ptr;
    ptr=&s4;
    (*ptr).marks=200;
     ptr->percentile=98.99; //both work same

     std s5;
     s5.marks=50;

    

     
    return 0;
}