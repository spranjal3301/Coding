#include<bits/stdc++.h>
using namespace std;
//! Trie : means finding something or obtaining it. 
//* Trie data structure is defined as a Tree based data structure that is used for storing 
//* some collection of strings and performing efficient search operations on them. 
// A trie can be used to sort a collection of strings alphabetically as well as search whether
// a string with a given prefix is present in the trie or not.


class TrieNode{
public:
    char data;
    TrieNode* children[26]; //* a-z
    bool isEnd;
    TrieNode(char data){
        this->data = data;
        for(int i=0;i<26;i++){
            children[i] = NULL;
        }
        isEnd = false;
    }
};
class Trie{
    TrieNode* root;

    void insert(TrieNode *root,string word){
        if(word.size()==0){
            root->isEnd=true;
            return;
        }
        int index=word[0]-'a';
        TrieNode* child;

        //! char present
        if(root->children[index]!=NULL){
            child=root->children[index];
        }
        else{
            child=new TrieNode(word[0]);
            root->children[index]=child;
        }

        insert(child,word.substr(1));
    }

    bool Search(TrieNode* root,string word){
        if(word.size()==0){
            return root->isEnd;
        }

        int index=word[0]-'a';
        TrieNode* child=NULL;

        if (root->children[index]!=NULL)
        {
            child=root->children[index];
        }
        else{
            return false;
        }
        return Search(child,word.substr(1));   
    }
    void Delete(TrieNode* root,string word){
        if(word.size()==0){
            if (!root->isEnd)
            {
               cout<<"\nWord not Present"<<endl;
            }
            root->isEnd=false;
            return;
        }

        int index=word[0]-'a';
        TrieNode* child=NULL;

        if (root->children[index]!=NULL)
        {
            child=root->children[index];
        }
        else{
            cout<<"\nWord not Present"<<endl;
            return;
        }
        Delete(child,word.substr(1));   
    }

public:
    Trie(){
        root=new TrieNode('\0'); //! root start with NULL char
        }
    void addWord(string word){insert(root,word);}
    bool Search(string word){return Search(root,word);}
    void Delete(string word){Delete(root,word);}
        

};
//! Insertion :O(n) n->length of word
//! Searching :O(n)
//! Deletion : O(n)
int main(){
    Trie* t1=new Trie();
    t1->addWord("hello");
    cout<<t1->Search("hello");
    t1->Delete("hell");
    
    return 0;
}