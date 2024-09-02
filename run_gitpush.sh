#! /bin/bash

# This script is used to push the changes to the remote repository

# Check if the user has provided the commit message

git add .

if [ -z "$1" ]
then
    echo "Please provide a commit message"
else
    git commit -m "$1"
    git push origin master
    git status
fi