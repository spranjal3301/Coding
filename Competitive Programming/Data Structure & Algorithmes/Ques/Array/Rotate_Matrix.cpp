#include <bits/stdc++.h>
using namespace std;
void transpose()
{
    vector<vector<int>> matrix = {{1, 2, 3},
                                  {3, 4, 5},
                                  {5, 6, 7}};
    for (int i = 0; i < matrix.size(); i++)
    {
        for (int j = i; j < matrix[0].size(); j++)
        {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    for (int i = 0; i < matrix.size(); i++)
    {
        for (int j = 0; j < matrix[0].size(); j++)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}
void rotate(vector<vector<int>> &matrix)
{   int row=matrix.size();
    int col=matrix[0].size();
    
    for (int i = 0; i <row; i++)
    {
        for (int j = i; j <col; j++)
        {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    
    for (int i = 0; i <col/2; i++)
    {
        for (int j = 0; j <row; j++)
        {
            swap(matrix[j][i],matrix[j][col-1-i]);
        }
        
    }


    


}
int main()
{
      vector<vector<int>> matrix = {{5,1,9,11},
                                    {2,4,8,10},
                                    {13,3,6,7},
                                    {15,14,12,16}};
    int row=matrix.size();
    int col=matrix[0].size();
    

    
    return 0;
}