class Solution:
    # @param A : string
    # @return an integer
    def atoi(self, A):
        # int starts
        MAX_INT = (2 ** 31) - 1
        i = 0
        sign = 1
        # import pdb; pdb.set_trace()
        while i < len(A):
            if A[i] != ' ':
                break
            i += 1
        if A[i] == '+':
            i += 1
        elif A[i] == '-':
            sign = -1
            i += 1
        if ord(A[i]) < ord('0') or ord(A[i]) > ord('9'):
            return 0
        # start converting to int
        mint = 0
        while i < len(A):
            if ord(A[i]) < ord('0') or ord(A[i]) > ord('9'):
                break
            omint = mint
            mint = mint * 10 + ord(A[i]) - ord('0')
            if omint > mint or mint > MAX_INT:
                mint = MAX_INT if sign == 1 else (MAX_INT+1)
                break
            i += 1
        return sign * mint
