class Solution:
    def maxPossibleScore(self, s, d):
        s.sort()
        def f(md):
            p = s[0]
            for i in range(1, len(s)):
                if p + md <= s[i] + d:
                    p = max(p + md, s[i])
                else:
                    return False
            return True
        
        l, r = 0, s[-1] + d - s[0]
        m = 0
        while l <= r:
            mid = (l + r) // 2
            if f(mid):
                m = mid
                l = mid + 1
            else:
                r = mid - 1
        
        return m
