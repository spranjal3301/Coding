#include<bits/stdc++.h>

using namespace std;

#define fastio() ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)
#define MOD 1000000007
#define MOD1 998244353
#define INF 1e18
#define nline "\n"
#define pb push_back
#define ppb pop_back
#define mp make_pair
#define ff first
#define ss second
#define PI 3.141592653589793238462
#define set_bits __builtin_popcountll
#define sz(x) ((int)(x).size())
#define all(x) (x).begin(), (x).end()

typedef long long ll;
typedef unsigned long long ull;
typedef long double lld;

#ifndef ONLINE_JUDGE
#define debug(x) cerr << #x <<": "; _print(x); cerr << endl;
#else
#define debug(x)
#endif

void _print(ll t) {cerr << t;}
void _print(int t) {cerr << t;}
void _print(string t) {cerr << t;}
void _print(char t) {cerr << t;}
void _print(lld t) {cerr << t;}
void _print(double t) {cerr << t;}
void _print(ull t) {cerr << t;}

template <class T, class V> void _print(pair <T, V> p);
template <class T> void _print(vector <T> v);
template <class T> void _print(set <T> v);
template <class T, class V> void _print(map <T, V> v);
template <class T> void _print(multiset <T> v);
template <class T, class V> void _print(pair <T, V> p) {cerr << "{"; _print(p.ff); cerr << ","; _print(p.ss); cerr << "}";}
template <class T> void _print(vector <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(set <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(multiset <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T, class V> void _print(map <T, V> v) {cerr << "[ "; for (auto i : v) {_print(i); cerr << " ";} cerr << "]";}
//!---------------------------------------------------------------------------------------------------------------------------

  void compairdiff(string s1,string s2,vector<vector<int>> &adj){
        int n=s1.size();
        int m=s2.size();
        int i=0,j=0;
        
        while(i<n && j<m){
            if(s1[i]!=s2[j]){
                adj[s1[i]-'a'].push_back(s2[j]-'a');
                return;
            }
            i++;
            j++;
        }
        
    }
    void dfs(vector<vector<int>> &adj,vector<bool> &visited,string &ans,int i){
        visited[i]=true;
        
        for(auto u:adj[i]){
            if(!visited[u]){
                dfs(adj,visited,ans,u);
            }
        }
        char k='a'+i;

        ans=k+ans;
    }
  
    string findOrder(string dict[], int n, int k) {
        vector<vector<int>> adj(k);
        
        for(int i=0;i<n-1;i++){
            compairdiff(dict[i],dict[i+1],adj); 
        }
        
        string ans="";
        vector<bool> visited(k,0);
        debug(adj);
        
        for(int i=0;i<k;i++){
            if(!visited[i]){
               dfs(adj,visited,ans,i); 
            }
        }
        // cout<<ans;
        
        return ans;

    }
int main(){
    string a[]={"baa","abcd","abca","cab","cad"};
    string ans=findOrder(a,5,4);
    cout<<ans;
    return 0;
}
