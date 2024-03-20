#include <iostream>
using namespace std;

int bag(int sf,int l,int st,int j,int k)
{
	if(j>k)
		return 0;
	if(sf < 0 )
		return 0;
	if(st == 1 && sf >l)
		return 0;
	if(st == 1 && sf <= l)
	{
		if(sf<l)
			return 1;
		else
			if(j==k)
				return 0;
			else
				return 1;
	}
	int r = 0;
	int total = 0;
	for(r=0;r<=l;r++)
	{
		if(r == l)
		{
			j++;
			total+= bag(sf-r,r,st-1,j,k);
		}
		else
		{
			total+= bag(sf-r,r,st-1,1,k); 
		}
	}
	return total;
}
int main()
{
	int N,L,X,K;
	cin >> N >> L >> X >> K;
	int q =0;
	int cnt = 0;
	int ans = 0;
	for(q=L;q<=N;q++)
	{
		cnt =0;
		int mx = (5*X) - q;
		if(mx>0)
			for(int i=0;i<mx;i++)
				cnt = cnt + bag(i,X-1,5,0,K);
		ans = ans + cnt;
	}
	
	cout << ans<< endl;
	return 0;
}
//N L K X
//10 8 6 2