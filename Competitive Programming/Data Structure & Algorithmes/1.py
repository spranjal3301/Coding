def find_xorry_pair(x):
    a, b = 0, 0

    # Finding the rightmost set bit position
    bit_position = 0
    while (1 << bit_position) <= x:
        bit_position += 1
    # Finding the most significant bit
    msb = 1 << (bit_position - 1)

    # XORing with the most significant bit
    a = msb
    b=x^a
    print(b,a)


def main():
     # Input the number of test cases
    t = int(input().strip())
    for _ in range(t):
        x =int(input().strip()) 
        find_xorry_pair(x)
       

if __name__ == '__main__':
    main()