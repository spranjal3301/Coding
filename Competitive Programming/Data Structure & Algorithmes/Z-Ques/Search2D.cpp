#include<bits/stdc++.h>
using namespace std;
bool searchMatrix(vector<vector<int>>& matrix, int target) { //*Sort in linear fashiom
    int row=matrix.size();
    int col=matrix[0].size();
    int start=0;
    int end=row*col-1;
    while (start<end)
    {
        int mid=(start+end)/2;
        int element=matrix[mid/col][mid%col]; //!Row=mid/col , Col=mid%col
        if (element==target)
        {
            return true;
        }
        else if (element>target)
        {
           start=mid+1; 
        }
        else{
            end=mid-1;
        }
        
    }
    

    }

bool searchMatrix(vector<vector<int>>& matrix, int target) { //*Sort in Row & Col wise
        int row=matrix.size();
        int col=matrix[0].size();

        int rowI=0;
        int colI=col-1;

        while (rowI<row and colI>=0)
        {
            int element=matrix[rowI][colI];
            if (element==target)
            {
                return true;
            }

            if (element<target)
            {
                rowI++;
            }
            else{
                colI--;
            }
            
            
        }
        return false;
    }

int main(){
    
    return 0;
}