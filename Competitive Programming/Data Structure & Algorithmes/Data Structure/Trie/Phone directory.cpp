#include <bits/stdc++.h>
using namespace std;
class TrieNode
{
public:
    char data;
    TrieNode *children[26]; //* a-z
    bool isEnd;
    TrieNode(char data)
    {
        this->data = data;
        for (int i = 0; i < 26; i++)
        {
            children[i] = NULL;
        }
        isEnd = false;
    }
};
class Trie
{
    TrieNode *root;

    void insert(TrieNode *root, string word)
    {
        if (word.size() == 0)
        {
            root->isEnd = true;
            return;
        }
        int index = word[0] - 'a';
        TrieNode *child;

        //! char present
        if (root->children[index] != NULL)
        {
            child = root->children[index];
        }
        else
        {
            child = new TrieNode(word[0]);
            root->children[index] = child;
        }

        insert(child, word.substr(1));
    }
    void printSuggestion(TrieNode *curr, vector<string> &temp, string prefix)
    {
        if (curr->isEnd)
        {
            temp.push_back(prefix);
        }

        for (int c = 'a'; c <= 'z'; c++)
        {
            TrieNode *next = curr->children[c - 'a'];

            if (next != NULL)
            {
                prefix.push_back(c);
                printSuggestion(next, temp, prefix);
                prefix.pop_back();
            }
        }
    }

public:
    Trie()
    {
        root = new TrieNode('\0'); //! root start with NULL char
    }
    void addWord(string word) { insert(root, word); }
    vector<vector<string>> getSuggestion(string str)
    {
        TrieNode *prev = root;
        vector<vector<string>> ans;
        string prefix = "";
        for (int i = 0; i < str.size(); i++)
        {
            char c = str[i];
            prefix.push_back(c);

            TrieNode *curr = prev->children[c - 'a'];

            vector<string> temp;
            if (curr == NULL)
            {
                temp = {"0"};
                while (i < str.size())
                {
                    ans.push_back(temp);
                    i++;
                }
                break;
            }

            printSuggestion(curr, temp, prefix);
            ans.push_back(temp);
            prev = curr;
        }
        return ans;
    }
};
class Solution
{
public:
    vector<vector<string>> displayContacts(int n, string contact[], string s)
    {
        Trie *t = new Trie();
        for (int i = 0; i < n; i++)
        {
            t->addWord(contact[i]);
        }

        return t->getSuggestion(s);
    }
};
int main()
{

    return 0;
}