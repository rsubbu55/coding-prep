#!/bin/python
'''
Given two strings representing binary numbers return the sum of these two
numbers in binary format as a string

Input May have leading zeros
Output should not have leading zeros

'''
def addBinary(A, B):
    m = len(A)
    n = len(B)
    if m < n:
        A = '0'*(n-m) + A
        m = n;
    elif m > n:
        B = '0'*(m-n) + B
        n = m
    #print "A={}, B= {}\n".format(A, B)
    R = ''
    c = 0
    for i in range(m-1, -1, -1):
        #print 'i={} A[i]={} B[i]={} c={} R={}'.format(i, A[i], B[i], c, R)
        x = (int(A[i]) ^ int(B[i])) ^ c
        R = str(x) + R
        c = (int(A[i]) & int(B[i])) | ( (int(A[i]) | int(B[i])) & c)
    return R

if __name__ == '__main__':
    R = addBinary("100", "11")
    print R

