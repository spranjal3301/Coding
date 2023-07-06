//FUNCTION:
#include<stdio.h>
void display();  // function prototype
void fninsidefn (); // function prototype
int main (){

display(); //fuction call


    return 0;
}
void display(){ //fuction definition
    printf("good morning\n");
    printf("good afternoon\n");
    printf("good night\n"); 
    fninsidefn();    //fuction call inside fn
}
void fninsidefn(){
    printf("this is fn inside fn this fn also call another fn ");
}    