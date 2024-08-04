#! How do I change directory permissions in Linux?

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

# Changing ownership in Linux



