#include<bits/stdc++.h>
using namespace std;

class TrieNode {
public:
    std::unordered_map<char, TrieNode*> children;
    bool is_end_of_word;
    
    TrieNode() : is_end_of_word(false) {}
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() : root(new TrieNode()) {}

    void insert(const std::string& word) {
        TrieNode* current = root;
        for (char c : word) {
            if (current->children.find(c) == current->children.end()) {
                current->children[c] = new TrieNode();
            }
            current = current->children[c];
        }
        current->is_end_of_word = true;
    }

    bool search(const std::string& word) {
        TrieNode* node = find_node(word);
        return (node != nullptr && node->is_end_of_word);
    }

    bool starts_with(const std::string& prefix) {
        return find_node(prefix) != nullptr;
    }
    int findPrefix(const std::string& str) {
        int length=0;
        TrieNode* current = root;
        for (char c : str) {
            if (current->children.find(c) == current->children.end()) {
                return length;
            }
            current = current->children[c];
            length++;
        }
        return length;
    }

private:
    TrieNode* find_node(const std::string& str) {
        TrieNode* current = root;
        for (char c : str) {
            if (current->children.find(c) == current->children.end()) {
                return nullptr;
            }
            current = current->children[c];
        }
        return current;
    }
};