def binsearchidx(A, l, r, key):
  #import pdb; pdb.set_trace()
  mid = l + (r-l)/2
  while l <= r:
    mid = l + (r-l)/2
    if A[mid] > key:
      r = mid -1
      #return binsearchidx(A, l, r, key)
    elif A[mid] < key:
      if mid +1 < r and A[mid+1] > key:
        break
      else:
        l = mid + 1
    else:
      break
  return mid


def _3waymax(a, b, c):
  return max(abs(a-b), abs(a-c), abs(b-c))    
  
class Solution:
    # @param A : tuple of integers
    # @param B : tuple of integers
    # @param C : tuple of integers
    # @return an integer
    def minimize(self, A, B, C):
        minsofar = _3waymax(A[0], B[0], C[0])
        #minonA 
        i = 0
        j = 0 
        k = 0
        for i in range(0, len(A)):
          j = binsearchidx(B, 0, len(B)-1, A[i])
          k = binsearchidx(C, 0, len(C)-1, A[i])
          if _3waymax(A[i], B[j], C[k]) < minsofar:
            minsofar = _3waymax(A[i], B[j], C[k])

        #minonB   
        i = 0
        j = 0 
        k = 0
        for j in range(0, len(B)):
          i = binsearchidx(A, 0, len(A)-1, B[j])
          k = binsearchidx(C, 0, len(C)-1, B[j])
          if _3waymax(A[i], B[j], C[k]) < minsofar:
            minsofar = _3waymax(A[i], B[j], C[k])

        #minonC   
        i = 0
        j = 0 
        k = 0
        for k in range(0, len(C)):
          i = binsearchidx(A, 0, len(A)-1, C[k])
          j = binsearchidx(B, 0, len(B)-1, C[k])
          if _3waymax(A[i], B[j], C[k]) < minsofar:
            minsofar = _3waymax(A[i], B[j], C[k])

        
        return minsofar
