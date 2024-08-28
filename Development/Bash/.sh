#! File Management Commands

#` ls: Lists directory contents.
ls -l: Lists contents in long format (with details like permissions, owner, size).
ls -a: Lists all files, including hidden files.


#` cp: Copies files or directories.
cp [source] [destination]: Copies a file from source to destination.

#` mv: Moves or renames files or directories.
mv [source] [destination]: Moves a file or renames it.

#` rm: Removes files or directories.
rm [file_name]: Deletes the specified file.
rm -r [directory_name]: Recursively deletes a directory and its contents.
rm -rf [directory_name]:force deletes directory

#` mkdir: Creates a new directory.
mkdir [directory_name]: Creates a directory with the specified name.

#` rmdir: Removes empty directories.
rmdir [directory_name]: Deletes the specified empty directory.



#` chown: Changes the owner of a file or directory.
chown [user]:[group] [file_name]: Changes the owner and group of the specified file.

ln: Creates hard and symbolic links.
ln [target] [link_name]: Creates a hard link.
ln -s [target] [link_name]: Creates a symbolic link.



#! chmod : change directory permissions in Linux?
#` chmod: Changes file or directory permissions.
chmod [permissions] [file_name]: Sets the permissions for the specified file.


#* ls -l 
#` - rwx  r-- r--  
#  0 123  456 789

#  'r' indicates read permission
#  'w' indicates write permission
#  'x' indicates execute permission
#  '-' indicates no permission

#- 0: indicates the file type
#  '-' indicates a regular file
#  'd' indicates a directory
#  'l' indicates a symbolic link

#- 123: indicates the owner's permissions
#- 456: indicates the group's permissions
#- 789: indicates the others' permissions

chmod +rwx filename to add permissions
chmod -rwx directoryname to remove permissions. 
chmod +x filename to allow executable permissions.

# “g” for group 
# “o” for others
# “u” for user/owner
# “a” for all 

#? chmod g+x filename to give the group executable permission.


# Changing Linux permissions in numeric code
# 0 = No Permission
# 1 = Execute
# 2 = Write
# 4 = Read

# 0 = ---

# 1 = --x

# 2 = -w-

# 3 = -wx

# 4 = r-

# 5 = r-x

# 6 = rw-

# 7 = rwx
chmod 777 foldername will give read, write, and execute permissions for everyone.

chmod 700 foldername will give read, write, and execute permissions for the user only.

chmod 327 foldername will give write and execute (3) permission for the user, w (2) for the group, and read, write, and execute for the users


#! Cut command in Linux
#* The cut command in Linux extracts a section from each line of a file.

cut -b 1-4 filename.txt  : Extracts the first four bytes of each line in the file.
cut -c 1-4 filename.txt  : Extracts the first four char of each line in the file.
cut -d "," -f 1 filename.txt :  Extracts the first field of each line in the file, using a comma as the delimiter.


echo "apple,banana,cherry" | cut -d "," -f 2
Output:
banana

#! echo command in Linux
#* The echo command in Linux is used to display a line of text/string that is passed as an argument.

#  used to  display  shell scripts and command-line operations to print messages or values of variables.

#!paste command in Linux 















