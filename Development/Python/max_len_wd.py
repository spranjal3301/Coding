a="Thank you for participation your comment and your"
count=0
max=0
for index,i in enumerate(a):
    if(i==" "):
        count=0
        continue
    count=count+1
    if(count>max):
        k=index
        max=count

# print(max)
print(a[k+1-max:k+1])
max=1
b=a.split(" ")
for i,j in enumerate(b):
    k=b.count(j)
    if(k>max):
        max=k
        g=j
print(g)
