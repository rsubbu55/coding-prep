class Solution:
    # @param A : string
    # @param B : string
    # @return a strings
    def addBinary(self, A, B):
        A=A.strip()
        B=B.strip()
        m = len(A)
        n = len(B)
        if m < n:
            A = str('0'*(n-m)) + str(A)
            m = n;
        elif m > n:
            B = str('0'*(m-n)) + str(B)
            n = m
        #print "A={}\\n, B= {}\\n\n".format(A, B)
        R = ''
        c = 0
        for i in range(m-1, -1, -1):
            a = 1 if A[i] == '1' else 0
            b = 1 if B[i] == '1' else 0
            x = a ^ b ^ c
            R = str(x) + R
            if (a + b + c) > 1:
                c = 1
            else:
                c = 0
        if c:
            R = str(c) + R
        return R
        
            