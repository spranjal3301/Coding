#include<bits/stdc++.h>
using namespace std;

//* Brian Kernighan’s Algorithm for counting set Bits
int count_one(int n,int count=0) {
    while(n) {
        n = n&(n-1);
        count++;
    }
    return count;
}

bool isPowerOfFour(int n) {
    return !(n&(n-1)) && (n&0x55555555);
    //check the 1-bit location;
}

int getSum(int a, int b) {
    return b==0? a:getSum(a^b, (a&b)<<1); //be careful about the terminating condition;
}

int missingNumber(vector<int>& nums) {
    int ret = 0;
    for(int i = 0; i < nums.size(); ++i) {
        ret ^= i;
        ret ^= nums[i];
    }
    return ret^=nums.size();
}

long largest_power(long N) {
    //changing all right side bits to 1.
    N = N | (N>>1);
    N = N | (N>>2);
    N = N | (N>>4);
    N = N | (N>>8);
    N = N | (N>>16);
    return (N+1)>>1;
}

//* Reverse bits of a given 32 bits unsigned integer.
uint32_t reverseBits(uint32_t n) {
    unsigned int mask = 1<<31, res = 0;
    for(int i = 0; i < 32; ++i) {
        if(n & 1) res |= mask;
        mask >>= 1;
        n >>= 1;
    }
    return res;
}
//another way
uint32_t reverseBits(uint32_t n) {
	uint32_t mask = 1, ret = 0;
	for(int i = 0; i < 32; ++i){
		ret <<= 1;
		if(mask & n) ret |= 1;
		mask <<= 1;
	}
	return ret;
}



//* Binary representation of a given number
void bin(unsigned n) 
{ 
    if (n > 1) 
        bin(n>>1); 
        
    cout<<(n & 1)<<endl;
}


int main(){
//! Bit Manipulation Cheat Sheet

    //*int --> 4 bytes --> 32 bits (0-31) 31 is the sign bit (0 for +ve and 1 for -ve)


    int x=10,y=0, z=10;
    //` Basic Operations
    //-  << : Left Shift(x<<k = x*2^k)
    //-  >> : Right Shift(x>>k = x/2^k)
    //?  & : Bitwise AND
    //?  | : Bitwise OR
    //?  ^ : Bitwise XOR
    //?  ~ : Bitwise NOT (1's Complement of x (if negative then 2's complement)(else stop))
    //? setBit : 1

    //? Set union A | B
    //? Set intersection A & B
    //? Set subtraction A & ~B
    //? Set negation ALL_BITS ^ A or ~A
    //? Set bit A |= 1 << bit
    //? Clear bit A &= ~(1 << bit)
    //? Test bit (A & 1 << bit) != 0
    //? Extract last bit A&-A or A&~(A-1) or x^(x&(x-1))
    //? Remove last bit A&(A-1)
    //? Get all 1-bits ~0

    
    cout<<(x&(x-1))<<endl;

    //- Check if two integers have opposite signs
    if((x^y) <0) cout<<"Opposite Signs"<<endl;

    //- Add 1 to a given number
    x=(-(~x));

    //- Multiply a number by 2
    x<<1;

    //- Divide a number by 2
    x>>1;

    //-2^x
    1<<x;

    //- rightmost 1 becomes 0.
    x&(x-1);


    //- Check whether a given number is a power of 4 or not
    if(!(x & (x-1)))
        if(__builtin_ctz(x)%2==0)
            return true;
    
    //- Count number of bits to be flipped to convert A to B
    int a=10,b=20;
    __builtin_popcount(a ^ b); //?a^b will give the bits that are different in a and b. 

    //- Compute modulus division by a power-of-2-number
    int powerOf2 = 1<<10;
    x & (powerOf2 - 1); //? = x % powerOf2


    //- Rotate bits of a number

    //`leftCircularShift 
    int shiftBy=2;   
    cout<<((x<<shiftBy) | (x>>shiftBy));

    //` rightCircularShift
    (x>>shiftBy) | (x<<shiftBy);


    //- Find whether a no is power of two
    int n=16;
    (n>0 and !(n&(n-1)));


    //- Position of rightmost set bit
    ffs(x);
    //another way
    log2(x & -x)+1;
    //another way
    if(x!=0)__builtin_ctz(x)+1;//?count trailing zeroes+1


    //- Calculate XOR from 1 to n
    switch(n & 3) //? n % 4  
    { 
        case 0: return n;     // if n is multiple of 4 
        case 1: return 1;     // If n % 4 gives remainder 1   
        case 2: return n + 1; // If n % 4 gives remainder 2     
        case 3: return 0;     // If n % 4 gives remainder 3   
    } 

    //- Swap two numbers
    x=x^y;
    y=x^y; //?y=x
    x=x^y;

    //- Swap two numbers:Shortest way
    x^=y^=x^=y;

    //- Swap three variables
    x = x ^ y ^ z;
    y = x ^ y ^ z;
    z = x ^ y ^ z;
    x = x ^ y ^ z;

    //- Find position of only set bit
    if(!(n&(n-1))) //?check if n is power of 2
        ffs(n); //?count position of set bit


    //- Turn off a particular bit in a number
    int pos=2;
    x & (~1<<(pos-1));

    //- Toggle Kth bit of a number
    int k=2;
    x = x ^  1<<(k-1);

    //- Toggle all bits except Kth bit of a number
    x = ~(x ^ 1<<(k-1));

    //- Toggle the last m bits
    int m=2;
    (x ^ ~(-1<<m));


    //- Check if 2 numbers are equal
    bool isEqual= (x^y)==0;


    //- Find XOR of numbers without using xor operator
    (x | y) & (~x | ~y);

    //- Set the rightmost unset bit
    x = x | (x+1);

 


    //- Maximum XOR-value of at-most k-elements from 1 to n

    int x = log2(n) + 1;
    return x<<1 - 1;

    //Alt way

    int res = 1; 
    while (res <= n) 
        res <<= 1; 
    // Finding number greater than 
    // or equal to n with most significant  
    // bit same as n. For example, if n is 
    // 4, result is 7. If n is 5 or 6, result  
    // is 7 
    // Return res - 1 which denotes 
    // a number with all bits set to 1 
    return res - 1; 
 

    //- Check if a number is divisible by 8 using bitwise operators
    (((n >> 3) << 3) == n);


    //- Toggle bits of a number except first and last bits

    int size = sizeof(int)*8 - __builtin_clz(n);
    int one = (1<<(size-1))-1;
    n = n ^ one;
    n = n ^ 1;


    //- Toggle all even bits of a number

    int temp = n,i=1;
    while(temp){
        n = n ^ 1>>(i*2);
        i++;
        temp = temp>>1;
    }





    
    return 0;
}