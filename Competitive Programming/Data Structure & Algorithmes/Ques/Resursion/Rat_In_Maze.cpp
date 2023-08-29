#include<bits/stdc++.h>
using namespace std;
bool isPathPossible(int newx,int newy,vector<vector<int>> matrix,int size,vector<vector<int>> visited){
    if ((newx>=0 and newx<size) and (newy>=0 and newy<size) and visited[newx][newy]==0 and matrix[newx][newy]==1)
    {
        return true;
    }
    else{
        return false;
    }
        
}
void solve(vector<vector<int>> matrix,int size,vector<string>& ans,int x,int y,vector<vector<int>> visited,string path ){

    if (x==size-1 and y==size-1)
    {
        ans.push_back(path);
        return;
    }
    visited[x][y]=1;
    //! 4 choices-> Down,Left,Right,Up

    //* Down
    int newx=x+1;
    int newy=y;
    if (isPathPossible(newx,newy,matrix,size,visited))
    {
       path.push_back('D');
       solve(matrix,size,ans,newx,newy,visited,path);
       path.pop_back();
    }

    //* Left
     newx=x;
     newy=y-1;
    if (isPathPossible(newx,newy,matrix,size,visited))
    {
       path.push_back('L');
       solve(matrix,size,ans,newx,newy,visited,path);
       path.pop_back();
    }
    //* Right
     newx=x;
     newy=y+1;
    if (isPathPossible(newx,newy,matrix,size,visited))
    {
       path.push_back('R');
       solve(matrix,size,ans,newx,newy,visited,path);
       path.pop_back();
    }
    //* Up
     newx=x-1;
     newy=y;
    if (isPathPossible(newx,newy,matrix,size,visited))
    {
       path.push_back('U');
       solve(matrix,size,ans,newx,newy,visited,path);
       path.pop_back();
    }
    



    visited[x][y]=0;

    
}
  vector<string> findPath(vector<vector<int>> &m, int n) {
        // Your code goes here
        vector<string> ans;
        if (m[0][0]==0)
        {
            return ans;
        }
        
        int x=0,y=0;
        vector<vector<int>> visited(n,vector<int>(n,0));
        string path;
        solve(m,n,ans,x,y,visited,path);
        sort(ans.begin(),ans.end());

        return ans;
        
    }
int main(){
    
    return 0;
}