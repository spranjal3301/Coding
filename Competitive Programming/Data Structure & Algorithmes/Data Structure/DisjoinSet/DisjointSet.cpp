#include<bits/stdc++.h>
using namespace std;
//! Disjoint Set
//* Two sets are called disjoint sets if they don’t have any element in common, the intersection of sets is a null set.

//~ The disjoint set data structure supports following operations:
//* Adding new sets to the disjoint set.
//* Merging disjoint sets to a single disjoint set using Union operation.
//* Finding representative of a disjoint set using Find operation.
//* Check if two sets are disjoint or not. 

//! Union by Rank & Path Compression
//* Union by Rank:
//? we need a new array of integers called rank[]. 
//?If i is a representative of a set, rank[i] is the height of the tree representing the set.
//* Path Compression (Modifications to Find()):
//? It speeds up the data structure by compressing the height of the trees. 
//?It can be achieved by inserting a small caching mechanism into the Find operation.


//! Time Complexity: O(α(n)) (nearly constant time), where α(n) is the inverse Ackermann function, which grows very steadily (it does not even exceed for n<10600  approximately).
//! Auxiliary Space: O(n)
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
    int findParent(int x)
    {
        // Finds the representative of the set
        // that x is an element of
        if (parent[x] != x) {
 
            // if x is not the parent of itself
            // Then x is not the representative of
            // his set,
            //~ Path Compression is used here
            parent[x] = findParent(parent[x]);
 
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
        //? Find current sets of x and y
        int xset = findParent(x);
        int yset = findParent(y);
 
        //? If they are already in same set
        if (xset == yset)
            return;
 
        //? Put smaller ranked item under
        // bigger ranked item if ranks are
        // different
        if (rank[xset] < rank[yset]) {
            parent[xset] = yset;
        }
        else if (rank[xset] > rank[yset]) {
            parent[yset] = xset;
        }
 
        //? If ranks are same, then increment
        // rank.
        else {
            parent[yset] = xset;
            rank[xset]++;
        }
    }
};

//! Union by Size:
//* Again, we need a new array of integers called size[].
//* If i is a representative of a set, size[i] is the number of the elements in the tree representing the set. 