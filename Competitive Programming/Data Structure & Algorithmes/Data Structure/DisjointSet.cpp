#include<bits/stdc++.h>
using namespace std;
//! Disjoint Set
//* Two sets are called disjoint sets if they don’t have any element in common, the intersection of sets is a null set.

//~ The disjoint set data structure supports following operations:
//* Adding new sets to the disjoint set.
//* Merging disjoint sets to a single disjoint set using Union operation.
//* Finding representative of a disjoint set using Find operation.
//* Check if two sets are disjoint or not. 

//~ Union by Rank & Path Compression
class DisjSet {
    int *rank, *parent, n;
 
public:
    //* initialize sets of n items
    DisjSet(int n)
    {
        rank = new int[n];
        parent = new int[n];
        this->n = n;
        makeSet();
    }
 
    //* Creates n single item sets
    void makeSet()
    {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
 
    //* Finds set of given item x
    int find(int x)
    {
        // Finds the representative of the set
        // that x is an element of
        if (parent[x] != x) {
 
            // if x is not the parent of itself
            // Then x is not the representative of
            // his set,
            parent[x] = find(parent[x]);
 
            // so we recursively call Find on its parent
            // and move i's node directly under the
            // representative of this set
        }
 
        return parent[x];
    }
 
    //* Do union of two sets by rank represented
    //* by x and y.
    void Union(int x, int y)
    {
        // Find current sets of x and y
        int xset = find(x);
        int yset = find(y);
 
        // If they are already in same set
        if (xset == yset)
            return;
 
        // Put smaller ranked item under
        // bigger ranked item if ranks are
        // different
        if (rank[xset] < rank[yset]) {
            parent[xset] = yset;
        }
        else if (rank[xset] > rank[yset]) {
            parent[yset] = xset;
        }
 
        // If ranks are same, then increment
        // rank.
        else {
            parent[yset] = xset;
            rank[xset]++;
        }
    }
};
int main(){
    
    return 0;
}