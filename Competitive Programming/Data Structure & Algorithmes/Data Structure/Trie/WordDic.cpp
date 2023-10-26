#include<bits/stdc++.h>
using namespace std;
class TrieNode{
public:
    char data;
    TrieNode* children[26];
    bool isEnd;
    TrieNode(char data):data(data){
        isEnd=false;
        for(int i=0;i<26;i++){
            children[i]=NULL;
        }
    }
};

class WordDictionary {
    TrieNode* root;
    void addWord(TrieNode*root,string word){
        if(word.size()==0){
            root->isEnd=true;
            return;
        }
        int index=word[0]-'a';
        TrieNode* child;

        if(root->children[index]!=NULL){
            child=root->children[index];
        }
        else{
            child=new TrieNode(word[0]);
            root->children[index]=child;
        }
        addWord(child,word.substr(1));
    }
    bool search(TrieNode* root,string word){
        if(word.size()==0){
            return root->isEnd;
        }
        int index=word[0]-'a';
        if(word[0]=='.'){
            for(int i=0;i<26;i++){
                if(root->children[i]!=NULL){
                    if(search(root->children[i],word.substr(1))){
                        return true;
                    }
                }
            }
            return false;
        }
        if(root->children[index]!=NULL){
            return search(root->children[index],word.substr(1));
        }
        else{
            return false;
        }
        
    }
public:
    WordDictionary() {
        root=new TrieNode('\0');
    }

    void addWord(string word) {
        addWord(root,word);
    }
    
    bool search(string word) {
        return search(root,word);
    }
};
int main(){
    
    return 0;
}