class Solution:
    # @param A : list of strings
    # @return a strings
    def longestCommonPrefix(self, A):
        pfx = ''
        if not len(A):
            return pfx
        #import pdb; pdb.set_trace()
        for i in range(0,len(A[0])):
            endloop = False
            for j in range(0, len(A)-1):
                if i >= len(A[j]) or i >= len(A[j+1]):
                    endloop = True
                    break
                if A[j][i] != A[j+1][i]:
                    break
            else:
                pfx += A[0][i]
            if endloop:
                break
        return pfx
        
        
                
            

