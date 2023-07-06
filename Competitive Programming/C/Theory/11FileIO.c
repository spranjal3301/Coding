#include<stdio.h>

int main(){
    //file reading
    FILE *rptr;
    int num;
    rptr =fopen("test.txt","r");
    fscanf(rptr,"%d",&num);
    fclose(rptr);
    printf("%d",num);

    //file writing
    FILE *wptr;
    wptr =fopen("generated.txt","w");
    fprintf(wptr,"we writing this using file i/o ");
    fclose(wptr);

//     while(1){
// ch=fgetc(ptr);	   /When all the content of a file has been read, break the loop
// if(ch==EOF){
// break;
// }
// //code
// }
  
    return 0;
}