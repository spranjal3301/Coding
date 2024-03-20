#include<bits/stdc++.h>
using namespace std;
class Solution{
    vector<int> flat(vector<vector<int>> &matrix){
         std::vector<int> flat_vector;

        for (const auto& row : matrix) {
            for (const auto& element : row) {
                flat_vector.push_back(element);
            }
        }
        return flat_vector;
    }
    bool binary_search(vector<int> &arr, int x){
        int l = 0;
        int r = arr.size() - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (arr[m] == x) {
                return true;
            }
            if (arr[m] < x) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return false;
    }
    
public:	
	
	int countPairs(vector<vector<int>> &mat1, vector<vector<int>> &mat2, int n, int x)
	{
	    vector<int> f1 = flat(mat1);
        vector<int> f2 = flat(mat2);

        int count = 0;
        for (int i = 0; i < f1.size(); i++) {
            if (binary_search(f2, x - f1[i])) {
                count++;
            }
        }
        return count;
	}
};
int main(){
    
    return 0;
}