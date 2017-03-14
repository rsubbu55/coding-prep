class Solution:
    # @param A : string
    # @return an integer
    def romanToInt(self, A):
        rtoi = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        order = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        
        if len(A) <=0:
            return 0
            
        i = 0
        ret = 0
        while i < len(A):
          it = 0
          c = rtoi[A[i]]
          if i+1 < len(A):
            n = rtoi[A[i+1]]
          else:
            n = 0
          if c >= n:
            if i+2 < len(A):
              n2 = rtoi[A[i+2]]
            else:
              n2 = 0
            if n2 > n:
              it = c + (n2-n)
              i = i+1
            else:
              it = c+n
          else:
            it = n-c
          ret += it
          i = i + 2
        return ret
