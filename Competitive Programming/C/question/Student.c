// 1. WCP to take input of marks (out of 100) for n students using array and display their grade.
//  marks>=90 :Grade A
//  marks>=80 :Grade B
//  marks>=70 :Grade C
//  marks>=60 :Grade D
//  marks>=40 :Grade E
//  marks <40 :Grade F
// 2. WCP to find the student having lowest, average and highest marks.
// 3. Write a program to find the student with second highest mark from the array.
// 4. Display the marks obtained by each student in decreasing order.
#include<stdio.h>

int main(){
    int n;
    printf("Enter no of students:");
    scanf("%d",&n);
    int marks[n];
    for (int i = 0; i < n; i++)
    {
    printf("Enter marks (out of 100) of students%d:",i+1);
    scanf("%d",&marks[i]);
    }
    for (int i = 0; i < n; i++)
    {char grade;
    if (marks[i]>=90){grade='A';}
    else if (marks[i]>=80){grade='B';}
    else if (marks[i]>=70){grade='C';}
    else if (marks[i]>=60){grade='D';}
    else if (marks[i]>=40){grade='E';}
    else{grade='F';}
    printf("grade of students%d is: %c\n",i+1,grade);
    }
    int lowest,highest,avg,shighest;
    lowest=marks[1];
        highest=0,avg=0,shighest=0;
    for (int i = 0; i <n; i++)
    {
        if (marks[i]>highest){
            shighest=highest;
            highest=marks[i];}
      else if (marks[i]>shighest)
      {shighest=marks[i];}
        if (lowest>marks[i]){lowest=marks[i];} 
      avg+=marks[i];
       }
    printf("hightest %d\n lowest %d\n avg %.2f \n",highest,lowest,(float)avg/n);
    printf("second highest:%d\n",shighest);
   
//    marks in decreasing order
   int temp;
   for (int i = 0; i < n-1; i++)
   {
     for (int j = 0; j <n-i-1 ; j++)
     {
        if (marks[j]<marks[j+1])
        {
            temp=marks[j];
            marks[j]=marks[j+1];
            marks[j+1]=temp;
        }
        
     }
     
   }
     printf("Marks in Decreasing Order: ");
    for (int i =0 ; i<n ; i++)
    {
    printf("%d ",marks[i]);
    
        }
   
            
     
      
        
 
    

    
    

    return 0;
}