#include<bits/stdc++.h>
using namespace std;
//!Huffman Encoding
//*Huffman encoding is a lossless data compression algorithm.
//* The idea is to assign variable-length codes to input characters,
 //*lengths of the assigned codes are based on the frequencies of corresponding characters.
 //* The most frequent character gets the smallest code and the least frequent character gets the largest code.

//!Time Complexity: O(nlogn)
//!Space Complexity: O(n)
//* where n is the number of unique characters.

//! Applications of Huffman Coding:
//* They are used for transmitting fax and text.
//* They are used by conventional compression formats like PKZIP, GZIP, etc.
//* Multimedia codecs like JPEG, PNG, and MP3 use Huffman encoding(to be more precise the prefix codes).


class Node{
    public:
        int data;
        Node* left;
        Node* right;
        
        Node(int data){
            this->data=data;
            left=NULL;
            right=NULL;
        }
};

class cmp{
    public:
        bool operator()(Node* a,Node* b){
           return a->data > b->data; 
        }
};


class Solution
{
    void preOrder(Node * root,vector<string>& ans,string temp){
        if(!root)return;
        
        if(!(root->left) && !(root->right)){
            ans.push_back(temp);
            return;
        }
        preOrder(root->left,ans,temp+"0");
        preOrder(root->right,ans,temp+"1");
        
    }
	public:
		vector<string> huffmanCodes(string S,vector<int> f,int N)
		{
		   priority_queue<Node*,vector<Node*>,cmp> pq;
		   
		   for(int i=0;i<N;i++){
		       pq.push(new Node(f[i]));
		   }
		   
		   //Huuffman Treebuliding
		   while(pq.size()>1){
		       Node* left=pq.top();
		       pq.pop();
		       
		       Node* right=pq.top();
		       pq.pop();
		       
		       Node* newNode=new Node(left->data+right->data);
		       newNode->left=left;
		       newNode->right=right;
		       pq.push(newNode);
		   }
		   
		   Node* root=pq.top();
		  // cout<<root->data;
		   vector<string> ans;
		   string temp="";
		   preOrder(root,ans,temp);
		   
		   return ans;
		}
};