class Solution:
    # @param A : string
    # @return an integer
    def lengthOfLastWord(self, A):
        l = 0
        i =0
        while (A[i] != '/0'):
            if (A[i] != ' '):
                l = l+1
                i = i+1
                continue
            
            i = i+1
            if (A[i] != '/0' and A[i] != ' '):
                l=0
        return l
                
            
