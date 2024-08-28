#! Process Management Commands

#` ps: Displays information about active processes.
ps aux: Shows a detailed list of all processes running on the system.
ps -ef: Another format for listing processes with additional details.


top: Displays real-time information about system processes, including CPU and memory usage.
htop: An enhanced version of top with a more user-friendly interface (needs to be installed separately on some systems).

#` kill: Sends a signal to a process, typically to terminate it.
kill [PID]: Sends the TERM signal (default) to the process with the specified Process ID (PID).
kill -9 [PID]: Sends the KILL signal, forcefully terminating the process.

#` killall: Kills all processes matching a certain name.
killall [process_name]: Terminates all processes with the specified name.

#` pkill: Sends a signal to processes based on name or other attributes.
pkill [process_name]: Terminates processes by name.
pkill -u [username]: Kills all processes owned by a specific user.

#` bg: Resumes a suspended job in the background.
bg [job_id]: Puts the specified job in the background.

#` fg: Brings a background job to the foreground.
fg [job_id]: Resumes the specified job in the foreground.

jobs: Lists the jobs that are running in the background or have been suspended.

#` nohup: Runs a command immune to hangups, meaning it will continue running even if the session is closed.
nohup [command] &: Runs the specified command in the background.



#! System Monitoring Commands

#` df: Displays disk space usage of file systems.
df -h: Shows disk usage in human-readable format (e.g., GB, MB).

#` du: Estimates file space usage.
du -sh [directory_name]: Displays the total size of a directory.

#` free: Displays information about free and used memory in the system.
free -h: Shows memory usage in a human-readable format.

uptime: Shows how long the system has been running, the number of users, and the load average.

#` vmstat: Reports virtual memory statistics.
vmstat 5: Continuously displays statistics every 5 seconds.

#` iostat: Reports CPU and I/O statistics.
iostat 5: Continuously displays statistics every 5 seconds.

#`` netstat: Displays network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
netstat -tuln: Lists all listening ports (TCP and UDP).

ss: Another command to investigate sockets (like netstat).
ss -tuln: Shows listening TCP and UDP sockets.


#` dmesg: Prints the kernel ring buffer messages, which can help diagnose hardware and kernel-related issues.
dmesg | grep [keyword]: Filters messages containing a specific keyword.


User Management Commands
whoami: Displays the current user name.

#` id: Displays user and group information.
id [username]: Shows the user ID (UID), group ID (GID), and groups for the specified user.

who: Shows who is currently logged into the system.

last: Displays a list of the last logged-in users.

#` su: Switches to another user account.
su - [username]: Switches to the specified user, creating a login shell.

#` sudo: Executes a command as another user (typically as root).
sudo [command]: Runs the specified command with elevated privileges.

#` passwd: Changes a user’s password.
passwd [username]: Changes the password for the specified user.

