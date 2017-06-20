import math
class Solution:
    # @param A : integer
    # @return a list of integers
    def allFactors(self, A):
        f = []
        if A < 1:
            return f
        sqA = int(math.sqrt(A))
        for i in range(sqA, 0, -1):
            if A % i == 0:
                f.insert(0, i)
                if A/i != i:
                    f.append(A/i)
        return f
