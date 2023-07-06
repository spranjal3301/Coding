# for variable in range(start,stop,+increment/-decrement)

name="pranjal"
for i in name:
    print(i)

for i in [1,2,3,4,5,6]:
    print(i)

for i in range(15,27,3):
     print(i)

for i in range(27,15,-3):
     print(i)

colors = ["Red", "Green", "Blue", "Yellow"]
for x in colors:
    print(x)
    for i in x:
        print(i) 



count = 0
while (count > 27):
  print(count)
  count = count + 1

# Sentinels are singleton objects that typically represent some terminating (end) condition or have a special, symbolic meaning

a=int(input("-1 to quit"))
while a!= -1:
    a=int(input("-1 to quit"))
    # -1 is sentinels

# We can even use the else statement with the while loop
x = 5
while (x > 0):
    print(x)
    x = x - 1
else:
    print('counter is 0')

# do while 
i=0
while True:
    print(i)
    if (i==10):
        break

for i in range(1,101,1):
    print(i ,end=" ")
    if(i==50):
        continue
    else:
        print("Mississippi")
print("Thank you")