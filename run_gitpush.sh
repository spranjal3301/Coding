#! /bin/bash

# This script is used to push the changes to the remote repository

# Check if the user has provided the commit message

git add .

git commit -m "ubuntu"
 
git push origin master

git status

