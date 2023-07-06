// Take two strings and determine if string 1 is a substring of string 2 using pointers. 
// (Example:‘gamer’ as string 1 is a substring of ‘Progamer2099’ as string 2)
//* use function for string.h strstr("progamer2099","gamer") 

#include <stdio.h>
#include <string.h>

int isSubstring(char str1[], char str2[]) {
    int m = strlen(str1), n = strlen(str2); //?| Progamer2099
    for (int i = 0; i < n; i++) {           //!| gamer   (no)
        int j,k=1;                          //!|  gamer   (no)
        for (j = 0; j < m; j++) {           //!|   gamer   (no)
            if (str2[i + j] != str1[j])     //*|     gamer  (yes)
               k=0;
                break;
        }
        if (k == 1)
            return 1;
    }
    return 0;
}

int main() {
    char str1[] = "gamer";
    char str2[] = "Progamer2099";
    if (isSubstring(str1, str2))
        printf("'%s' is a substring of '%s'\n", str1, str2);
    else
        printf("'%s' is not a substring of '%s'\n", str1, str2);
    return 0;
}
