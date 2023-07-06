#include<stdio.h>
//union is same as structures but only have 20bytes memory and access one variable at a time
union money 
{
    int rupees;
    float dollar;
    float pound;
};
enum week{mon,tue,wed,thus,fri,sat,sun};

int main(){

    union money ind;
    ind.rupees=80;
    printf("%d",ind.rupees);
    //one variable at a time
    ////ind.dollar=1; 
   //// printf("%f",ind.dollar); 

   enum week today;
   today=sun;
   printf("\n%d\n",today);
    
    return 0;
}