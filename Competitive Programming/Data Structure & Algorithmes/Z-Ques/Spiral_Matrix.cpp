#include<bits/stdc++.h>
using namespace std;
void Wave_Matrix(){
        int arr[3][3]={{1,2,3},
                   {3,4,5},
                   {5,6,7}};
  for (int i = 0; i < 3; i++)
  {
    int j=0;
    int k=2;
    while (j<3 and k>=0)
    {
    // std::cout << "/* message */" << std::endl;
        if (i&1)
        {
             cout<<arr[k][i]<<" ";
             k--;
        }
        else
        {
            cout<<arr[j][i]<<" ";
            j++;

        }
        
        
    }
    
  
    
  }
}
vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> spiral;
        //Strating_Row
        //Ending_Col
        //Ending_Row
        //Starting_Col


        int row=matrix.size();
        int col=matrix[0].size();
        int Total_Element=row*col;
        int count_Element=0;
        
        
        int Strating_Row=0;
        int Starting_Col=0;
        int Ending_Col=col-1;
        int Ending_Row=row-1;
       
        while (count_Element<Total_Element)
        {
            //Strating_Row
            for (int i = Strating_Row; i <=Ending_Col and count_Element<Total_Element ; i++)
            {
                spiral.push_back(matrix[Strating_Row][i]);
                count_Element++;
            }
            Strating_Row++;

            //Ending_Col
            for (int i = Strating_Row; i <=Ending_Row and count_Element<Total_Element ; i++)
            {
                spiral.push_back(matrix[i][Ending_Col]);
                count_Element++;
                
            }
            Ending_Col--;
            
            //Ending_Row
            for (int i = Ending_Col; i >=Starting_Col and count_Element<Total_Element ; i--)
            {
                spiral.push_back(matrix[Ending_Row][i]);
                count_Element++;
            }
            Ending_Row--;
            
            //Starting_Col
            for (int i =Ending_Row; i >=Strating_Row  and count_Element<Total_Element; i--)
            {
                spiral.push_back(matrix[i][Starting_Col]);
                count_Element++;
            }
            Starting_Col++;
        }
        
    return spiral;
    }

int main(){
    int arr[3][3]={{1,2,3}, //same vector<vector<int>> 
                   {3,4,5},
                   {5,6,7}};

    vector<vector<int>>Matrix ={{1,2,3}, 
                                {3,4,5},
                                {5,6,7}};
    
    
    for (auto &&i : spiralOrder(Matrix)  )
    {
        cout<<i<<" ";
    }
                        
    


  
    return 0;
}