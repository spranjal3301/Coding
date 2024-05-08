def solve(N, K, A):
    dp = [False] * (1 << K)
    dp[0] = True
    for i in range(N):
        mask = int(A[i], 2)
        for j in range((1 << K) - 1, -1, -1):
            if dp[j]:
                dp[j | mask] = True
    for j in range(1, 1 << K):
        if not dp[j]:
            return "NO"
    return "YES"

T = int(input())
for _ in range(T):
    N, K = map(int, input().split())
    A = [input() for _ in range(N)]
    print(solve(N. K. A))

