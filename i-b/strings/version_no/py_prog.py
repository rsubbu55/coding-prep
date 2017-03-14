class Solution:
    # @param A : string
    # @param B : string
    # @return an integer
    def compareVersion(self, A, B):
        spa = A.split('.')
        spb = B.split('.')
        mlen = min(len(spa), len(spb))
        r = 0
        for i in range(0, mlen):
            if int(spa[i]) > int(spb[i]):
                return 1
            elif int(spa[i]) < int(spb[i]):
                return -1
        i = mlen
        for i in range(mlen, len(spa)):
            if int(spa[i]) > 0:
                return 1
        for i in range(mlen, len(spb)):
            if int(spb[i]) > 0:
                return -1
        return 0
            
            
