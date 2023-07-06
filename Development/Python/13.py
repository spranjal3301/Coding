def prime(b):
    for i in range(2, b):
        if (b % i == 0):
            # print("not prime")
            return 0
    return 1

a = int(input("Input"))
c = a/2
if (a % 2 != 0):
    c = (a+1)/2

for j in range(3, int(c)+1):
    for k in range(3, a):
        if (prime(j) and prime(k)):
            if (j+k == a):
                print(f"{j}+{k}={j+k}")
print("NA")
