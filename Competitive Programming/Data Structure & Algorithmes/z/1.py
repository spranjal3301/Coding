class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        max_future_value = [[-float('inf')]* n for _ in range(m)]
        max_future_value[m-1][n-1] = grid[m-1] [n-1]
        for i in range(m-1, -1, -1):
            for j in range(n-1, -1, -1):
                if i < m-1:
                    max_future_value[i][j] = max(max_future_value[i][j], max_future_value[i+1][j])
                if j <n-1:
                    max_future_value[i][j] = max(max_future_value[i][j], max_future_value[i][j+1])
                max_future_value[i][j] = max(max_future_value[i][j], grid[i][j])
        max_score=-float('inf')
        for i in range(m):
            for i in range(n):
                if i < m-1:
                    max_score= max(max_score, max_future_value[i+1][j]-grid[i][j])
                if j <n-1:
                    max_score= max(max_score, max_future_value[i][j+1] - grid[i][j])
        return max_score
sol=Solution()

