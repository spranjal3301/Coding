#include<bits/stdc++.h>
using namespace std;
string reverse(string & str,int start,int end){
   if (start<=end)
   {
        swap(str[start],str[end]);
        return reverse(str,++start,--end);
   }
   return str;
   
}


int main(){

    
    return 0;
}